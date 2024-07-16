const Controller = require('./Controller');
const service = require('../service/ExportJobService');
const createExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.createExportJob);
};

const deleteExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteExportJob);
};

const listExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.listExportJob);
};

const retrieveExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveExportJob);
};


module.exports = {
  createExportJob,
  deleteExportJob,
  listExportJob,
  retrieveExportJob,
};
