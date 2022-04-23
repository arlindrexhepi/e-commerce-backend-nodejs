const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a product title!'],
    },
    on_sale: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: [true, 'Please add the product price!'],
    },
    new_price: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, 'Please add the product description!'],
    },
    category: {
      type: String,
      required: [true, 'Please add the product category!'],
    },
    rating: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
      required: [true, 'Please add the product thumbnail!'],
    },
    images: [
      {
        type: String,
        required: [true, 'Please add the product images!'],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
