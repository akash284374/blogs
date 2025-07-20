import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react'; // lucide-react provides nice icons. Or use Heroicons.

export default function PostCard({ id, title, content, commentCount = 0 }) {
    return (
        <div className="p-4 border rounded mb-4 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-2">
                <Link to={`/post/${id}`}>{title}</Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>

            <div className="flex items-center gap-2 mt-4 text-gray-500">
                <MessageCircle size={18} /> {/* 🗨️ Comment Icon */}
                <span>{commentCount} comments</span>
            </div>
        </div>
    );
}
