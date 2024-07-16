/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ExportJob
* This operation creates a ExportJob entity.
*
* exportJobFVO ExportJobFVO The ExportJob to be created
* fields String Comma-separated properties to be provided in response (optional)
* returns ExportJob
* */
const createExportJob = ({ exportJobFVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        exportJobFVO,
        fields,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a ExportJob
* This operation deletes a ExportJob entity.
*
* id String Identifier of the Resource
* no response value expected for this operation
* */
const deleteExportJob = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List or find ExportJob objects
* List or find ExportJob objects
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* sort String Comma-separated properties for sorting (prefix with '-' for descending (optional)
* returns List
* */
const listExportJob = ({ fields, offset, limit, UnderscoredynamicUnderscoreparams, filter, sort }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fields,
        offset,
        limit,
        UnderscoredynamicUnderscoreparams,
        filter,
        sort,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Retrieves a ExportJob by ID
* This operation retrieves a ExportJob entity. Attribute selection enabled for all first level attributes.
*
* id String Identifier of the Resource
* fields String Comma-separated properties to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* returns ExportJob
* */
const retrieveExportJob = ({ id, fields, UnderscoredynamicUnderscoreparams, filter }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        fields,
        UnderscoredynamicUnderscoreparams,
        filter,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createExportJob,
  deleteExportJob,
  listExportJob,
  retrieveExportJob,
};
