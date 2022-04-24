const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  setProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productControllers');

router.route('/').get(getProducts).post(setProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
