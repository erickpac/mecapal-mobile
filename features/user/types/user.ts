import { User } from '@/features/auth/types/user';

export interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  phone?: string;
  taxId?: string;
  companyName?: string;
  idNumber?: string;
}

export type UserMeResponse = User;
