/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Client listener for entity ExportJobCreateEvent
* Example of a client listener for receiving the notification ExportJobCreateEvent
*
* exportJobCreateEvent ExportJobCreateEvent ExportJob create Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const exportJobCreateEvent = ({ exportJobCreateEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        exportJobCreateEvent,
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
* Client listener for entity ExportJobStateChangeEvent
* Example of a client listener for receiving the notification ExportJobStateChangeEvent
*
* exportJobStateChangeEvent ExportJobStateChangeEvent ExportJob stateChange Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const exportJobStateChangeEvent = ({ exportJobStateChangeEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        exportJobStateChangeEvent,
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
* Client listener for entity ImportJobCreateEvent
* Example of a client listener for receiving the notification ImportJobCreateEvent
*
* importJobCreateEvent ImportJobCreateEvent ImportJob create Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const importJobCreateEvent = ({ importJobCreateEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        importJobCreateEvent,
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
* Client listener for entity ImportJobStateChangeEvent
* Example of a client listener for receiving the notification ImportJobStateChangeEvent
*
* importJobStateChangeEvent ImportJobStateChangeEvent ImportJob stateChange Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const importJobStateChangeEvent = ({ importJobStateChangeEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        importJobStateChangeEvent,
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
* Client listener for entity ServiceCandidateChangeEvent
* Example of a client listener for receiving the notification ServiceCandidateChangeEvent
*
* serviceCandidateChange ServiceCandidateChange ServiceCandidate change Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCandidateChangeEvent = ({ serviceCandidateChange, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCandidateChange,
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
* Client listener for entity ServiceCandidateCreateEvent
* Example of a client listener for receiving the notification ServiceCandidateCreateEvent
*
* serviceCandidateCreateEvent ServiceCandidateCreateEvent ServiceCandidate create Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCandidateCreateEvent = ({ serviceCandidateCreateEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCandidateCreateEvent,
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
* Client listener for entity ServiceCandidateDeleteEvent
* Example of a client listener for receiving the notification ServiceCandidateDeleteEvent
*
* serviceCandidateDeleteEvent ServiceCandidateDeleteEvent ServiceCandidate delete Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCandidateDeleteEvent = ({ serviceCandidateDeleteEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCandidateDeleteEvent,
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
* Client listener for entity ServiceCatalogBatchEvent
* Example of a client listener for receiving the notification ServiceCatalogBatchEvent
*
* serviceCatalogBatch ServiceCatalogBatch ServiceCatalog batch Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCatalogBatchEvent = ({ serviceCatalogBatch, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCatalogBatch,
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
* Client listener for entity ServiceCatalogChangeEvent
* Example of a client listener for receiving the notification ServiceCatalogChangeEvent
*
* serviceCatalogChange ServiceCatalogChange ServiceCatalog change Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCatalogChangeEvent = ({ serviceCatalogChange, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCatalogChange,
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
* Client listener for entity ServiceCatalogCreateEvent
* Example of a client listener for receiving the notification ServiceCatalogCreateEvent
*
* serviceCatalogCreateEvent ServiceCatalogCreateEvent ServiceCatalog create Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCatalogCreateEvent = ({ serviceCatalogCreateEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCatalogCreateEvent,
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
* Client listener for entity ServiceCatalogDeleteEvent
* Example of a client listener for receiving the notification ServiceCatalogDeleteEvent
*
* serviceCatalogDeleteEvent ServiceCatalogDeleteEvent ServiceCatalog delete Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCatalogDeleteEvent = ({ serviceCatalogDeleteEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCatalogDeleteEvent,
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
* Client listener for entity ServiceCategoryChangeEvent
* Example of a client listener for receiving the notification ServiceCategoryChangeEvent
*
* serviceCategoryChange ServiceCategoryChange ServiceCategory change Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCategoryChangeEvent = ({ serviceCategoryChange, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCategoryChange,
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
* Client listener for entity ServiceCategoryCreateEvent
* Example of a client listener for receiving the notification ServiceCategoryCreateEvent
*
* serviceCategoryCreateEvent ServiceCategoryCreateEvent ServiceCategory create Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCategoryCreateEvent = ({ serviceCategoryCreateEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCategoryCreateEvent,
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
* Client listener for entity ServiceCategoryDeleteEvent
* Example of a client listener for receiving the notification ServiceCategoryDeleteEvent
*
* serviceCategoryDeleteEvent ServiceCategoryDeleteEvent ServiceCategory delete Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceCategoryDeleteEvent = ({ serviceCategoryDeleteEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceCategoryDeleteEvent,
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
* Client listener for entity ServiceSpecificationChangeEvent
* Example of a client listener for receiving the notification ServiceSpecificationChangeEvent
*
* serviceSpecificationChange ServiceSpecificationChange ServiceSpecification change Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceSpecificationChangeEvent = ({ serviceSpecificationChange, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceSpecificationChange,
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
* Client listener for entity ServiceSpecificationCreateEvent
* Example of a client listener for receiving the notification ServiceSpecificationCreateEvent
*
* serviceSpecificationCreateEvent ServiceSpecificationCreateEvent ServiceSpecification create Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceSpecificationCreateEvent = ({ serviceSpecificationCreateEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceSpecificationCreateEvent,
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
* Client listener for entity ServiceSpecificationDeleteEvent
* Example of a client listener for receiving the notification ServiceSpecificationDeleteEvent
*
* serviceSpecificationDeleteEvent ServiceSpecificationDeleteEvent ServiceSpecification delete Event payload
* fields String Comma-separated properties to be provided in response (optional)
* no response value expected for this operation
* */
const serviceSpecificationDeleteEvent = ({ serviceSpecificationDeleteEvent, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serviceSpecificationDeleteEvent,
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

module.exports = {
  exportJobCreateEvent,
  exportJobStateChangeEvent,
  importJobCreateEvent,
  importJobStateChangeEvent,
  serviceCandidateChangeEvent,
  serviceCandidateCreateEvent,
  serviceCandidateDeleteEvent,
  serviceCatalogBatchEvent,
  serviceCatalogChangeEvent,
  serviceCatalogCreateEvent,
  serviceCatalogDeleteEvent,
  serviceCategoryChangeEvent,
  serviceCategoryCreateEvent,
  serviceCategoryDeleteEvent,
  serviceSpecificationChangeEvent,
  serviceSpecificationCreateEvent,
  serviceSpecificationDeleteEvent,
};
