/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a subscription (hub) to receive Events
* Sets the communication endpoint to receive Events.
*
* hubFVO HubFVO Data containing the callback endpoint to deliver the information
* fields String Comma-separated properties to be provided in response (optional)
* returns Hub
* */
const createHub = ({ hubFVO, fields }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        hubFVO,
        fields,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove a subscription (hub) to receive Events
* 
*
* id String Identifier of the Resource
* no response value expected for this operation
* */
const hubDelete = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createHub,
  hubDelete,
};
