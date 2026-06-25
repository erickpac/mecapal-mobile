import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { userService } from '@/features/user/services/user';
import { User } from '@/features/auth/types/user';
import { useStore } from '@/store/useStore';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { USER_ME_QUERY_KEY } from './useUserMe';

export const useDeleteProfilePhoto = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { setUser } = useStore();
  const { showSuccess, showError } = useSnackbar();
  const { getErrorMessage } = useLocalizedError();

  return useMutation({
    mutationFn: () => userService.deleteProfilePhoto(),
    onSuccess: (updatedUser: User) => {
      queryClient.setQueryData(USER_ME_QUERY_KEY, updatedUser);
      setUser(updatedUser);
      showSuccess(t('profile.personalInfo.photoDeleteSuccess'));
    },
    onError: (error) => {
      showError(
        getErrorMessage(error) ?? t('profile.personalInfo.photoDeleteError'),
      );
    },
    retry: false,
  });
};
