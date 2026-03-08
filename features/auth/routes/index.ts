import { router } from 'expo-router';

// Auth routes
export const AUTH_ROUTES = {
  AUTH: '/auth',
  AUTH_REGISTER: '/auth/register',
  AUTH_EMAIL_VERIFICATION: '/auth/email-verification',
  AUTH_FORGOT_PASSWORD: '/auth/forgot-password',
  AUTH_RESET_PASSWORD: '/auth/reset-password',
} as const;

// Auth navigation functions
export const navigateToAuth = () => router.push(AUTH_ROUTES.AUTH);
export const navigateToRegister = () => router.push(AUTH_ROUTES.AUTH_REGISTER);
export const navigateToForgotPassword = () =>
  router.push(AUTH_ROUTES.AUTH_FORGOT_PASSWORD);
export const navigateToResetPassword = (email: string) =>
  router.push(`${AUTH_ROUTES.AUTH_RESET_PASSWORD}?email=${encodeURIComponent(email)}` as any);

// Auth replace navigation functions
export const replaceToAuth = () => router.replace(AUTH_ROUTES.AUTH);
export const replaceToRegister = () =>
  router.replace(AUTH_ROUTES.AUTH_REGISTER);

// Reset navigation and go to Auth
export const resetToAuth = () => {
  // Clear navigation history and go to Auth
  router.dismissAll();
};
