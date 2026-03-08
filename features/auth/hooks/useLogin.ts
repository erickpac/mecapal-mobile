import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';
import { LoginCredentials } from '@/features/auth/types/auth';
import { useStore } from '@/store/useStore';

export const useLogin = () => {
  const { setUser, setAccessToken, setRefreshToken } = useStore();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
    onSuccess: (response) => {
      setUser(response.user);
      setAccessToken(response.access_token);
      setRefreshToken(response.refresh_token);
    },
    retry: false,
  });
};
