const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  products: [
    {
      product: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, 'Please add product id!'],
          ref: 'Product',
        },
        thumbnail: {
          type: String,
          required: [true, 'Please add thumbnail!'],
        },
        title: {
          type: String,
          required: [true, 'Please add title!'],
        },
        price: {
          type: Number,
          required: [true, 'Please add price!'],
        },
        productTotal: {
          type: Number,
          required: [true, 'Please add product total!'],
        },
      },
      qty: {
        type: Number,
        required: [true, 'Please add quantity!'],
      },
    },
  ],
});

module.exports = mongoose.model('Cart', CartSchema);
