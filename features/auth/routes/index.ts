import { router } from 'expo-router';

// Auth routes
export const AUTH_ROUTES = {
  AUTH: '/auth',
  AUTH_REGISTER: '/auth/register',
  AUTH_EMAIL_VERIFICATION: '/auth/email-verification',
  AUTH_FORGOT_PASSWORD: '/auth/forgot-password',
  AUTH_RESET_PASSWORD: '/auth/reset-password',
} as const;

// Reset navigation and go to Auth
export const resetToAuth = () => {
  router.dismissAll();
};
