import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, logoutUser } from '../services/authService';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((res) => setUser(res.data.user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    const login = (userData) => setUser(userData);

    const logout = async () => {
        try {
            await logoutUser();
        } catch (err) {
            console.error('Logout failed:', err);
        }
        setUser(null);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
