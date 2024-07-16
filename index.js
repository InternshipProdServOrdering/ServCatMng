
//mongodb+srv://mongodb:mongodb@cluster0.zrhwbnr.mongodb.net/

const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');

const Service = require('./service/Service')
const NotificationHandler = require('./service/NotificationHandler')

const plugins = require('./plugins/plugins')

// const db = require('./plugins/mongoUtils')
// const queue = require('./plugins/kafka')

const connectToDatabase = require('./database_connect');


const { Kafka} = require('kafkajs');

const kafka = new Kafka({
  clientId: 'tmf-ri-eventserver',
  brokers: ['localhost:9093'],
  
}); //9092 changed to 9093

// Example producer or consumer code


Service.setDB(plugins.db)
Service.setNotifier(NotificationHandler)

 NotificationHandler.setDB(plugins.db)
 NotificationHandler.setQueue(plugins.queue)


const launchServer = async () => {
  let expressServer = null;  

  try {
    const db = await connectToDatabase();  
    expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    expressServer.launch();  
    logger.info('Express server is running');
  } catch (error) {
    logger.error('Error launching server:', error);


    if (expressServer) {
      logger.info('The expressServer is closed.');
      await expressServer.close();  // Assuming close method properly shuts down the server
    }

    // Optionally: database disconnection
    // if (db) await db.disconnect();  

    // Exit process if critical failure occurs to prevent a half-initialized state
    process.exit(1);
  }
};

launchServer().catch(e => logger.error('Unhandled error:', e));
