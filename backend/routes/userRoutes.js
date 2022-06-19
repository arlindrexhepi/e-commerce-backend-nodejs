const express = require('express');
const router = express.Router();
const {
  registerUser,
  getUserInfo,
  loginUser,
  loginMe,
  refreshMe,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(protect, getUserInfo);
router.route('/me/refresh').get(protect, refreshMe);
router.route('/login/me').get(protect, loginMe);

module.exports = router;
