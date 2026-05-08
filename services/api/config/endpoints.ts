export const LOCATION_ENDPOINTS = {
  COUNTRIES: 'locations/countries',
  STATES: 'locations/states',
  MUNICIPALITIES: 'locations/municipalities',
  ZONES: 'locations/zones/by-municipality',
  ZONES_SEARCH: 'locations/zones',
};

export const ADDRESS_ENDPOINTS = {
  BASE: 'address',
  BY_ID: (id: string) => `address/${id}`,
  SET_DEFAULT: (id: string) => `address/${id}/default`,
};

export const AUTH_ENDPOINTS = {
  SIGN_IN: 'auth/sign-in',
  SIGN_UP: 'auth/sign-up',
  CONFIRM_SIGN_UP: 'auth/confirm-sign-up',
  REFRESH_TOKEN: 'auth/refresh-token',
  ME: 'auth/me',
  FORGOT_PASSWORD: 'auth/forgot-password',
  RESET_PASSWORD: 'auth/reset-password',
  CHANGE_PASSWORD: 'auth/change-password',
  SIGN_OUT: 'auth/sign-out',
};

export const ACCOUNT_ENDPOINTS = {
  DELETE: 'auth/account',
  CANCEL_DELETION: 'auth/account/cancel-deletion',
};

export const USER_ENDPOINTS = {
  GET_ME: 'user/me',
  UPDATE: 'user',
};

export const UPLOAD_ENDPOINTS = {
  PRESIGNED_URL: 'upload/presigned-url',
};
