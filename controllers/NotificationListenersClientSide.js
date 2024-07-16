const Controller = require('./Controller');
const service = require('../service/NotificationListenersClientSideService');

const categoryAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.categoryAttributeValueChangeEvent);
};

const categoryCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.categoryCreateEvent);
};

const categoryDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.categoryDeleteEvent);
};

const categoryStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.categoryStateChangeEvent);
};

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

const serviceCatalogAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCatalogAttributeValueChangeEvent);
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


const serviceCatalogStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceCatalogStateChangeEvent);
};

const serviceSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceSpecificationAttributeValueChangeEvent);
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

const serviceSpecificationStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.serviceSpecificationStateChangeEvent);
};


module.exports = {
  categoryAttributeValueChangeEvent,
  categoryCreateEvent,
  categoryDeleteEvent,
  categoryStateChangeEvent,
  exportJobCreateEvent,
  exportJobStateChangeEvent,
  importJobCreateEvent,
  importJobStateChangeEvent,
  serviceCandidateChangeEvent,
  serviceCandidateCreateEvent,
  serviceCandidateDeleteEvent,
  serviceCatalogAttributeValueChangeEvent,
  serviceCatalogBatchEvent,
  serviceCatalogChangeEvent,
  serviceCatalogCreateEvent,
  serviceCatalogDeleteEvent,
  serviceCategoryChangeEvent,
  serviceCategoryCreateEvent,
  serviceCategoryDeleteEvent,
  serviceCatalogStateChangeEvent,
  serviceSpecificationAttributeValueChangeEvent,
  serviceSpecificationChangeEvent,
  serviceSpecificationCreateEvent,
  serviceSpecificationDeleteEvent,
  serviceSpecificationStateChangeEvent,
};

