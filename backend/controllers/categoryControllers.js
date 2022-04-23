const asyncHandler = require('express-async-handler');

const Category = require('../models/categoryModel');

// Get All Products
// @route GET /api/products
// @access Private
const getCategories = asyncHandler(async (req, res) => {
  const category = await Category.find();
  res.status(200).json(category);
});

// Get All Products
// @route POST /api/products
// @access Private
const setCategory = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const newCategory = await Category.create(req.body);

  res.status(200).json(newCategory);
});

// Get All Products
// @route PUT /api/products/:id
// @access Private
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error('Product does not exist!');
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedCategory);
});

// Get All Products
// @route DELETE /api/products/:id
// @access Private
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error(`Product doesn't exist!`);
  }

  await Category.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ id: req.params.id, message: 'Product deleted successfully!' });
});

module.exports = {
  getCategories,
  setCategory,
  updateCategory,
  deleteCategory,
};
