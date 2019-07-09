var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  hash: { type: String, required: true },
  username : String,
  password: String,
  firstName: String
});

module.exports = mongoose.model('User', UserSchema);
