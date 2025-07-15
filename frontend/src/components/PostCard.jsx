export default function PostCard({ title, content }) {
    return (
        <div className="p-4 border rounded mb-4 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
    );
}
