import { Link, useParams } from 'react-router-dom';

export default function PostPage() {
    const { id } = useParams(); // Getting post id from URL

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all">
                <h1 className="text-3xl font-bold mb-4">Sample Blog Post Title (ID: {id})</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    By <span className="font-medium">John Doe</span> | July 2025
                </p>

                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        This is a sample post content. When your backend is ready, this content will
                        be replaced with real post data fetched via API.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                        nisi vel consectetur interdum, nisl nisi aliquet nisi, euismod aliquam
                        nisl nisi eu nunc.
                    </p>
                </div>

                <div className="mt-8">
                    <Link to="/" className="text-blue-500 hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </article>
        </div>
    );
}
