import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../types/auth";
import { api, AUTH_ENDPOINTS } from "@/services/api";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post(AUTH_ENDPOINTS.LOGIN, credentials);
    return response.data;
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const response = await api.post(AUTH_ENDPOINTS.REGISTER, credentials);
    return response.data;
  },

  changePassword: async (
    currentPassword: string,
    newPassword: string
  ): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.CHANGE_PASSWORD, {
      currentPassword,
      newPassword,
    });

    return {
      message: "Password updated successfully",
    };
  },
};
