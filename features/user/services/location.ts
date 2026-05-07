import { Country, State, Municipality, Zone } from '../types/location';
import { api, LOCATION_ENDPOINTS } from '@/services/api';

export const locationService = {
  getCountries: async (activeOnly = true): Promise<Country[]> => {
    const response = await api.get(LOCATION_ENDPOINTS.COUNTRIES, {
      params: { activeOnly },
    });
    return response.data;
  },

  getStates: async (
    query: { countryId?: string; countryCode?: string },
    activeOnly = true,
  ): Promise<State[]> => {
    const response = await api.get(LOCATION_ENDPOINTS.STATES, {
      params: { ...query, activeOnly },
    });
    return response.data;
  },

  getMunicipalities: async (
    stateId: string,
    activeOnly = true,
  ): Promise<Municipality[]> => {
    const response = await api.get(LOCATION_ENDPOINTS.MUNICIPALITIES, {
      params: { stateId, activeOnly },
    });
    return response.data;
  },

  getZones: async (
    municipalityId: string,
    activeOnly = true,
  ): Promise<Zone[]> => {
    const response = await api.get(LOCATION_ENDPOINTS.ZONES, {
      params: { municipalityId, activeOnly },
    });
    return response.data;
  },
};
