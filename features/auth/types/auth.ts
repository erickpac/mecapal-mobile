import { User, UserRole } from "./user";

export interface AuthResponse {
  user: User;
  access_token: string;
  refresh_token: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string | number | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface ChangePasswordCredentials {
  current_password: string;
  new_password: string;
}
