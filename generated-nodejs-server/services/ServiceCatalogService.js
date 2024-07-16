/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ServiceCatalog
* This operation creates a ServiceCatalog entity.
*
* serviceCatalogFVO ServiceCatalogFVO The ServiceCatalog to be created
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceCatalog
* */
const createServiceCatalog = ({ serviceCatalogFVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCatalogFVO,
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
* Deletes a ServiceCatalog
* This operation deletes a ServiceCatalog entity.
*
* id String Identifier of the Resource
* no response value expected for this operation
* */
const deleteServiceCatalog = ({ id }) => new Promise(
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
* List or find ServiceCatalog objects
* List or find ServiceCatalog objects
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* sort String Comma-separated properties for sorting (prefix with '-' for descending (optional)
* returns List
* */
const listServiceCatalog = ({ fields, offset, limit, UnderscoredynamicUnderscoreparams, filter, sort }) => new Promise(
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
* Updates partially a ServiceCatalog
* This operation updates partially a ServiceCatalog entity.
*
* id String Identifier of the Resource
* serviceCatalogMVO ServiceCatalogMVO The ServiceCatalog to be patched
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceCatalog
* */
const patchServiceCatalog = ({ id, serviceCatalogMVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        serviceCatalogMVO,
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
* Retrieves a ServiceCatalog by ID
* This operation retrieves a ServiceCatalog entity. Attribute selection enabled for all first level attributes.
*
* id String Identifier of the Resource
* fields String Comma-separated properties to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* returns ServiceCatalog
* */
const retrieveServiceCatalog = ({ id, fields, UnderscoredynamicUnderscoreparams, filter }) => new Promise(
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
  createServiceCatalog,
  deleteServiceCatalog,
  listServiceCatalog,
  patchServiceCatalog,
  retrieveServiceCatalog,
};
