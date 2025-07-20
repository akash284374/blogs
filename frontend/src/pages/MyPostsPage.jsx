import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserPosts } from '../services/postService';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

export default function MyPostsPage() {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMyPosts = async () => {
            try {
                const response = await getUserPosts(user._id);
                setPosts(response.data);
            } catch (err) {
                setError('Failed to load your posts');
            }
        };

        if (user?._id) fetchMyPosts();
    }, [user]);

    if (!user) {
        return (
            <div className="text-center mt-20">
                <p className="text-lg">
                    Please <Link className="text-blue-500 underline" to="/login">login</Link> to view your posts.
                </p>
            </div>
        );
    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">My Posts 📚</h1>

            {error && <p className="text-red-500">{error}</p>}

            {posts.length > 0 ? (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <PostCard key={post._id} title={post.title} content={post.content} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 dark:text-gray-400">You haven't created any posts yet.</p>
            )}
        </section>
    );
}
