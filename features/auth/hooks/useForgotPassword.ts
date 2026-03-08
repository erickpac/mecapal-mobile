import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email),
    retry: false,
  });
};
