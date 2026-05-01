import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { accountDeletionService } from '@/features/account/services/account-deletion';
import {
  AccountDeletionErrorResponse,
  AccountDeletionResponse,
  RequestAccountDeletionDto,
} from '@/features/account/types/account-deletion';

export const useRequestAccountDeletion = () => {
  return useMutation<
    AccountDeletionResponse,
    AxiosError<AccountDeletionErrorResponse>,
    RequestAccountDeletionDto
  >({
    mutationFn: (dto) => accountDeletionService.requestAccountDeletion(dto),
    retry: false,
  });
};
