const Controller = require('./Controller');
const service = require('../service/ServiceSpecificationService');

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



