'use strict';

const uuid = require('uuid');

const swaggerUtils = require('../utils/swaggerUtils');
const mongoUtils = require('../utils/mongoUtils');

const config = require('../config.json');

const logger = require('../logger')

const {TError, TErrorEnum} = require('../utils/errorUtils');

function traverse(req,schema,obj,operations,key,path) {
  operations = operations || [];
  path = path || "";

  return new Promise(function(resolve, reject) {

    // type is only undefined in not found in the parent schema
    // allow for properties not in schema by setting config strict_schema to false
    // defalt handling set to strict
    var strict_schema = true;
    if(config.strict_schema!=undefined) {
      strict_schema=config.strict_schema;
    }
    if(strict_schema && schema===undefined) {
        const error = new TError(TErrorEnum.INVALID_BODY_FIELD, 
                            "Property: " + key + " not allowed in resource " + path);
        return reject(error);
    }

    // nothing to do if not an object (or an array)
    if(typeof obj !== "object") {
      // console.log("traverse: no action for primitive element: type=" + JSON.stringify(type));
      var res = {key: key, val: obj};
      return resolve(res);
    }

    // need the definition of type to proceed 
    // const typedef = swaggerUtils.getTypeDefinition(type);
    // if(typedef==undefined) {
    //   return reject(new TError(TErrorEnum.UNPROCESSABLE_ENTITY, "Unknown type: " + type,req));
    // } 

    var promises;

    var nextPath = function(p,n) { return (p==="") ? n : p + "." + n; };

    if(Array.isArray(obj)) {
      
      var subschema = schema;
      promises = Object.keys(obj).map(idx => traverse(req,subschema,obj[idx],operations,idx,nextPath(path,idx)));

    } else {
        
      promises = Object.keys(obj).map(prop => {
        
        var subschema = schema;

        if(schema.properties!==undefined) {
          subschema = schema.properties[prop];
        }
 
        if(subschema===undefined) {
          // nothing to do right now
        } else if(subschema.type!==undefined && subschema.type==="array") {
          const type = subschema.items.$ref.split('/').slice(-1)[0];
          subschema = swaggerUtils.getTypeDefinition(type);

          // console.log("traverse: array: type=" + type + " subschema=" + JSON.stringify(subschema,null,2));

        } else if(subschema.$ref!==undefined) {
          const type = subschema.$ref.split('/').slice(-1)[0];
          subschema = swaggerUtils.getTypeDefinition(type);

          // console.log("traverse: object: type=" + type + " subschema=" + JSON.stringify(subschema,null,2));

        }         

        if(strict_schema && subschema===undefined) {
          return new Promise(function(resolve, reject) {
                const error = new TError(TErrorEnum.INVALID_BODY_FIELD, 
                            "Property: " + prop + " not allowed in resource " + path);
                reject(error);
            });

        } else {
          return traverse(req,subschema,obj[prop],operations,prop,nextPath(path,prop));
        }

      });
    };

    //
    // collect and return all schema errors before performing operations (if any) on the payload
    //
    executeAllPromises(promises).then(results => {
      
      if(results.errors.length>0) {
        console.log("traverse: error:" + JSON.stringify(results.errors));

        const message = results.errors.reverse().map(error => error.message).join(', ');

        return reject(new TError(TErrorEnum.INVALID_BODY_FIELD, message));

      } else {
        var res = Array.isArray(obj) ? [] : {};
        results.results.forEach(x => res[x.key]=x.val);
        
        var todos = operations.map(func => func(res,type,typedef));

        Promise.all(todos).then((x) => { 

          const res = path==="" ? obj : {key: key, val: obj};
          return resolve(res);

        })
        .catch(err => {
          console.log("traverse: error:" + JSON.stringify(err));
          return reject(err);
        })

      }

    })
    .catch(err => {
      console.log("traverse: error:" + JSON.stringify(err));
      // const error = new TError(TErrorEnum.UNPROCESSABLE_ENTITY, err);
      return reject(err);
    })
  })
};


