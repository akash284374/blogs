import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/postService';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getAllPosts();
                setPosts(response.data);
            } catch (err) {
                setError('Failed to load posts');
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to BlogApp 🚀</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore insightful posts on React, full-stack development, and modern web design.
            </p>

            <Link
                to="/register"
                className="inline-block mb-10 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Get Started
            </Link>

            {error && <p className="text-red-500">{error}</p>}

            <div className="space-y-4">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostCard key={post._id} title={post.title} content={post.content} />
                    ))
                ) : (
                    <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
                )}
            </div>
        </section>
    );
}
