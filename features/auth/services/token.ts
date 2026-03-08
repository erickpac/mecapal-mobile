import axios from 'axios';
import { AUTH_ENDPOINTS } from '@/services/api/config/endpoints';
import { useStore } from '@/store/useStore';
import { RefreshTokenResponse, RefreshTokenRequest } from '../types/auth';
import { TOKEN_CONFIG } from '@/services/api/config/constants';
import { replaceRoute } from '@/features/shared/routes';
import { USER_ROUTES } from '@/features/user/routes';

export class TokenService {
  static async refreshAccessToken(): Promise<boolean> {
    try {
      const refreshToken = useStore.getState().refreshToken;

      if (!refreshToken) {
        return false;
      }

      const response = await this.makeRefreshRequest(refreshToken);
      const { accessToken, idToken } = response;

      this.updateTokens(accessToken, idToken);

      return true;
    } catch (error) {
      console.log('Token refresh failed:', error);
      this.clearAllTokens();
      return false;
    }
  }

  private static async makeRefreshRequest(
    refreshToken: string,
  ): Promise<RefreshTokenResponse> {
    const requestData: RefreshTokenRequest = { refreshToken };

    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}${AUTH_ENDPOINTS.REFRESH_TOKEN}`,
      requestData,
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: TOKEN_CONFIG.REFRESH_TIMEOUT,
      },
    );

    return response.data;
  }

  private static updateTokens(accessToken: string, idToken: string): void {
    useStore.getState().setAccessToken(accessToken);
    useStore.getState().setIdToken(idToken);
  }

  private static clearAllTokens(): void {
    useStore.getState().logout();
    replaceRoute(USER_ROUTES.HOME);
  }

  static shouldAttemptRefresh(error: any): boolean {
    return error.response?.status === 401 && !error.config._retry;
  }

  static markRequestAsRetried(config: any): void {
    config._retry = true;
  }
}
