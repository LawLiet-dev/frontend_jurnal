import { create } from 'zustand';
import Api from '../services/api';
import Cookies from 'js-cookie';

export const useAuthStore = create((set) => ({
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    token: Cookies.get('token') || null,
    
    login: async (credentials) => {
        try {
            const response = await Api.post('/api/login', credentials);
            const { success, user, token } = response.data;
            
            if (!success || !user || !token) {
                throw new Error('Invalid response format from server');
            }
            
            // Store user data and token
            Cookies.set('user', JSON.stringify(user));
            Cookies.set('token', token);
            
            set({ user, token });
            
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        Cookies.remove('user');
        Cookies.remove('token');
        set({ user: null, token: null });
    }
}));