import TokenManager from '@/features/auth/services/token-manager';
import { TokenService } from '@/features/auth/services/token';
import axios from 'axios';
import { API_CONFIG } from './constants';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = TokenManager.getToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Global 403 ACCOUNT_PENDING_DELETION handler
    const status = error.response?.status;
    const data = error.response?.data;
    if (
      status === 403 &&
      data &&
      typeof data === 'object' &&
      data.error === 'ACCOUNT_PENDING_DELETION' &&
      typeof data.scheduledFor === 'string'
    ) {
      // Lazy import to avoid circular dependency (store imports auth services).
      const { useStore } = await import('@/store/useStore');
      useStore.getState().showPendingDeletionModal(data.scheduledFor);
      return Promise.reject(error);
    }

    // Check if we should attempt token refresh
    if (TokenService.shouldAttemptRefresh(error)) {
      TokenService.markRequestAsRetried(originalRequest);

      // Attempt to refresh the token
      const refreshSuccess = await TokenService.refreshAccessToken();

      if (refreshSuccess) {
        // Retry the original request with the new token
        const newAccessToken = TokenManager.getToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
