import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addressService } from '@/features/user/services/address';
import { CreateAddressPayload } from '@/features/user/types/address';
import { ADDRESS_QUERY_KEY } from './useAddresses';

export const useCreateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAddressPayload) => addressService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ADDRESS_QUERY_KEY });
    },
    retry: false,
  });
};
