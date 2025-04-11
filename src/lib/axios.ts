import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor – adds Authorization header
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response Interceptor – handle global errors (optional)
api.interceptors.response.use(
  response => response,
  error => {
    // Handle unauthorized globally (e.g., redirect to login or toast)
    if (error.response?.status === 401) {
      console.warn('Unauthorized. Redirecting to login...');
      // You can dispatch logout or redirect here
    }
    return Promise.reject(error);
  }
);

export default api;
