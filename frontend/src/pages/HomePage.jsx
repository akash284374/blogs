import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';

const dummyPosts = [
    {
        id: 1,
        title: 'Mastering React in 2025',
        description: 'Learn the latest trends and techniques in React development.',
    },
    {
        id: 2,
        title: 'Building a Full-Stack Blog App',
        description: 'Step-by-step guide to build a complete blog app using MERN stack.',
    },
    {
        id: 3,
        title: 'Dark Mode with Tailwind CSS',
        description: 'How to implement beautiful dark mode in modern apps.',
    },
];

export default function HomePage() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to BlogApp 🚀</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore insightful posts on React, full-stack development, and modern web design.
            </p>

            <Link
                to="/register"
                className="inline-block mb-10 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Get Started
            </Link>

            <div className="space-y-4">
                {dummyPosts.map((post) => (
                    <PostCard key={post.id} title={post.title} content={post.description} />
                ))}
            </div>
        </section>
    );
}
