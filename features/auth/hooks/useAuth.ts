import { authService } from "@/features/auth/services/auth";
import {
  LoginCredentials,
  RegisterCredentials,
} from "@/features/auth/types/auth";
import { useStore } from "@/store/useStore";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { setUser, setAccessToken, setRefreshToken } = useStore();

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      setUser(response.user);
      setAccessToken(response.access_token);
      setRefreshToken(response.refresh_token);
    },
  });

  const register = useMutation({
    mutationFn: authService.register,
    onSuccess: (response) => {
      setUser(response.user);
      setAccessToken(response.access_token);
      setRefreshToken(response.refresh_token);
    },
  });

  const changePassword = useMutation({
    mutationFn: ({
      currentPassword,
      newPassword,
    }: {
      currentPassword: string;
      newPassword: string;
    }) => authService.changePassword(currentPassword, newPassword),
  });

  return {
    login: (credentials: LoginCredentials) => login.mutate(credentials),
    register: (credentials: RegisterCredentials) =>
      register.mutate(credentials),
    changePassword: (currentPassword: string, newPassword: string) =>
      changePassword.mutate({ currentPassword, newPassword }),
    isLoading: login.isPending || register.isPending,
    error: login.error || register.error,
  };
};
