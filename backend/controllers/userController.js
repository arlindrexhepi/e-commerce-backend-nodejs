const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Register new user
// @route GET /api/user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, date_of_birth, email, password } = req.body;

  if (!first_name || !last_name || !date_of_birth || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const newUser = await User.create({
    first_name,
    last_name,
    date_of_birth,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(200).json({
      auth_token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data!');
  }

  res.status(200).json({ message: 'Register User' });
});

// Authenticate a user
// @route POST /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      auth_token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user credentials!');
  }
});

// Authenticate a user
// @route POST /api/login/me
// @access Private
const loginMe = asyncHandler(async (req, res) => {
  const { _id, first_name, last_name } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    first_name,
    last_name,
  });
});

// Authenticate a user
// @route POST /api/login
// @access Private
const refreshMe = asyncHandler(async (req, res) => {
  const { _id } = await User.findById(req.user.id);

  res.status(200).json({
    auth_token: generateToken(_id),
  });
});

// Get user data
// @route GET /api/user/me
// @access Private
const getUserInfo = asyncHandler(async (req, res) => {
  const { _id, first_name, last_name } = await User.findById(req.user.id);

  res.status(200).json({
    user: {
      id: _id,
      first_name,
      last_name,
    },
  });
});

// Generate JTW
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '5d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  loginMe,
  refreshMe,
};
