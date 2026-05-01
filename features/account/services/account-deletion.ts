import { api, ACCOUNT_ENDPOINTS } from '@/services/api';
import {
  AccountDeletionResponse,
  CancelDeletionResponse,
  RequestAccountDeletionDto,
} from '../types/account-deletion';

export const accountDeletionService = {
  /** DELETE /auth/account — schedules deletion after successful re-auth. */
  requestAccountDeletion: async (
    dto: RequestAccountDeletionDto,
  ): Promise<AccountDeletionResponse> => {
    const response = await api.delete<AccountDeletionResponse>(
      ACCOUNT_ENDPOINTS.DELETE,
      { data: dto },
    );
    return response.data;
  },

  /** POST /auth/account/cancel-deletion — cancels a pending deletion. */
  cancelAccountDeletion: async (): Promise<CancelDeletionResponse> => {
    const response = await api.post<CancelDeletionResponse>(
      ACCOUNT_ENDPOINTS.CANCEL_DELETION,
    );
    return response.data;
  },
};
