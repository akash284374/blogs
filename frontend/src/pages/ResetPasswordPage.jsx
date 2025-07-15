import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../services/authService';

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const { token } = useParams(); // assuming reset URL looks like /reset-password/:token
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await resetPassword({ token, password });
            setMessage('Password reset successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Reset failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-inherit text-inherit transition-colors duration-500">
            <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 text-center">Reset Your Password</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium">New Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Confirm New Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg bg-inherit text-inherit focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {message && <p className="text-green-500 text-sm">{message}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
