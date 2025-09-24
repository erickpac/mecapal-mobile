import { router } from "expo-router";

// Auth routes
export const AUTH_ROUTES = {
  AUTH: "/auth",
  AUTH_REGISTER: "/auth/register",
  AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
  AUTH_FORGOT_PASSWORD_SUCCESS_MESSAGE: "/auth/forgot-password-success",
} as const;

// Auth navigation functions
export const navigateToAuth = () => router.push(AUTH_ROUTES.AUTH);
export const navigateToRegister = () => router.push(AUTH_ROUTES.AUTH_REGISTER);
export const navigateToForgotPassword = () =>
  router.push(AUTH_ROUTES.AUTH_FORGOT_PASSWORD);
export const navigateToForgotPasswordSuccessMessage = () =>
  router.push(AUTH_ROUTES.AUTH_FORGOT_PASSWORD_SUCCESS_MESSAGE);

// Auth replace navigation functions
export const replaceToAuth = () => router.replace(AUTH_ROUTES.AUTH);
export const replaceToRegister = () =>
  router.replace(AUTH_ROUTES.AUTH_REGISTER);

// Reset navigation and go to Auth
export const resetToAuth = () => {
  // Clear navigation history and go to Auth
  router.dismissAll();
};
