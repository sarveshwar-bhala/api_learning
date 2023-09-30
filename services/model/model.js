const mongo = require("mongoose");

const schema = mongo.Schema({
  name: String,
  email: String,
});


const collection = mongo.model("first_db", schema,)


module.exports = collection;