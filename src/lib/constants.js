export const API_URL = process.env.NEXT_PUBLIC_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://aml-check-api-2.onrender.com' 
    : 'http://127.0.0.1:8000');
