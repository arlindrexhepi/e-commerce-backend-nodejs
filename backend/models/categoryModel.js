const mongoose = require('mongoose');

const SubCategorySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add Subcategory name!'],
  },
  image: {
    type: String,
    required: [true, 'Please add Subcategory image!'],
  },
});

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a category name!'],
  },
  childs: [{ SubCategorySchema }],
});

module.exports = mongoose.model('Category', CategorySchema);
