export enum UserRole {
  TRANSPORTER,
  USER,
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone: string;
  createdAt: string;
  updatedAt: string;
}
