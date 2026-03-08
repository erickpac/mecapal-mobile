import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';
import { VerifyEmailRequest } from '@/features/auth/types/auth';

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (data: VerifyEmailRequest) => authService.verifyEmail(data),
    retry: false,
  });
};
