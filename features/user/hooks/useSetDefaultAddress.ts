import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addressService } from '@/features/user/services/address';
import { ADDRESS_QUERY_KEY } from './useAddresses';

export const useSetDefaultAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => addressService.setDefault(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ADDRESS_QUERY_KEY });
    },
    retry: false,
  });
};