function addHref(obj,type,typedef) {
  
  return new Promise(function(resolve, reject) {    
    // need obj to be a proper object
    // schema must specify href
    // obj must not have href already

    var result={};
    if(Array.isArray(obj) || !(typedef.href != undefined && obj.href == undefined)) {
      console.log("addHref: nothing to do for " + type);
      return resolve(obj);
    }

    // href found by looking up the relevant object instance, matching ALL properties 

    const baseType = type.replace("Ref","");

    mongoUtils.connect().then(db => {
      db.collection(baseType).find(obj).toArray()
      .then(doc => {
        var err;
        if(doc.length!=1) {
          err = new TError(TErrorEnum.RESOURCE_NOT_FOUND, 
            "Unable to locate sub-document " + type + " " + JSON.stringify(obj));
          return reject(err);
        }
        result.href = doc[0].href;
        return resolve(result);
      })
      .catch(err => {
        err = new TError(TErrorEnum.INTERNAL_ERROR, "Internal database error");
        return reject(err);
      })
    })
    .catch( err => {
      err = new TError(TErrorEnum.INTERNAL_ERROR, "Internal database error");
      return reject(err);
    })
  })
}

function replaceWithNativeTypes(typeDefinition, obj) {
  if(!typeDefinition) return obj

  if(typeDefinition?.['$ref']) {
    typeDefinition = swaggerUtils.getTypeDefinitionByRef(typeDefinition['$ref'])
    typeDefinition = typeDefinition?.properties || typeDefinition
  }

  if(Array.isArray(obj)) {
    const arrayDefinitions = typeDefinition?.items || typeDefinition
    obj = obj.map(o => replaceWithNativeTypes(arrayDefinitions,o))
  } else if(typeof obj === 'object') {
    Object.keys(obj).forEach(prop => {
      const definition = typeDefinition?.[prop]
      const format = definition?.format

      if(format==='date-time') {
        logger.info(`... replace ${prop} with native Date type`)
        obj[prop] = new Date(obj[prop])
      }

      if(typeof obj[prop] === 'object') {
        obj[prop] = replaceWithNativeTypes(typeDefinition[prop],obj[prop])
      }
      
    })
  } 
  return obj
}

async function replaceWithJavascriptTypes(type, obj, req) {
  return new Promise(function(resolve, reject) {    
    try {
      let typeDefinition = swaggerUtils.getTypeDefinition(type)
      typeDefinition = typeDefinition?.properties || typeDefinition
      return resolve(replaceWithNativeTypes(typeDefinition,obj))
    } catch(error) {
      logger.info("... error " + error)
      return resolve(obj)
    }

  })

}

function generateSampleValue(type,property) {
    
  logger.debug(`... generateSampleValue:: ${type}: property: ${property}`)

  const typedef = swaggerUtils.getTypeDefinition(type);    
  const typeOfProp = typedef?.properties?.[property]

  logger.debug(`... generateSampleValue:: ${type}: typeOfProp: ${typeOfProp}`)

  if(!typeOfProp) return

  try {
    return generateSampleValueForType(type, typeOfProp, `sample of ${property}`)
  } catch(error) {
    console.log("generateSampleValue:: error=" + error)
    return
  }
  
}

function generateSampleValueForType(type, typedef, candidateDefault) {
 
if(!typedef) return undefined

logger.debug(`... generateSampleValueForType:: typedef: ${JSON.stringify(typedef)}`)

if(typedef.format === 'date-time') {
  const OFFSET = 10000000
  return new Date( Date.now() + randomInt(OFFSET) )
}

if(typedef.enum) {
  return typedef.enum[0]
}

if(typedef['$ref']) {
  const ref = typedef['$ref'].split('/').splice(-1)[0]
  logger.debug(`... generateSampleValueForType:: ref: ${ref}`)
  const typeOfRef = swaggerUtils.getTypeDefinition(ref);    
  return generateSampleValueForType(ref, typeOfRef)
}

if(typedef.type === 'string') {
  return candidateDefault || "samplevalue"
}

if(typedef.type === 'boolean') {
  return false
}

if(typedef.properties) {
  const res={}
  Object.keys(typedef.properties).forEach(prop => {
    const sampleValue = generateSampleValue(type,prop)
    if(sampleValue) res[prop] = sampleValue 
  })
  return res
}

}

