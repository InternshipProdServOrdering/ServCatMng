/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ServiceSpecification
* This operation creates a ServiceSpecification entity.
*
* serviceSpecificationFVO ServiceSpecificationFVO The ServiceSpecification to be created
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceSpecification
* */
const createServiceSpecification = ({ serviceSpecificationFVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceSpecificationFVO,
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
* Deletes a ServiceSpecification
* This operation deletes a ServiceSpecification entity.
*
* id String Identifier of the Resource
* no response value expected for this operation
* */
const deleteServiceSpecification = ({ id }) => new Promise(
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
* List or find ServiceSpecification objects
* List or find ServiceSpecification objects
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* sort String Comma-separated properties for sorting (prefix with '-' for descending (optional)
* returns List
* */
const listServiceSpecification = ({ fields, offset, limit, UnderscoredynamicUnderscoreparams, filter, sort }) => new Promise(
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
* Updates partially a ServiceSpecification
* This operation updates partially a ServiceSpecification entity.
*
* id String Identifier of the Resource
* serviceSpecificationMVO ServiceSpecificationMVO The ServiceSpecification to be patched
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceSpecification
* */
const patchServiceSpecification = ({ id, serviceSpecificationMVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        serviceSpecificationMVO,
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
* Retrieves a ServiceSpecification by ID
* This operation retrieves a ServiceSpecification entity. Attribute selection enabled for all first level attributes.
*
* id String Identifier of the Resource
* fields String Comma-separated properties to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* returns ServiceSpecification
* */
const retrieveServiceSpecification = ({ id, fields, UnderscoredynamicUnderscoreparams, filter }) => new Promise(
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
  createServiceSpecification,
  deleteServiceSpecification,
  listServiceSpecification,
  patchServiceSpecification,
  retrieveServiceSpecification,
};
