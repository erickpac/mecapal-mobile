import { useQuery } from '@tanstack/react-query';
import { addressService } from '@/features/user/services/address';

export const ADDRESS_QUERY_KEY = ['addresses'] as const;

export const useAddresses = () => {
  return useQuery({
    queryKey: ADDRESS_QUERY_KEY,
    queryFn: addressService.getAll,
  });
};
