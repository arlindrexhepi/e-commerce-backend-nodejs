const express = require('express');
const router = express.Router();
const {
  getCartProducts,
  setCart,
  updateCart,
  removeProductFromCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCartProducts).post(protect, setCart);

router
  .route('/:id')
  .patch(protect, updateCart)
  .delete(protect, removeProductFromCart);

module.exports = router;
