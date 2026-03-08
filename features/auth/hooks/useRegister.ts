import { useMutation } from '@tanstack/react-query';
import { authService } from '@/features/auth/services/auth';
import { RegisterCredentials } from '@/features/auth/types/auth';

export const useRegister = () => {
  return useMutation({
    mutationFn: (credentials: RegisterCredentials) =>
      authService.register(credentials),
    retry: false,
  });
};
