/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CategoryAttributeValueChangeEvent
   * Example of a client listener for receiving the notification CategoryAttributeValueChangeEvent
   *
   * categoryAttributeValueChangeEvent CategoryAttributeValueChangeEvent Category attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const categoryAttributeValueChangeEvent =  ( args, context /* categoryAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryCreateEvent
   * Example of a client listener for receiving the notification CategoryCreateEvent
   *
   * categoryCreateEvent CategoryCreateEvent Category create Event payload
   * no response value expected for this operation
   **/
  const categoryCreateEvent =  ( args, context /* categoryCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryDeleteEvent
   * Example of a client listener for receiving the notification CategoryDeleteEvent
   *
   * categoryDeleteEvent CategoryDeleteEvent Category delete Event payload
   * no response value expected for this operation
   **/
  const categoryDeleteEvent =  ( args, context /* categoryDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryStateChangeEvent
   * Example of a client listener for receiving the notification CategoryStateChangeEvent
   *
   * categoryStateChangeEvent CategoryStateChangeEvent Category stateChange Event payload
   * no response value expected for this operation
   **/
  const categoryStateChangeEvent =  ( args, context /* categoryStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ExportJobCreateEvent
   * Example of a client listener for receiving the notification ExportJobCreateEvent
   *
   * exportJobCreateEvent ExportJobCreateEvent ExportJob create Event payload
   * no response value expected for this operation
   **/
  const exportJobCreateEvent =  ( args, context /* exportJobCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "exportJobCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("exportJobCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ExportJobStateChangeEvent
   * Example of a client listener for receiving the notification ExportJobStateChangeEvent
   *
   * exportJobStateChangeEvent ExportJobStateChangeEvent ExportJob stateChange Event payload
   * no response value expected for this operation
   **/
  const exportJobStateChangeEvent =  ( args, context /* exportJobStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "exportJobStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("exportJobStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ImportJobCreateEvent
   * Example of a client listener for receiving the notification ImportJobCreateEvent
   *
   * importJobCreateEvent ImportJobCreateEvent ImportJob create Event payload
   * no response value expected for this operation
   **/
  const importJobCreateEvent =  ( args, context /* importJobCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "importJobCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("importJobCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ImportJobStateChangeEvent
   * Example of a client listener for receiving the notification ImportJobStateChangeEvent
   *
   * importJobStateChangeEvent ImportJobStateChangeEvent ImportJob stateChange Event payload
   * no response value expected for this operation
   **/
  const importJobStateChangeEvent =  ( args, context /* importJobStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "importJobStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("importJobStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

    const serviceCandidateChangeEvent = ( args, context /* importJobStateChangeEvent  */) =>
      new Promise(
        async (resolve) => {
          context.classname    = "NotificationListener";
          context.operationId  = "serviceCandidateChangeEvent";
          context.method       = "post";
          try {
            /* NOT matching isRestful */
            resolve(Service.serve(args, context ));
  
          } catch (e) {
            console.log("serviceCandidateChangeEvent: error=" + e);
            resolve(Service.rejectResponse(
              e.message || 'Invalid input',
              e.status || 405,
            ));
          }
        },
      )

      const serviceCandidateCreateEvent = ( args, context /* importJobStateChangeEvent  */) =>
        new Promise(
          async (resolve) => {
            context.classname    = "NotificationListener";
            context.operationId  = "serviceCandidateCreateEvent";
            context.method       = "post";
            try {
              /* NOT matching isRestful */
              resolve(Service.serve(args, context ));
    
            } catch (e) {
              console.log("serviceCandidateCreateEvent: error=" + e);
              resolve(Service.rejectResponse(
                e.message || 'Invalid input',
                e.status || 405,
              ));
            }
          },
        )
      
        const serviceCandidateDeleteEvent = ( args, context /* importJobStateChangeEvent  */) =>
          new Promise(
            async (resolve) => {
              context.classname    = "NotificationListener";
              context.operationId  = "serviceCandidateDeleteEvent";
              context.method       = "post";
              try {
                /* NOT matching isRestful */
                resolve(Service.serve(args, context ));
      
              } catch (e) {
                console.log("serviceCandidateDeleteEvent: error=" + e);
                resolve(Service.rejectResponse(
                  e.message || 'Invalid input',
                  e.status || 405,
                ));
              }
            },
          )

    
    
  /**
   * Client listener for entity ProductCatalogAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductCatalogAttributeValueChangeEvent
   *
   * productCatalogAttributeValueChangeEvent ProductCatalogAttributeValueChangeEvent ProductCatalog attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const serviceCatalogAttributeValueChangeEvent =  ( args, context /* serviceCatalogAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceCatalogAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceCatalogAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

    const serviceCatalogBatchEvent =  ( args, context /* serviceCatalogAttributeValueChangeEvent  */) =>
      new Promise(
        async (resolve) => {
          context.classname    = "NotificationListener";
          context.operationId  = "serviceCatalogBatchEvent";
          context.method       = "post";
          try {
            /* NOT matching isRestful */
            resolve(Service.serve(args, context ));
  
          } catch (e) {
            console.log("serviceCatalogBatchEvent: error=" + e);
            resolve(Service.rejectResponse(
              e.message || 'Invalid input',
              e.status || 405,
            ));
          }
        },
      )

      const serviceCatalogChangeEvent =  ( args, context /* serviceCatalogAttributeValueChangeEvent  */) =>
        new Promise(
          async (resolve) => {
            context.classname    = "NotificationListener";
            context.operationId  = "serviceCatalogChangeEvent";
            context.method       = "post";
            try {
              /* NOT matching isRestful */
              resolve(Service.serve(args, context ));
    
            } catch (e) {
              console.log("serviceCatalogChangeEvent: error=" + e);
              resolve(Service.rejectResponse(
                e.message || 'Invalid input',
                e.status || 405,
              ));
            }
          },
        )
    
  /**
   * Client listener for entity serviceCatalogCreateEvent
   * Example of a client listener for receiving the notification serviceCatalogCreateEvent
   *
   * serviceCatalogCreateEvent serviceCatalogCreateEvent serviceCatalog create Event payload
   * no response value expected for this operation
   **/
  const serviceCatalogCreateEvent =  ( args, context /* serviceCatalogCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceCatalogCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceCatalogCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity serviceCatalogDeleteEvent
   * Example of a client listener for receiving the notification serviceCatalogDeleteEvent
   *
   * serviceCatalogDeleteEvent serviceCatalogDeleteEvent serviceCatalog delete Event payload
   * no response value expected for this operation
   **/
  const serviceCatalogDeleteEvent =  ( args, context /* serviceCatalogDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceCatalogDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceCatalogDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity serviceCatalogStateChangeEvent
   * Example of a client listener for receiving the notification serviceCatalogStateChangeEvent
   *
   * serviceCatalogStateChangeEvent serviceCatalogStateChangeEvent serviceCatalog stateChange Event payload
   * no response value expected for this operation
   **/
  const serviceCatalogStateChangeEvent =  ( args, context /* serviceCatalogStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceCatalogStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceCatalogStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
    const serviceCategoryChangeEvent =  ( args, context /* serviceCatalogStateChangeEvent  */) =>
      new Promise(
        async (resolve) => {
          context.classname    = "NotificationListener";
          context.operationId  = "serviceCategoryChangeEvent";
          context.method       = "post";
          try {
            /* NOT matching isRestful */
            resolve(Service.serve(args, context ));
  
          } catch (e) {
            console.log("serviceCategoryChangeEvent: error=" + e);
            resolve(Service.rejectResponse(
              e.message || 'Invalid input',
              e.status || 405,
            ));
          }
        },
      )

      const serviceCategoryCreateEvent =  ( args, context /* serviceCatalogStateChangeEvent  */) =>
        new Promise(
          async (resolve) => {
            context.classname    = "NotificationListener";
            context.operationId  = "serviceCategoryCreateEvent";
            context.method       = "post";
            try {
              /* NOT matching isRestful */
              resolve(Service.serve(args, context ));
    
            } catch (e) {
              console.log("serviceCategoryCreateEvent: error=" + e);
              resolve(Service.rejectResponse(
                e.message || 'Invalid input',
                e.status || 405,
              ));
            }
          },
        )
      
        const serviceCategoryDeleteEvent =  ( args, context /* serviceCatalogStateDeleteEvent  */) =>
          new Promise(
            async (resolve) => {
              context.classname    = "NotificationListener";
              context.operationId  = "serviceCategoryDeleteEvent";
              context.method       = "post";
              try {
                /* NOT matching isRestful */
                resolve(Service.serve(args, context ));
      
              } catch (e) {
                console.log("serviceCategoryDeleteEvent: error=" + e);
                resolve(Service.rejectResponse(
                  e.message || 'Invalid input',
                  e.status || 405,
                ));
              }
            },
          )
    
  /**
   * Client listener for entity serviceSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification serviceSpecificationAttributeValueChangeEvent
   *
   * serviceSpecificationAttributeValueChangeEvent serviceSpecificationAttributeValueChangeEvent serviceSpecification attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const serviceSpecificationAttributeValueChangeEvent =  ( args, context /* serviceSpecificationAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity serviceSpecificationCreateEvent
   * Example of a client listener for receiving the notification serviceSpecificationCreateEvent
   *
   * serviceSpecificationCreateEvent serviceSpecificationCreateEvent serviceSpecification create Event payload
   * no response value expected for this operation
   **/
  const serviceSpecificationCreateEvent =  ( args, context /* serviceSpecificationCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )

    const serviceSpecificationChangeEvent =  ( args, context /* serviceSpecificationDeleteEvent  */) =>
      new Promise(
        async (resolve) => {
          context.classname    = "NotificationListener";
          context.operationId  = "serviceSpecificationChangeEvent";
          context.method       = "post";
          try {
            /* NOT matching isRestful */
            resolve(Service.serve(args, context ));
  
          } catch (e) {
            console.log("serviceSpecificationChangeEvent: error=" + e);
            resolve(Service.rejectResponse(
              e.message || 'Invalid input',
              e.status || 405,
            ));
          }
        },
      )
    
  /**
   * Client listener for entity serviceSpecificationDeleteEvent
   * Example of a client listener for receiving the notification serviceSpecificationDeleteEvent
   *
   * serviceSpecificationDeleteEvent serviceSpecificationDeleteEvent serviceSpecification delete Event payload
   * no response value expected for this operation
   **/
  const serviceSpecificationDeleteEvent =  ( args, context /* serviceSpecificationDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity serviceSpecificationStateChangeEvent
   * Example of a client listener for receiving the notification serviceSpecificationStateChangeEvent
   *
   * serviceSpecificationStateChangeEvent serviceSpecificationStateChangeEvent serviceSpecification stateChange Event payload
   * no response value expected for this operation
   **/
  const serviceSpecificationStateChangeEvent =  ( args, context /* serviceSpecificationStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "serviceSpecificationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("serviceSpecificationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  categoryAttributeValueChangeEvent,
  categoryCreateEvent,
  categoryDeleteEvent,
  categoryStateChangeEvent,
  exportJobCreateEvent,
  exportJobStateChangeEvent,
  importJobCreateEvent,
  importJobStateChangeEvent,
  serviceCandidateCreateEvent,
  serviceCandidateChangeEvent,
  serviceCandidateDeleteEvent,
  serviceCatalogAttributeValueChangeEvent,
  serviceCatalogBatchEvent,
  serviceCatalogChangeEvent,
  serviceCatalogCreateEvent,
  serviceCatalogDeleteEvent,
  serviceCatalogStateChangeEvent,
  serviceCategoryChangeEvent,
  serviceCategoryCreateEvent,
  serviceCategoryDeleteEvent,
  serviceSpecificationAttributeValueChangeEvent,
  serviceSpecificationCreateEvent,
  serviceSpecificationDeleteEvent,
  serviceSpecificationChangeEvent,
  serviceSpecificationStateChangeEvent,
};


