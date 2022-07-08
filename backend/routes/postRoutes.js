const express = require('express');

const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require('../controllers/postController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPosts).post(protect, createPost);
router
  .route('/:id')
  .get(protect, getPost)
  .delete(protect, deletePost)
  .put(protect, updatePost);

module.exports = router;
