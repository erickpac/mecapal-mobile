import {
  Address,
  CreateAddressPayload,
  UpdateAddressPayload,
} from '../types/address';
import { api, ADDRESS_ENDPOINTS } from '@/services/api';

export const addressService = {
  getAll: async (): Promise<Address[]> => {
    const response = await api.get(ADDRESS_ENDPOINTS.BASE);
    return response.data;
  },

  getById: async (id: string): Promise<Address> => {
    const response = await api.get(ADDRESS_ENDPOINTS.BY_ID(id));
    return response.data;
  },

  create: async (data: CreateAddressPayload): Promise<Address> => {
    const response = await api.post(ADDRESS_ENDPOINTS.BASE, data);
    return response.data;
  },

  update: async (id: string, data: UpdateAddressPayload): Promise<Address> => {
    const response = await api.patch(ADDRESS_ENDPOINTS.BY_ID(id), data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(ADDRESS_ENDPOINTS.BY_ID(id));
  },

  setDefault: async (id: string): Promise<Address> => {
    const response = await api.patch(ADDRESS_ENDPOINTS.SET_DEFAULT(id));
    return response.data;
  },
};
