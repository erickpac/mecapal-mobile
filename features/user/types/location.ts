export interface Country {
  id: string;
  name: string;
  code: string;
  isActive: boolean;
}

export interface State {
  id: string;
  name: string;
  code: string;
  isActive: boolean;
  countryId: string;
}

export interface Municipality {
  id: string;
  name: string;
  code: string;
  isActive: boolean;
  stateId: string;
}

export interface Zone {
  id: string;
  name: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  municipalityId: string;
}
