import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { accountDeletionService } from '@/features/account/services/account-deletion';
import {
  AccountDeletionErrorResponse,
  CancelDeletionResponse,
} from '@/features/account/types/account-deletion';

export const useCancelAccountDeletion = () => {
  return useMutation<
    CancelDeletionResponse,
    AxiosError<AccountDeletionErrorResponse>,
    void
  >({
    mutationFn: () => accountDeletionService.cancelAccountDeletion(),
    retry: false,
  });
};
