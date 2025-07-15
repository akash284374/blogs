import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-inherit text-inherit">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
                <Link
                    to="/"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
