/**
 * The ServiceSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceSpecificationService');
const createServiceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceSpecification);
};

const deleteServiceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceSpecification);
};

const listServiceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceSpecification);
};

const patchServiceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceSpecification);
};

const retrieveServiceSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceSpecification);
};


module.exports = {
  createServiceSpecification,
  deleteServiceSpecification,
  listServiceSpecification,
  patchServiceSpecification,
  retrieveServiceSpecification,
};
