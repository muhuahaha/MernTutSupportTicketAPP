const asyncHandler = require('express-async-handler');

// @desc     Get user ticket
// @route    GET /api/tickets
// @access   Private
const getCounter = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

module.exports = { getCounter };
