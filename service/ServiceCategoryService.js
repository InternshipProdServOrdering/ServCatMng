const Service = require('./Service');

const createServiceCategory =  ( args, context /* productCategoryFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "createServiceCategory";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

const deleteServiceCategory =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "deleteServiceCategory";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

const listServiceCategory =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "listServiceCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

const patchServiceCategory =  ( args, context /* idServiceCategoryMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "patchServiceCategory";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
const retrieveServiceCategory =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceCategory";
        context.operationId  = "retrieveServiceCategory";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

module.exports = {
    createServiceCategory,
    deleteServiceCategory,
    listServiceCategory,
    patchServiceCategory,
    retrieveServiceCategory,
};
