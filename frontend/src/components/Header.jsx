import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h1 className="text-xl font-bold">
                <Link to="/">BlogApp</Link>
            </h1>
            <div className="flex gap-4 items-center">
                {user && <Link to="/create">Create</Link>}
                {user ? (
                    <button onClick={logout} className="hover:underline">Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                <ThemeToggle />
            </div>
        </header>
    );
}
