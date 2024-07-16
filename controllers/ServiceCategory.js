const Controller = require('./Controller');
const service = require('../service/ServiceCategoryService');

const createServiceCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceCategory);
};

const deleteServiceCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceCategory);
};

const listServiceCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceCategory);
};

const patchServiceCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceCategory);
};

const retrieveServiceCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceCategory);
};

module.exports = {
  createServiceCategory,
  deleteServiceCategory,
  listServiceCategory,
  patchServiceCategory,
  retrieveServiceCategory,
};



