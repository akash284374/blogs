import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/postService'; // ✅ Import your API function

export default function CreatePostPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(formData); // ✅ Actually POST to backend
            // navigate('/my-blogs');
            //  // ✅ Redirect to your posts
            navigate('/');
        } catch (err) {
            console.error('Failed to create post:', err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-inherit text-inherit">
            <div className="w-full max-w-2xl p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <h1 className="text-3xl font-bold mb-6 text-center">Create a New Post</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-medium mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter post title..."
                            className="w-full px-4 py-2 border rounded-md bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Content</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your post content here..."
                            rows="6"
                            className="w-full px-4 py-2 border rounded-md bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
                    >
                        Publish Post
                    </button>
                </form>
            </div>
        </div>
    );
}
