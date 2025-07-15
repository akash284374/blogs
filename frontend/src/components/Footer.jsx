export default function Footer() {
    return (
        <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} BlogApp. All rights reserved.
        </footer>
    );
}
