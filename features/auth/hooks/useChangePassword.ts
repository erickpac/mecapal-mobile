import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';
import { ChangePasswordCredentials } from '@/features/auth/types/auth';

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (credentials: ChangePasswordCredentials) =>
      authService.changePassword(credentials),
    retry: false,
  });
};
