const asyncHandler = require('express-async-handler');

const Banner = require('../models/bannerModel');

// Get All Products
// @route GET /api/products
// @access Private
const getBanners = asyncHandler(async (req, res) => {
  const banner = await Banner.find();
  res.status(200).json(banner);
});

// Get All Products
// @route POST /api/products
// @access Private
const setBanner = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    res.json(req.body);
    throw new Error('Please add a text field');
  }
  const newBanner = await Banner.create(req.body);

  res.status(200).json(newBanner);
});

// Get All Products
// @route PUT /api/products/:id
// @access Private
const updateBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.findById(req.params.id);

  if (!banner) {
    res.status(400);
    throw new Error('Product does not exist!');
  }

  const updatedBanner = await Banner.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedBanner);
});

// Get All Products
// @route DELETE /api/products/:id
// @access Private
const deleteBanner = asyncHandler(async (req, res) => {
  const product = await Banner.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error(`Product doesn't exist!`);
  }

  await Banner.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ id: req.params.id, message: 'Product deleted successfully!' });
});

module.exports = {
  getBanners,
  setBanner,
  updateBanner,
  deleteBanner,
};
