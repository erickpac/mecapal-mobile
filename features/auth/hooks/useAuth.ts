import { authService } from "@/features/auth/services/auth";
import {
  LoginCredentials,
  RegisterCredentials,
  ChangePasswordCredentials,
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
  });

  const changePassword = useMutation({
    mutationFn: (credentials: ChangePasswordCredentials) =>
      authService.changePassword(credentials),
  });

  return {
    login: (credentials: LoginCredentials) => login.mutate(credentials),
    register: (credentials: RegisterCredentials) =>
      register.mutate(credentials),
    changePassword: (credentials: ChangePasswordCredentials) =>
      changePassword.mutate(credentials),
    isLoading: login.isPending || register.isPending,
    error: login.error || register.error,
    isSuccess: login.isSuccess || register.isSuccess,
  };
};
