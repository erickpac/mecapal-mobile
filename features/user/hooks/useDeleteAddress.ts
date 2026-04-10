import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addressService } from '@/features/user/services/address';
import { ADDRESS_QUERY_KEY } from './useAddresses';

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => addressService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ADDRESS_QUERY_KEY });
    },
    retry: false,
  });
};
