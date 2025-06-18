import axios from 'axios';

const instance = axios.create({
    baseURL: '/',  // Use relative URL since proxy is configured
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor to add the JWT token to headers
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle common errors
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userName');
            window.location.replace('http://localhost:3000/login');
        }
        return Promise.reject(error);
    }
);

export default instance; 