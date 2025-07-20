import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import NotFoundPage from './pages/NotFoundPage';
import AccountPage from './pages/AccountPage';
import MyPostsPage from './pages/MyPostsPage'; // ✅ Import MyPostsPage
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <ThemeProvider>
                <div className="flex flex-col min-h-screen bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
                    <Header />
                    <main className="flex-grow p-4">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/post/:id" element={<PostPage />} />
                            <Route path="/create" element={<CreatePostPage />} />
                            <Route path="/edit/:id" element={<EditPostPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                            <Route path="/reset-password" element={<ResetPasswordPage />} />
                            <Route path="/account" element={<AccountPage />} />
                            <Route path="/my-blogs" element={<MyPostsPage />} /> {/* ✅ Added */}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </ThemeProvider>
        </Router>
    );
}
