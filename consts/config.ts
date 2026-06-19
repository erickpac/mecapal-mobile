import Constants from 'expo-constants';

const FALLBACK_WEB_BASE_URL = 'https://mekapal.com';

export const getWebBaseUrl = (): string =>
  (Constants.expoConfig?.extra?.webBaseUrl as string | undefined) ??
  FALLBACK_WEB_BASE_URL;
