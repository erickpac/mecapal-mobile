import { useQuery } from '@tanstack/react-query';
import { locationService } from '@/features/user/services/location';

export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => locationService.getCountries(),
    staleTime: Infinity,
  });
};

export const useDepartments = (countryId: string | undefined) => {
  return useQuery({
    queryKey: ['departments', countryId],
    queryFn: () => locationService.getStates(countryId!),
    enabled: !!countryId,
    staleTime: Infinity,
  });
};

export const useMunicipalities = (stateId: string | undefined) => {
  return useQuery({
    queryKey: ['municipalities', stateId],
    queryFn: () => locationService.getMunicipalities(stateId!),
    enabled: !!stateId,
    staleTime: Infinity,
  });
};

export const useZones = (municipalityId: string | undefined) => {
  return useQuery({
    queryKey: ['zones', municipalityId],
    queryFn: () => locationService.getZones(municipalityId!),
    enabled: !!municipalityId,
    staleTime: Infinity,
  });
};
