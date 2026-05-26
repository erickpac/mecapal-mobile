export enum UserRole {
  TRANSPORTER = 'TRANSPORTER',
  CLIENT = 'CLIENT',
}

export interface TransporterProfile {
  id: string;
  userId: string;
  idNumber: string | null;
}

export interface User {
  id: string;
  cognitoSub: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  phone: string;
  countryCode: string;
  companyName: string | null;
  taxId: string | null;
  profilePhotoUrl: string | null;
  deletionScheduledFor: string | null;
  transporterProfile: TransporterProfile | null;
}
