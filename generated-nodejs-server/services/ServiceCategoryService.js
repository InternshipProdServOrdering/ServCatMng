/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ServiceCategory
* This operation creates a ServiceCategory entity.
*
* serviceCategoryFVO ServiceCategoryFVO The ServiceCategory to be created
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceCategory
* */
const createServiceCategory = ({ serviceCategoryFVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCategoryFVO,
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
* Deletes a ServiceCategory
* This operation deletes a ServiceCategory entity.
*
* id String Identifier of the Resource
* no response value expected for this operation
* */
const deleteServiceCategory = ({ id }) => new Promise(
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
* List or find ServiceCategory objects
* List or find ServiceCategory objects
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* sort String Comma-separated properties for sorting (prefix with '-' for descending (optional)
* returns List
* */
const listServiceCategory = ({ fields, offset, limit, UnderscoredynamicUnderscoreparams, filter, sort }) => new Promise(
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
* Updates partially a ServiceCategory
* This operation updates partially a ServiceCategory entity.
*
* id String Identifier of the Resource
* serviceCategoryMVO ServiceCategoryMVO The ServiceCategory to be patched
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceCategory
* */
const patchServiceCategory = ({ id, serviceCategoryMVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        serviceCategoryMVO,
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
* Retrieves a ServiceCategory by ID
* This operation retrieves a ServiceCategory entity. Attribute selection enabled for all first level attributes.
*
* id String Identifier of the Resource
* fields String Comma-separated properties to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* returns ServiceCategory
* */
const retrieveServiceCategory = ({ id, fields, UnderscoredynamicUnderscoreparams, filter }) => new Promise(
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
  createServiceCategory,
  deleteServiceCategory,
  listServiceCategory,
  patchServiceCategory,
  retrieveServiceCategory,
};
