/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a ServiceCandidate
* This operation creates a ServiceCandidate entity.
*
* serviceCandidateFVO ServiceCandidateFVO The ServiceCandidate to be created
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceCandidate
* */
const createServiceCandidate = ({ serviceCandidateFVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCandidateFVO,
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
* Deletes a ServiceCandidate
* This operation deletes a ServiceCandidate entity.
*
* id String Identifier of the Resource
* no response value expected for this operation
* */
const deleteServiceCandidate = ({ id }) => new Promise(
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
* List or find ServiceCandidate objects
* List or find ServiceCandidate objects
*
* fields String Comma-separated properties to be provided in response (optional)
* offset Integer Requested index for start of resources to be provided in response (optional)
* limit Integer Requested number of resources to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* sort String Comma-separated properties for sorting (prefix with '-' for descending (optional)
* returns List
* */
const listServiceCandidate = ({ fields, offset, limit, UnderscoredynamicUnderscoreparams, filter, sort }) => new Promise(
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
* Updates partially a ServiceCandidate
* This operation updates partially a ServiceCandidate entity.
*
* id String Identifier of the Resource
* serviceCandidateMVO ServiceCandidateMVO The ServiceCandidate to be patched
* fields String Comma-separated properties to be provided in response (optional)
* returns ServiceCandidate
* */
const patchServiceCandidate = ({ id, serviceCandidateMVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        serviceCandidateMVO,
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
* Retrieves a ServiceCandidate by ID
* This operation retrieves a ServiceCandidate entity. Attribute selection enabled for all first level attributes.
*
* id String Identifier of the Resource
* fields String Comma-separated properties to be provided in response (optional)
* UnderscoredynamicUnderscoreparams Map  (optional)
* filter String  (optional)
* returns ServiceCandidate
* */
const retrieveServiceCandidate = ({ id, fields, UnderscoredynamicUnderscoreparams, filter }) => new Promise(
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
  createServiceCandidate,
  deleteServiceCandidate,
  listServiceCandidate,
  patchServiceCandidate,
  retrieveServiceCandidate,
};
