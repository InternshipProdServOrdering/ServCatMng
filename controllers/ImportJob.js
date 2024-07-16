const Controller = require('./Controller');
const service = require('../service/ImportJobService');
const createImportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.createImportJob);
};

const deleteImportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteImportJob);
};

const listImportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.listImportJob);
};

const retrieveImportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveImportJob);
};


module.exports = {
  createImportJob,
  deleteImportJob,
  listImportJob,
  retrieveImportJob,
};
