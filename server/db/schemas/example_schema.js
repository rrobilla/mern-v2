const mongoose = require('mongoose');

/*

Defines the structure of a document.

Schema Data Types that can be used in Mongoose:
String
Number
Date
Boolean
Buffer (for binary data like images)
Mixed (any data type)
Array
ObjectId

*Note: For every document, Mongoose creates the _id path (an individual data entity in the schema)
automatically with the type of ObjectId. The ObjectId is a unique value
made up of the time, machine id, process identifiers, and a counter.

eg. _id: ObjectId("52279effc62ca8b0c1000007")

Flow for adding new schemas:
- Create a valid schema file in the schema folder. Remember if you use
the 'required: true' line in a path, this is schema-level validation
which prevents malformed data.

- Load the schema into the db.js file by adding it at the bottom
    eg. require('./schemas/example_schema');

*/
const exampleSchema = new mongoose.Schema({
  fname:{
    type: String,
    require: true
  },
  date:{
    type: Date,
    default: Date.now()
  }
});

//First argument is the name of the model, second is the schema you want to compile
module.exports = Example = mongoose.model('example', exampleSchema);