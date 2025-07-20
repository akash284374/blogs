import api from './api';

export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (data) => api.post('/auth/register', data);
export const forgotPassword = (data) => api.post('/auth/forgot-password', data);

// 🔴 Missing in your file
export const resetPassword = (data) => api.post('/auth/reset-password', data);
export const getCurrentUser = () => api.get('/auth/me');
export const logoutUser = () => api.post('/auth/logout');
