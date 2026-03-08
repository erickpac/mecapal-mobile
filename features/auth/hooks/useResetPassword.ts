import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';
import { ResetPasswordRequest } from '@/features/auth/types/auth';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordRequest) => authService.resetPassword(data),
    retry: false,
  });
};
