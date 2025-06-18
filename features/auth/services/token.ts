import axios from "axios";
import { AUTH_ENDPOINTS } from "@/services/api/config/endpoints";
import TokenManager from "./token-manager";
import { useStore } from "@/store/useStore";
import { RefreshTokenResponse, RefreshTokenRequest } from "../interfaces/auth";
import { TOKEN_CONFIG } from "@/services/api/config/constants";

export class TokenService {
  /**
   * Attempts to refresh the access token using the stored refresh token
   * @returns Promise<boolean> - true if refresh was successful, false otherwise
   */
  static async refreshAccessToken(): Promise<boolean> {
    try {
      const refreshToken = useStore.getState().refreshToken;

      if (!refreshToken) {
        return false;
      }

      const response = await this.makeRefreshRequest(refreshToken);
      const { access_token: newAccessToken, refresh_token: newRefreshToken } =
        response;

      // Update both tokens in store and TokenManager
      this.updateTokens(newAccessToken, newRefreshToken);

      return true;
    } catch (error) {
      console.log("❌ Token refresh failed:", error);
      this.clearAllTokens();
      return false;
    }
  }

  /**
   * Makes the actual refresh token request
   */
  private static async makeRefreshRequest(
    refreshToken: string
  ): Promise<RefreshTokenResponse> {
    const requestData: RefreshTokenRequest = { refresh_token: refreshToken };

    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}${AUTH_ENDPOINTS.REFRESH_TOKEN}`,
      requestData,
      {
        headers: { "Content-Type": "application/json" },
        timeout: TOKEN_CONFIG.REFRESH_TIMEOUT,
      }
    );

    return response.data;
  }

  /**
   * Updates tokens in both store and TokenManager
   */
  private static updateTokens(accessToken: string, refreshToken: string): void {
    useStore.getState().setAccessToken(accessToken);
    useStore.getState().setRefreshToken(refreshToken);
    TokenManager.setToken(accessToken);
  }

  /**
   * Clears all tokens and logs out the user
   */
  private static clearAllTokens(): void {
    TokenManager.clearToken();
    useStore.getState().logout();
  }

  /**
   * Checks if a token refresh should be attempted
   */
  static shouldAttemptRefresh(error: any): boolean {
    return error.response?.status === 401 && !error.config._retry;
  }

  /**
   * Marks a request as retried to prevent infinite loops
   */
  static markRequestAsRetried(config: any): void {
    config._retry = true;
  }
}