function printValue(value) {
  if(value instanceof Date) {
    return value.toISOString()
  } else {
    return value
  }
}


async function processMissingProperties(type, obj, req) {
  
  return new Promise(function(resolve, reject) {    

    logger.info(`... processMissingProperties: ${type}`)

    var typedef = swaggerUtils.getTypeDefinition(type);

    // logger.debug(`... processMissingProperties: ${JSON.stringify(typedef,null,2)}`)

    const required = typedef?.required

    typedef = typedef?.properties || typedef

    if(!typedef) {
      return resolve(obj)
    }

    if(Array.isArray(obj)) {
      return resolve(obj)
    }

    if(!type) {
      return resolve(obj)
    }

    required?.forEach(prop => {
      if(!obj[prop]) {
        logger.info(`... ${type}: missing required property ${prop}`)
        const sampleValue = generateSampleValue(type,prop)
        
        if(sampleValue) {
          obj[prop] = sampleValue
          logger.info(`... ${type}: setting property ${prop} to ${printValue(obj[prop])}`)
        } else {
          logger.info(`... ${type}: unable to create value for ${prop}`)
        }

      }
    })
    
    return resolve(obj)

  })
}

async function processExcludedInPost(type, obj, req) {
  
  return new Promise(function(resolve, reject) {    

    const createType = `${type}_Create`

    logger.info(`... processExcludedInPost: ${type} ${createType}`)

    var typedefCreate = swaggerUtils.getTypeDefinition(createType);

    if(!typedefCreate) {
      logger.info(`... processExcludedInPost: ${typedefCreate} not found`)
      return resolve(obj)
    }

    var typedef = swaggerUtils.getTypeDefinition(type);

    typedef = typedef?.properties || typedef
    typedefCreate = typedefCreate?.properties || typedefCreate

    if(!typedef || !typedefCreate) {
      return resolve(obj)
    }

    const typeKeys = Object.keys(typedef)
    const typeCreateKeys = Object.keys(typedefCreate)

    const deltaKeys = typeKeys.filter(prop => !typeCreateKeys.includes(prop))

    logger.debug(`... processMissingProperties: deltaKeys=${JSON.stringify(deltaKeys,null,2)}`)

    deltaKeys?.forEach(prop => {
      if(!obj[prop]) {
        logger.debug(`... ${type}: missing delta property ${prop}`)
        const sampleValue = generateSampleValue(type,prop)
        
        if(sampleValue) {
          obj[prop] = sampleValue
          logger.info(`... ${type}: setting property ${prop} to ${printValue(obj[prop])}`)
        } else {
          logger.info(`... ${type}: unable to create value for ${prop}`)
        }

      }
    })
    
    return resolve(obj)

  })
}

// function processCommonAttributes(req, type, obj) {
  
//   return new Promise(function(resolve, reject) {    

//     const typedef = swaggerUtils.getTypeDefinition(type);

//     console.log("processCommonAttributes:: typedef=" + JSON.stringify(typedef,null,2));

//     if(Array.isArray(obj)) {
//       return resolve(obj);
//     }

//     if(type===undefined) {
//       return resolve(obj);
//     }
    
//     if(typedef===undefined || typedef.properties===undefined) {
//       return resolve(obj);
//     }
    
//     const typeprops=typedef.properties;

//     if(typeprops.id!==undefined && obj.id==undefined) {
//       obj.id = uuid.v4();
//     };

//     if(typeprops.href!==undefined && obj.href==undefined) {
//       const self = req.url.replace(/\/$/,"") + "/" + obj.id;
//       obj.href = swaggerUtils.getURLScheme() + "://" + req.headers.host + self;
//     }
    
//     if(typeprops.lastUpdate!==undefined) {
//        obj.lastUpdate = (new Date()).toISOString();
//     }

