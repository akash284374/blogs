import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Assuming you have AuthContext
import api from '../services/api';

export default function AccountPage() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext); // Assuming AuthContext provides user, logout

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
            logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-inherit text-inherit">
            <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all">
                <h2 className="text-3xl font-bold mb-6 text-center">Account Details</h2>

                <div className="space-y-4 text-center">
                    <p><span className="font-semibold">Username:</span> {user?.username}</p>
                    <p><span className="font-semibold">Email:</span> {user?.email}</p>
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
            </div>
        </div>
    );
}
