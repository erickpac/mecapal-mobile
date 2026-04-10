export interface Address {
  id: string;
  userId: string;
  alias: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude: number | null;
  longitude: number | null;
  contactName: string | null;
  contactPhone: string | null;
  isDefault: boolean;
  stateId: string | null;
  municipalityId: string | null;
  zoneId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAddressPayload {
  alias: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country?: string;
  latitude?: number | null;
  longitude?: number | null;
  contactName?: string | null;
  contactPhone?: string | null;
  isDefault?: boolean;
  stateId?: string | null;
  municipalityId?: string | null;
  zoneId?: string | null;
}

export interface UpdateAddressPayload extends Partial<CreateAddressPayload> {}
