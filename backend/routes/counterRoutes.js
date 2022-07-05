const express = require('express');

const router = express.Router();
const { getCounter } = require('../controllers/counterController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCounter).post(protect, getCounter);

module.exports = router;
