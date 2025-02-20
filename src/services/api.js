import axios from 'axios';
import Cookies from 'js-cookie';

const Api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASEURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

Api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            Cookies.remove('token');
            Cookies.remove('user');
            window.location = '/login';
        }
        return Promise.reject(error);
    }
);

export default Api;