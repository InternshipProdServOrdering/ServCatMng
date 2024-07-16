const Service = require('./Service');

function getCircularReplacer() {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
}


function removeCircularReferences(obj) {
  const seen = new WeakSet();
  function detectCircularRefs(value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          value[key] = detectCircularRefs(value[key]);
        }
      }
    }
    return value;
  }
  return detectCircularRefs(obj);
}

const createServiceCatalog = (args, context /* productCatalogFVOfields */) =>
  new Promise(async (resolve) => {
    context.classname = "ServiceCatalog";
    context.operationId = "createServiceCatalog";
    context.method = "post";
    try {
      /* NOT matching isRestful */
      console.log("createServiceCatalog: args =", JSON.stringify(args, getCircularReplacer()));
      console.log("createServiceCatalog: context =", JSON.stringify(context, getCircularReplacer()));

      // Remove circular references
      const cleanedArgs = removeCircularReferences(args.body);
      
      const result = await Service.serve(cleanedArgs, context);
      //console.log("createServiceCatalog: result =", JSON.stringify(result, getCircularReplacer()));
      resolve(result);
      //resolve(Service.serve(args, context));
    } catch (e) {
      console.error("createServiceCatalog: error =", e);
      resolve(
        Service.rejectResponse(
          {
            "@type": "Error",
            "reason": e.message || "Invalid input",
            "code": e.status ? e.status.toString() : "405",
          },
          e.status || 405
        )
      );
    }
  });


const deleteServiceCatalog =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "deleteServiceCatalog";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

const listServiceCatalog =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "listServiceCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

const patchServiceCatalog =  ( args, context /* idServiceCatalogMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "patchServiceCatalog";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
const retrieveServiceCatalog =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCatalog";
        context.operationId  = "retrieveServiceCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          console.log("createServiceCatalog: args =", JSON.stringify(args, getCircularReplacer()));
          console.log("createServiceCatalog: context =", JSON.stringify(context, getCircularReplacer()));

          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

module.exports = {
    createServiceCatalog,
    deleteServiceCatalog,
    listServiceCatalog,
    patchServiceCatalog,
    retrieveServiceCatalog,
};

