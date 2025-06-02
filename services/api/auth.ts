import {
  ApiResponse,
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "./types";

// Mock data
const mockUser = {
  id: "1",
  name: "Usuario Ejemplo",
  email: "usuario@ejemplo.com",
  role: "user" as const,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const mockToken = "mock-jwt-token";

export const authService = {
  login: async (
    credentials: LoginCredentials
  ): Promise<ApiResponse<AuthResponse>> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (
      credentials.email !== "usuario@ejemplo.com" ||
      credentials.password !== "password"
    ) {
      throw new Error("Credenciales inválidas");
    }

    return {
      data: {
        user: mockUser,
        token: mockToken,
      },
      message: "Login exitoso",
      status: 200,
    };
  },

  register: async (
    credentials: RegisterCredentials
  ): Promise<ApiResponse<AuthResponse>> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (credentials.password !== credentials.confirmPassword) {
      throw new Error("Las contraseñas no coinciden");
    }

    return {
      data: {
        user: {
          ...mockUser,
          email: credentials.email,
          name: credentials.name,
        },
        token: mockToken,
      },
      message: "Registro exitoso",
      status: 201,
    };
  },

  forgotPassword: async (
    email: string
  ): Promise<ApiResponse<{ message: string }>> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      data: {
        message: "Se ha enviado un correo con las instrucciones",
      },
      message: "Solicitud procesada",
      status: 200,
    };
  },

  resetPassword: async (
    token: string,
    password: string
  ): Promise<ApiResponse<{ message: string }>> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      data: {
        message: "Contraseña actualizada exitosamente",
      },
      message: "Operación exitosa",
      status: 200,
    };
  },
};
