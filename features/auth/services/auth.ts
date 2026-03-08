import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  RegisterResponse,
  ChangePasswordCredentials,
  VerifyEmailRequest,
  ResetPasswordRequest,
} from '../types/auth';
import { User } from '../types/user';
import { api, AUTH_ENDPOINTS } from '@/services/api';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post(AUTH_ENDPOINTS.SIGN_IN, credentials);
    return response.data;
  },

  register: async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
    const response = await api.post(AUTH_ENDPOINTS.SIGN_UP, credentials);
    return response.data;
  },

  changePassword: async (
    credentials: ChangePasswordCredentials,
  ): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.CHANGE_PASSWORD, credentials);
    return { message: 'auth.changePassword.success' };
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email });
    return { message: 'auth.forgotPassword.success' };
  },

  resetPassword: async (data: ResetPasswordRequest): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
    return { message: 'auth.resetPassword.success' };
  },

  verifyEmail: async ({ email, code }: VerifyEmailRequest): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.CONFIRM_SIGN_UP, { email, code });
    return { message: 'auth.verifyEmail.success' };
  },

  signOut: async (): Promise<void> => {
    await api.post(AUTH_ENDPOINTS.SIGN_OUT);
  },

  getMe: async (): Promise<User> => {
    const response = await api.get(AUTH_ENDPOINTS.ME);
    return response.data;
  },
};
