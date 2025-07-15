import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function EditPostPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [formData, setFormData] = useState({ title: '', content: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await api.get(`/posts/${id}`);
                const post = res.data;

                if (post.user !== user?.id) {
                    setError('You are not authorized to edit this post.');
                    return;
                }

                setFormData({
                    title: post.title,
                    content: post.content,
                });
            } catch (err) {
                setError('Failed to fetch post.');
            }
        };
        fetchPost();
    }, [id, user, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/posts/${id}`, formData);
            navigate(`/post/${id}`);
        } catch (err) {
            setError('Failed to update post.');
        }
    };

    if (error) {
        return <p className="text-center text-red-500 mt-10">{error}</p>;
    }

    return (
        <div className="max-w-xl mx-auto my-10 p-6 border rounded shadow dark:bg-gray-800 bg-white">
            <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-inherit"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-inherit"
                        rows="5"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Update Post
                </button>
            </form>
        </div>
    );
}
