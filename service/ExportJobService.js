

const Service = require('./Service');

  /**
   * Creates a ExportJob
   * This operation creates a ExportJob entity.
   *
   * exportJobFVO ExportJobFVO The ExportJob to be created
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ExportJob
   **/
  const createExportJob =  ( args, context /* exportJobFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ExportJob";
        context.operationId  = "createExportJob";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createExportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ExportJob
   * This operation deletes a ExportJob entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteExportJob =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ExportJob";
        context.operationId  = "deleteExportJob";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteExportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ExportJob objects
   * List or find ExportJob objects
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listExportJob =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ExportJob";
        context.operationId  = "listExportJob";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listExportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ExportJob by ID
   * This operation retrieves a ExportJob entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ExportJob
   **/
  const retrieveExportJob =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ExportJob";
        context.operationId  = "retrieveExportJob";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveExportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createExportJob,
  deleteExportJob,
  listExportJob,
  retrieveExportJob,
};

