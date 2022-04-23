const express = require('express');
const router = express.Router();
const {
  getCategories,
  setCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryControllers');

router.route('/').get(getCategories).post(setCategory);

router.route('/:id').put(updateCategory).delete(deleteCategory);

module.exports = router;
