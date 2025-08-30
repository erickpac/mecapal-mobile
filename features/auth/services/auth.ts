import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  ChangePasswordCredentials,
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
    credentials: ChangePasswordCredentials,
  ): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.CHANGE_PASSWORD, credentials);

    return {
      message: "auth.changePassword.success",
    };
  },

  recoverPassword: async (email: string): Promise<{ message: string }> => {
    await api.post(AUTH_ENDPOINTS.RECOVER_PASSWORD, { email });

    return {
      message: "auth.recoverPassword.success",
    };
  },
};
