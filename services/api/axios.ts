import TokenManager from "./token-manager";
import { TokenService } from "./token-service";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
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
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

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
  }
);

export default api;
