import { api, USER_ENDPOINTS } from '@/services/api';
import { User } from '@/features/auth/types/user';
import { UpdateUserPayload } from '@/features/user/types/user';

export const userService = {
  getMe: async (): Promise<User> => {
    const response = await api.get<User>(USER_ENDPOINTS.GET_ME);
    return response.data;
  },

  update: async (payload: UpdateUserPayload): Promise<User> => {
    const response = await api.patch<User>(USER_ENDPOINTS.UPDATE, payload);
    return response.data;
  },

  deleteProfilePhoto: async (): Promise<User> => {
    const response = await api.delete<User>(
      USER_ENDPOINTS.DELETE_PROFILE_PHOTO,
    );
    return response.data;
  },
};
