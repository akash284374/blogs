export default function Comment({ comment }) {
    return (
        <div className="border-b py-2">
            <p>{comment.content}</p>
            <small>By {comment.user?.name || 'Anonymous'}</small>
        </div>
    );
}
