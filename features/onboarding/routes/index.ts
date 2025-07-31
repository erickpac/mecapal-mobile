import { router } from "expo-router";

// Onboarding routes
export const ONBOARDING_ROUTES = {
  ONBOARDING: "/onboarding",
  ONBOARDING_USER_TYPE: "/onboarding/user-type-selection",
  ONBOARDING_AUTH_OPTIONS: "/onboarding/auth-options",
  // Modal Auth routes (from onboarding)
  ONBOARDING_AUTH: "/onboarding/auth",
  ONBOARDING_LOGIN: "/onboarding/auth/login",
  ONBOARDING_REGISTER: "/onboarding/auth/register",
} as const;

// Onboarding navigation functions
export const navigateToOnboarding = () =>
  router.push(ONBOARDING_ROUTES.ONBOARDING);
export const navigateToUserTypeSelection = () =>
  router.push(ONBOARDING_ROUTES.ONBOARDING_USER_TYPE);
export const navigateToAuthOptions = () =>
  router.push(ONBOARDING_ROUTES.ONBOARDING_AUTH_OPTIONS);

// Modal Auth navigation functions (from onboarding)
export const navigateToOnboardingAuth = () =>
  router.push(ONBOARDING_ROUTES.ONBOARDING_AUTH as any);
export const navigateToOnboardingLogin = () =>
  router.push(ONBOARDING_ROUTES.ONBOARDING_LOGIN as any);
export const navigateToOnboardingRegister = () =>
  router.push(ONBOARDING_ROUTES.ONBOARDING_REGISTER as any);

// Onboarding replace navigation functions
export const replaceToOnboarding = () =>
  router.replace(ONBOARDING_ROUTES.ONBOARDING);
export const replaceToUserTypeSelection = () =>
  router.replace(ONBOARDING_ROUTES.ONBOARDING_USER_TYPE);
