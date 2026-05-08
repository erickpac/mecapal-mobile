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

      // No refresh token means the user is not authenticated yet (e.g.
      // a 401 during sign-in) or we already cleaned up. Either way, let
      // the caller handle the original error — don't trigger a logout
      // navigation here, because we'd kick the user out of screens that
      // legitimately have no session yet.
      if (!refreshToken) {
        return false;
      }

      const response = await this.makeRefreshRequest(refreshToken);
      const { accessToken, idToken } = response;

      this.updateTokens(accessToken, idToken);

      return true;
    } catch {
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
    // Navigate to home first so the user lands on a tab that exists in both
    // authenticated and guest tab configurations before activeTabs flips.
    replaceRoute(USER_ROUTES.HOME);
    // Skip the server sign-out call: the token is already invalid, calling
    // /sign-out would 401 and re-enter this function in a loop.
    useStore.getState().logout({ skipServerSignOut: true });
  }

  static shouldAttemptRefresh(error: any): boolean {
    return error.response?.status === 401 && !error.config._retry;
  }

  static markRequestAsRetried(config: any): void {
    config._retry = true;
  }
}
