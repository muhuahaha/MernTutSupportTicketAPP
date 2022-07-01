const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  console.log(req.headers.authorization.split(' ')[1], 'asdasdasdsa');
  console.log(token, 'token');
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token form header

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded, 'decoded');
      // GEt user from tokens
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorization 111');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorization 222');
  }
});

module.exports = { protect };
