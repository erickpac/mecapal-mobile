import { router } from "expo-router";

// Auth routes
export const AUTH_ROUTES = {
  AUTH: "/auth",
  AUTH_REGISTER: "/auth/register",
  AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
} as const;

// Auth navigation functions
export const navigateToAuth = () => router.push(AUTH_ROUTES.AUTH);
export const navigateToRegister = () => router.push(AUTH_ROUTES.AUTH_REGISTER);
export const navigateToForgotPassword = () =>
  router.push(AUTH_ROUTES.AUTH_FORGOT_PASSWORD);

// Auth replace navigation functions
export const replaceToAuth = () => router.replace(AUTH_ROUTES.AUTH);
export const replaceToRegister = () =>
  router.replace(AUTH_ROUTES.AUTH_REGISTER);
