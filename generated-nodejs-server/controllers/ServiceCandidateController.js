/**
 * The ServiceCandidateController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ServiceCandidateService');
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
