export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface ApiErrorResponse {
  message: string;
  error: string;
  status: number;
}
