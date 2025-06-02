import { authService } from "@/services/api/auth";
import { LoginCredentials, RegisterCredentials } from "@/services/api/types";
import { useStore } from "@/store/useStore";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { setUser, setToken } = useStore();

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      setUser(response.data.user);
      setToken(response.data.token);
    },
  });

  const register = useMutation({
    mutationFn: authService.register,
    onSuccess: (response) => {
      setUser(response.data.user);
      setToken(response.data.token);
    },
  });

  const forgotPassword = useMutation({
    mutationFn: authService.forgotPassword,
  });

  const resetPassword = useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      authService.resetPassword(token, password),
  });

  return {
    login: (credentials: LoginCredentials) => login.mutate(credentials),
    register: (credentials: RegisterCredentials) =>
      register.mutate(credentials),
    forgotPassword: (email: string) => forgotPassword.mutate(email),
    resetPassword: (token: string, password: string) =>
      resetPassword.mutate({ token, password }),
    isLoading: login.isPending || register.isPending,
    error: login.error || register.error,
  };
};
