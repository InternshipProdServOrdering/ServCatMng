const Controller = require('./Controller');
const service = require('../service/ServiceCatalogService');

const createServiceCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceCatalog);
};

const deleteServiceCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceCatalog);
};

const listServiceCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceCatalog);
};

const patchServiceCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceCatalog);
};

const retrieveServiceCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceCatalog);
};

module.exports = {
  createServiceCatalog,
  deleteServiceCatalog,
  listServiceCatalog,
  patchServiceCatalog,
  retrieveServiceCatalog,
};