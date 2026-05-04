import { useQuery } from '@tanstack/react-query';
import { userService } from '@/features/user/services/user';
import { useStore } from '@/store/useStore';

export const USER_ME_QUERY_KEY = ['user', 'me'] as const;

export const useUserMe = () => {
  const { isAuthenticated } = useStore();

  return useQuery({
    queryKey: USER_ME_QUERY_KEY,
    queryFn: userService.getMe,
    enabled: isAuthenticated,
  });
};
