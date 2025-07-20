// routes/postRoutes.js
import express from 'express';
import { createPost, getAllPosts, getUserPosts } from '../controllers/postController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getAllPosts);
router.get('/user/:userId', protect, getUserPosts);

export default router;
