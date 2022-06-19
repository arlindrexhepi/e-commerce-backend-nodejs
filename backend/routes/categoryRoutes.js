const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategory,
  setCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryControllers');

router.route('/').get(getCategories).post(setCategory);

router
  .route('/:name')
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
