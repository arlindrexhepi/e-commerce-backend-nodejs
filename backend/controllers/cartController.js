const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');

// Get All Products
// @route GET /api/products
// @access Private
const getCartProducts = asyncHandler(async (req, res) => {
  const products = await Cart.find({ user: req.user.id });

  if (!products) {
    res.status(404);
    throw new Error('Product not found!');
  }

  res.status(200).json(products);
});

// Get All Products
// @route POST /api/products
// @access Private
const setCart = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const newCart = await Cart.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(newCart);
});

// Get All Products
// @route PUT /api/products/:id
// @access Private
const updateCart = asyncHandler(async (req, res) => {
  const product = await Cart.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error('Product does not exist!');
  }

  const updatedProduct = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
});

// Get All Products
// @route DELETE /api/products/:id
// @access Private
const removeProductFromCart = asyncHandler(async (req, res) => {
  const product = await Cart.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error(`Product doesn't exist!`);
  }

  await Cart.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ id: req.params.id, message: 'Product deleted successfully!' });
});

module.exports = {
  getCartProducts,
  setCart,
  updateCart,
  removeProductFromCart,
};
