/**
 * The ServiceCategoryController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceCategoryService');
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
