const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getPosts,
  setPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

router.route('/').get(protect, getPosts).post(protect, setPost);
router.route('/:id').delete(protect, deletePost).put(protect, updatePost);

module.exports = router;