import { authService } from "@/features/auth/services/auth";
import {
  LoginCredentials,
  RegisterCredentials,
  ChangePasswordCredentials,
} from "@/features/auth/types/auth";
import { useStore } from "@/store/useStore";
import { useMutation } from "@tanstack/react-query";
import { navigateToForgotPasswordSuccessMessage } from "../routes";
import { router } from "expo-router";

export const useAuth = () => {
  const { setUser, setAccessToken, setRefreshToken } = useStore();

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      setUser(response.user);
      setAccessToken(response.access_token);
      setRefreshToken(response.refresh_token);
    },
    retry: false,
  });

  const register = useMutation({
    mutationFn: authService.register,
    retry: false,
    onSuccess: () => {
      router.dismissAll();
    },
  });

  const changePassword = useMutation({
    mutationFn: (credentials: ChangePasswordCredentials) =>
      authService.changePassword(credentials),
    retry: false,
  });

  const recoverPassword = useMutation({
    mutationFn: (email: string) => authService.recoverPassword(email),
    onSuccess: () => {
      navigateToForgotPasswordSuccessMessage();
    },
    retry: false,
  });

  return {
    login: (credentials: LoginCredentials) => login.mutate(credentials),
    register: (credentials: RegisterCredentials) =>
      register.mutate(credentials),
    changePassword: (credentials: ChangePasswordCredentials) =>
      changePassword.mutate(credentials),
    recoverPassword: (email: string) => recoverPassword.mutate(email),
    isLoading:
      login.isPending ||
      register.isPending ||
      changePassword.isPending ||
      recoverPassword.isPending,
    error:
      login.error ||
      register.error ||
      changePassword.error ||
      recoverPassword.error,
    isSuccess:
      login.isSuccess ||
      register.isSuccess ||
      changePassword.isSuccess ||
      recoverPassword.isSuccess,
  };
};
