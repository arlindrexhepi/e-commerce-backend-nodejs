const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value!'],
    },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model('Cart', CartSchema);
