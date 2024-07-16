/**
 * The NotificationListenerController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenerService');
const exportJobCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.exportJobCreateEvent);
};

const exportJobStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.exportJobStateChangeEvent);
};

const importJobCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.importJobCreateEvent);
};

const importJobStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.importJobStateChangeEvent);
};

const serviceCandidateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCandidateChangeEvent);
};

const serviceCandidateCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCandidateCreateEvent);
};

const serviceCandidateDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCandidateDeleteEvent);
};

const serviceCatalogBatchEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCatalogBatchEvent);
};

const serviceCatalogChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCatalogChangeEvent);
};

const serviceCatalogCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCatalogCreateEvent);
};

const serviceCatalogDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCatalogDeleteEvent);
};

const serviceCategoryChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCategoryChangeEvent);
};

const serviceCategoryCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCategoryCreateEvent);
};

const serviceCategoryDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCategoryDeleteEvent);
};

const serviceSpecificationChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceSpecificationChangeEvent);
};

const serviceSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceSpecificationCreateEvent);
};

const serviceSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceSpecificationDeleteEvent);
};


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
