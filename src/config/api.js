/**
 * API Configuration
 * Centralized configuration for backend API endpoints
 */

// Get the API base URL from environment variables with fallback to localhost
const getApiBaseUrl = () => {
  // Try to get from environment variable first
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  
  // Fallback to localhost if environment variable is not set
  const fallbackUrl = 'http://localhost:5000';
  
  return envUrl || fallbackUrl;
};

// Export the API base URL
export const API_BASE_URL = getApiBaseUrl();

// Helper function to construct full API endpoints
export const getApiEndpoint = (path) => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

// Common API endpoints
export const API_ENDPOINTS = {
  // Admin endpoints
  ADMIN_LOGIN: getApiEndpoint('/api/admin/login'),
  
  // Data endpoints
  SERVICES: getApiEndpoint('/api/services'),
  PROJECTS: getApiEndpoint('/api/projects'),
  EMPLOYEES: getApiEndpoint('/api/employees'),
};

// Export default configuration object
export default {
  baseUrl: API_BASE_URL,
  endpoints: API_ENDPOINTS,
  getEndpoint: getApiEndpoint,
};