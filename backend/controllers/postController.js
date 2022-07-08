const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Post = require('../models/postModel');

// @desc     Get posts
// @route    GET /api/user/posts
// @access   Private
const getPosts = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const posts = await Post.find({ user: req.user.id });

  res.status(200).json(posts);
  // res.send('me');
});

// @desc     Get post
// @route    GET /api/user/posts/:id
// @access   Private
const getPost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  res.status(200).json(post);
  // res.send('me');
});

// @desc     Get posts
// @route    POST /api/user/posts
// @access   Private
const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if ((!title || !content)) {
    res.status(400);
    throw new Error('Please add title and content');
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const post = await Post.create({
    title,
    content,
    user: req.user.id,
  });

  res.status(201).json(post);
  // res.send('me');
});

// @desc     Delete post
// @route    DELETE /api/posts/:id
// @access   Private
const deletePost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not find');
  }

  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  await post.remove();

  res.status(200).json({ success: true });
});

// @desc     update post
// @route    PUT /api/posts/:id
// @access   Private
const updatePost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not find');
  }

  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error('Ticket not found');
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

module.exports = { getPosts, getPost, createPost, deletePost, updatePost };
