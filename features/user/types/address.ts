export interface Address {
  id: string;
  userId: string;
  alias: string;
  street: string;
  latitude: number | null;
  longitude: number | null;
  contactName: string | null;
  contactPhone: string | null;
  isDefault: boolean;
  stateId: string;
  municipalityId: string;
  zoneId: string | null;
  state?: { id: string; name: string; code: string };
  municipality?: { id: string; name: string; code: string };
  zone?: {
    id: string;
    name: string;
    postalCode: string;
    latitude: number | null;
    longitude: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAddressPayload {
  alias: string;
  street: string;
  latitude?: number | null;
  longitude?: number | null;
  contactName?: string | null;
  contactPhone?: string | null;
  isDefault?: boolean;
  stateId: string;
  municipalityId: string;
  zoneId?: string | null;
}

export interface UpdateAddressPayload extends Partial<CreateAddressPayload> {}
