import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../interfaces/auth";
import { api, AUTH_ENDPOINTS } from "@/services/api";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post(AUTH_ENDPOINTS.LOGIN, credentials);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error("Credenciales inválidas");
      }

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error al iniciar sesión");
    }
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post(AUTH_ENDPOINTS.REGISTER, credentials);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error al registrar usuario");
    }
  },

  changePassword: async (
    currentPassword: string,
    newPassword: string
  ): Promise<{ message: string }> => {
    try {
      await api.post(AUTH_ENDPOINTS.CHANGE_PASSWORD, {
        currentPassword,
        newPassword,
      });

      return {
        message: "Contraseña actualizada exitosamente",
      };
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error al cambiar la contraseña");
    }
  },
};
