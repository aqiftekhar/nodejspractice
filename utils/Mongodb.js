const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let dbUrl = 'mongodb+srv://root:root@clustermongo.by3qvgg.mongodb.net/?retryWrites=true&w=majority';

const mongoClient = (callback) => {
    MongoClient.connect(dbUrl)
    .then(client => {
        console.log('Connected!')
        callback(client)
    })
    .catch(error => console.log(error));

}

module.exports = mongoClient;