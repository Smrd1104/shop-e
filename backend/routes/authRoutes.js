const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

module.exports = router;
