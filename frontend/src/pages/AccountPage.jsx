import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

export default function AccountPage() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
            logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        if (!user?._id) return;
        api.get(`/posts/user/${user._id}`)
            .then((res) => setBlogs(res.data.posts || []))
            .catch(() => setBlogs([]));
    }, [user]);

    if (!user) return <p className="text-center mt-10">Unauthorized</p>;

    return (
        <div className="flex items-center justify-center min-h-screen bg-inherit text-inherit">
            <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all">
                <h2 className="text-3xl font-bold mb-6 text-center">Account Details</h2>

                <div className="space-y-4 text-center">
                    <p><span className="font-semibold">User ID:</span> {user._id}</p>
                    <p><span className="font-semibold">Name:</span> {user.name}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                </div>

                <div className="space-y-4 mt-8">
                    <button
                        onClick={() => navigate('/reset-password')}
                        className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
                    >
                        Change Password
                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                        Logout
                    </button>
                </div>

                {/* <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-2">Your Blogs</h3>
                    {blogs.length === 0 ? (
                        <p className="text-gray-500 text-center">You have not written any blogs yet.</p>
                    ) : (
                        <ul className="list-disc pl-5">
                            {blogs.map((post) => (
                                <li key={post._id}>
                                    <button onClick={() => navigate(`/posts/${post._id}`)} className="text-blue-500 hover:underline">
                                        {post.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div> */}
            </div>
        </div>
    );
}
