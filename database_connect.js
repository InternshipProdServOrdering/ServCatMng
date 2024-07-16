const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017/';
let dbInstance = null;

async function connectToDatabase(){
    if(dbInstance){
        return dbInstance;
    }

    try{
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
        dbInstance = client.db();
        return dbInstance;
    } catch(error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
}

module.exports = connectToDatabase;
