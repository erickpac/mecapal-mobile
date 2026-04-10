import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addressService } from '@/features/user/services/address';
import { UpdateAddressPayload } from '@/features/user/types/address';
import { ADDRESS_QUERY_KEY } from './useAddresses';

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateAddressPayload }) =>
      addressService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ADDRESS_QUERY_KEY });
    },
    retry: false,
  });
};
