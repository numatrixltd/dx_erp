import axios from 'axios';

// Create axios instance that handles both Next.js API routes and backend calls
const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - handle relative URLs for Next.js API routes
axiosInstance.interceptors.request.use(
  (config) => {
    // If URL starts with /api/, use relative URL (Next.js API route)
    if (config.url?.startsWith('/api/')) {
      config.baseURL = '';
    } else {
      // Otherwise, use backend URL
      config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    }
    
    // Add token if exists
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        if (!config.headers) {
          config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
