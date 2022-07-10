const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');

// Get All Products
// @route GET /api/products
// @access Private
const getCartProducts = asyncHandler(async (req, res) => {
  const cart = await Cart.find({ user: req.user.id });

  if (!cart) {
    res.status(404);
    throw new Error('Product not found!');
  }

  res.status(200).json(cart);
});

// Get All Products
// @route POST /api/products
// @access Private
const setCart = asyncHandler(async (req, res) => {
  if (!req.body.product) {
    res.status(400);
    throw new Error('Please add a product in Cart');
  }
  // const product = await Product.findById(req.body.productId);
  const cart = await Cart.find({ user: req.user.id });

  if (cart.length === 0) {
    const newCart = await Cart.create({
      products: req.body,
      user: req.user.id,
    });

    return res.status(200).json(newCart);
  }
  res.status(400).json({ message: 'You cannot add more than one Cart!' });
});

// Get All Products
// @route PUT /api/products/:id
// @access Private
const updateCart = asyncHandler(async (req, res) => {
  const oldCart = await Cart.findById(req.params.id);

  if (!oldCart) {
    res.status(400);
    throw new Error('Product does not exist!');
  }

  const newCart = {
    user: oldCart.user,
    _id: oldCart._id,
    __v: oldCart.__v,
    products: [...oldCart.products, req.body],
  };

  const updatedCart = await Cart.findByIdAndUpdate(req.params.id, newCart, {
    new: true,
  });

  res.status(200).json(newCart);
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