//     if(typeprops["@schemaLocation"]!==undefined && obj["@schemaLocation"]===undefined) {
//       const url = swaggerUtils.getURLScheme() + "://" + swaggerUtils.getHost() + "/docs/#/" 
//       obj["@schemaLocation"] = encodeURI(url);
//     }

//     if(typeprops["@type"]!==undefined && obj["@type"]===undefined) {
//       obj["@type"] = type;
//     }

//     if(typeprops["@baseType"]!==undefined && obj["@baseType"]===undefined) {
//       obj["@baseType"] = type;
//     }

//     return resolve(obj);

//   })
// }

async function processCommonAttributes(type, obj, req) {
  
  return new Promise(function(resolve, reject) {    

    var typedef = swaggerUtils.getTypeDefinition(type);

    const required = typedef?.required

    typedef = typedef?.properties || typedef

    if(!typedef) {
      return resolve(obj)
    }

    if(Array.isArray(obj)) {
      return resolve(obj)
    }

    if(!type) {
      return resolve(obj)
    }

    if(typedef.id && !obj.id) {
      if(typedef.id?.type === 'string')
        obj.id = uuid.v4()
      else if(typedef.id?.type == 'integer') {
        obj.id = Math.floor( Math.random() * 1000000000000 )
      } else {
        obj.id = uuid.v4()
      }
    }

    if(req?.url && typedef.href && !obj.href) {

      const self = req.url.replace(/\/$/,"") + "/" + obj.id
      if(!self.startsWith('http') && req?.headers?.host) {
        obj.href = swaggerUtils.getURLScheme() + "://" + req.headers.host + self
      } else { 
        obj.href = self
      }

    }
    
    if(typedef.creationDate && !obj.creationDate) {
      obj.creationDate = new Date()
    }

    if(typedef.lastUpdate) {
       obj.lastUpdate = new Date()
    }

    if(typedef["@schemaLocation"] && !obj["@schemaLocation"]) {
      const ref = swaggerUtils.getTypePath(type);
      if(ref) {
        const url = config.SCHEMA_URL + "#/" + ref;
        obj["@schemaLocation"] = encodeURI(url)
      }
    }

    if(typedef["@type"] && !obj["@type"]) {
      obj["@type"] = type
    }

    if(typedef["@baseType"] && !obj["@baseType"]) {
      obj["@baseType"] = type
    }
    
    return resolve(obj)

  })
}

function setBaseProperties(req,payload) {
  return new Promise(function(resolve, reject) {
    if (payload.id == undefined) {
      payload.id = uuid.v4();
    };
    var self = req.url.replace(/\/$/,"") + "/" + payload.id;
    payload.href = swaggerUtils.getURLScheme() + "://" + req.headers.host + self;
    resolve(payload)
  })
}

//
// Support for collecting all errors from list of promises
// (inspired by https://stackoverflow.com/questions/30362733/handling-errors-in-promise-all) 
//  

function executeAllPromises(promises) {
  // Wrap all Promises in a Promise that will always "resolve"
  var resolvingPromises = promises.map(function(promise) {
    return new Promise(function(resolve) {
      var payload = new Array(2);
      promise.then(function(result) {
          payload[0] = result;
        })
        .catch(function(error) {
          payload[1] = error;
        })
        .then(function() {
          /* 
           * The wrapped Promise returns an array:
           * The first position in the array holds the result (if any)
           * The second position in the array holds the error (if any)
           */
          resolve(payload);
        });
    });
  });  
  

  var errors = [];
  var results = [];

  // Execute all wrapped Promises
  return Promise.all(resolvingPromises)
    .then(function(items) {
      items.forEach(function(payload) {
        if (payload[1]) {
          errors.push(payload[1]);
        } else {
          results.push(payload[0]);
        }
      });

      return {
        errors: errors,
        results: results
      };
    });
}

module.exports = { 
  traverse, 
  processCommonAttributes, 
  processMissingProperties, 
  setBaseProperties, 
  addHref, 
  replaceWithJavascriptTypes, 
  processExcludedInPost, 
  processMissingProperties,
  generateSampleValue };

