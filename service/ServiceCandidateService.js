const Service = require('./Service');


const createServiceCandidate = (args, context) =>
    new Promise (
        async(resolve) => {
            context.classname = "ServiceCandidate";
            context.operationId = "createServiceCandidate";
            context.method = "post";
            
            try {
                resolve(Service.serve(args, context));
            } catch(e) {
                console.log("createServiceCandidate: error = " + e);
                resolve(Service.rejectResponse(
                    e.message || 'Invalid input',
                    e.status || 405,
                  ));
            }
        },
    )

const deleteServiceCandidate = (args, context) =>
    new Promise (
        async(resolve) => {
            context.classname = "ServiceCandidate";
            context.operationId = "deleteServiceCandidate";
            context.method = "delete";
            
            try {
                resolve(Service.serve(args, context));
            } catch(e) {
                console.log("deleteServiceCandidate: error = " + e);
                resolve(Service.rejectResponse(
                    e.message || 'Invalid input',
                    e.status || 405,
                  ));
            }
        },
    )

const listServiceCandidate = (args, context) =>
    new Promise (
        async(resolve) => {
            context.classname = "ServiceCandidate";
            context.operationId = "listServiceCandidate";
            context.method = "get";
            
            try {
                resolve(Service.serve(args, context));
            } catch(e) {
                console.log("listServiceCandidate: error = " + e);
                resolve(Service.rejectResponse(
                    e.message || 'Invalid input',
                    e.status || 405,
                  ));
            }
        },
    )

const patchServiceCandidate = (args, context) =>
    new Promise (
        async(resolve) => {
            context.classname = "ServiceCandidate";
            context.operationId = "patchServiceCandidate";
            context.method = "patch";
            
            try {
                resolve(Service.serve(args, context));
            } catch(e) {
                console.log("patchServiceCandidate: error = " + e);
                resolve(Service.rejectResponse(
                    e.message || 'Invalid input',
                    e.status || 405,
                  ));
            }
        },
    )

const retrieveServiceCandidate = (args, context) =>
    new Promise (
        async(resolve) => {
            context.classname = "ServiceCandidate";
            context.operationId = "retrieveServiceCandidate";
            context.method = "get";
            
            try {
                resolve(Service.serve(args, context));
            } catch(e) {
                console.log("retrieveServiceCandidate: error = " + e);
                resolve(Service.rejectResponse(
                    e.message || 'Invalid input',
                    e.status || 405,
                  ));
            }
        },
    )

module.exports = {
    createServiceCandidate,
    deleteServiceCandidate,
    listServiceCandidate,
    patchServiceCandidate, 
    retrieveServiceCandidate,
};

