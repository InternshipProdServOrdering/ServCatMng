const Controller = require('./Controller');
const service = require('../service/ServiceCandidateService');

const createServiceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createServiceCandidate);
};

const deleteServiceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteServiceCandidate);
};

const listServiceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.listServiceCandidate);
};

const patchServiceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchServiceCandidate);
};

const retrieveServiceCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveServiceCandidate);
};

module.exports = {
  createServiceCandidate,
  deleteServiceCandidate,
  listServiceCandidate,
  patchServiceCandidate,
  retrieveServiceCandidate,
};