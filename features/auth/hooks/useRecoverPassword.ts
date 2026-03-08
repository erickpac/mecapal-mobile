import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';

export const useRecoverPassword = () => {
  return useMutation({
    mutationFn: (email: string) => authService.recoverPassword(email),
    retry: false,
  });
};
