const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a category name!'],
  },
  childs: [
    {
      type: String,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('Category', CategorySchema);
