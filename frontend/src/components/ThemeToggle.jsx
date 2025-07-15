import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className="text-sm">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
}
