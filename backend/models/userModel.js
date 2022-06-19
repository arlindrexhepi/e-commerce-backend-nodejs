const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please add a name!'],
    },
    last_name: {
      type: String,
      required: [true, 'Please add a name!'],
    },
    date_of_birth: {
      type: String,
      required: [true, 'Please add a name!'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email!'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password!'],
    },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
