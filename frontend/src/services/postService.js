import api from './api';

// Fetch all posts (public)
export const getAllPosts = () => api.get('/posts');

// Fetch a single post by ID (optional, only if you implement it in backend)
export const getPost = (id) => api.get(`/posts/${id}`);

// Create a new post (only authenticated user can)
export const createPost = (data) => api.post('/posts', data);
// Pass userId here
export const getUserPosts = (userId) => api.get(`/posts/user/${userId}`);
