import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await registerUser(formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    const handleGoogleSignup = () => {
        alert('Google Signup functionality not yet implemented.');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-inherit text-inherit transition-colors duration-500">
            <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium">Username</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
                    >
                        Register
                    </button>

                    <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                        By registering, you agree to our Terms & Conditions and Privacy Policy.
                    </p>

                    <p className="text-center text-sm mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
                        <span className="mx-2 text-gray-500">OR</span>
                        <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleSignup}
                        className="w-full py-2 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-medium">Continue with Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
