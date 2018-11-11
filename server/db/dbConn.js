const mongoose = require('mongoose');


let dbURI = 'mongodb://mongo/mernapp-v2';

//If the NODE_ENV is set to production, get the appropriate dbURI
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGO_URL;
}
//Connect Mongoose to the DB
mongoose.connect(dbURI, { useNewUrlParser: true });

// Connection results to the log
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:' + err);
});
       
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

//Schemas in the database
require('./schemas/example_schema');