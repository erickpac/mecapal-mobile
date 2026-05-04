import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/features/user/services/user';
import { UpdateUserPayload } from '@/features/user/types/user';
import { User } from '@/features/auth/types/user';
import { useStore } from '@/store/useStore';
import { USER_ME_QUERY_KEY } from './useUserMe';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { setUser } = useStore();

  return useMutation({
    mutationFn: (payload: UpdateUserPayload) => userService.update(payload),
    onSuccess: (updatedUser: User) => {
      queryClient.setQueryData(USER_ME_QUERY_KEY, updatedUser);
      setUser(updatedUser);
    },
    retry: false,
  });
};
