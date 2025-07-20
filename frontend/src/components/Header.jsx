import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');  // ✅ Redirect after logout
    };

    return (
        <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h1 className="text-xl font-bold">
                <Link to="/">BlogApp</Link>
            </h1>
            <div className="flex gap-4 items-center">
                {user && <Link to="/create">Create</Link>}
                {user && <Link to="/my-blogs">My Blogs</Link>}
                {user && <Link to="/account">My Account</Link>}
                {user ? (
                    <button onClick={handleLogout} className="hover:underline">Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                <ThemeToggle />
            </div>
        </header>
    );
}
