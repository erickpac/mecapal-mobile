export enum UserRole {
  TRANSPORTER = 'TRANSPORTER',
  CLIENT = 'CLIENT',
}

export interface User {
  id: string;
  cognitoSub: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  phone: string;
  companyName: string | null;
  taxId: string | null;
}
