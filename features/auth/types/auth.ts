import { User, UserRole } from './user';

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresIn: number;
}

export interface RegisterResponse {
  user: User;
  message: string;
}

export interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  phone: string;
  companyName?: string;
  taxId?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  idToken: string;
  expiresIn: number;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ChangePasswordCredentials {
  oldPassword: string;
  newPassword: string;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}
