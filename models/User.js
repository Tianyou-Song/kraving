// getting access to the mongo database
const mongoose = require('mongoose');
// getting access to the Schema
const Schema = mongoose.Schema;

//creating our User Model

const UserSchema = new Schema({
  // creating name attribute for a user with type String, and making it required
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  // like Ruby, we will not store plain text passwords.
  // More on this later for express
  password: {
    type: String,
    require: true
  }
});

// exporting User and passing in our user schema to mongoose.model
// mongoose.model is a string that takes two args ->
// first arg is a string of what you want to call the model
// second is the user schema, which we defined above

module.exports = User = mongoose.model('users', UserSchema);
