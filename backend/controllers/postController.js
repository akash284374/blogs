// controllers/postController.js
import Post from '../models/Post.js';

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({
            title,
            content,
            author: req.user.id,
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create post' });
    }
};

export const getAllPosts = async (req, res) => {
    const posts = await Post.find().populate('author', 'name');
    res.json(posts);
};

export const getUserPosts = async (req, res) => {
    const posts = await Post.find({ author: req.params.userId });
    res.json(posts);
};
