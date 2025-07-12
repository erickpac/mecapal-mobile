import { router } from "expo-router";

// Define available routes
export const ROUTES = {
  HOME: "/home",
  SEARCH: "/search",
  HISTORY: "/history",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  ORDERS: "/orders",
  VEHICLES: "/vehicles",
  EARNINGS: "/earnings",
  // Onboarding routes
  ONBOARDING: "/onboarding",
  ONBOARDING_USER_TYPE: "/onboarding/user-type-selection",
  ONBOARDING_AUTH_OPTIONS: "/onboarding/auth-options",
  // Auth routes
  AUTH: "/auth",
  AUTH_REGISTER: "/auth/register",
  AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
} as const;

// Helper function for typed navigation
export const navigateTo = (route: string) => {
  router.push(route as any);
};

// Helper function for navigation with parameters
export const navigateToWithParams = (
  route: string,
  params: Record<string, string>
) => {
  const queryString = new URLSearchParams(params).toString();
  router.push(`${route}?${queryString}` as any);
};

// Typed navigation functions
export const navigateToSearch = () => navigateTo(ROUTES.SEARCH);
export const navigateToHistory = () => navigateTo(ROUTES.HISTORY);
export const navigateToProfile = () => navigateTo(ROUTES.PROFILE);
export const navigateToSettings = () => navigateTo(ROUTES.SETTINGS);
export const navigateToOrders = () => navigateTo(ROUTES.ORDERS);
export const navigateToVehicles = () => navigateTo(ROUTES.VEHICLES);
export const navigateToEarnings = () => navigateTo(ROUTES.EARNINGS);

// Onboarding navigation functions
export const navigateToOnboarding = () => navigateTo(ROUTES.ONBOARDING);
export const navigateToUserTypeSelection = () =>
  navigateTo(ROUTES.ONBOARDING_USER_TYPE);
export const navigateToAuthOptions = () =>
  navigateTo(ROUTES.ONBOARDING_AUTH_OPTIONS);

// Auth navigation functions
export const navigateToAuth = () => navigateTo(ROUTES.AUTH);
export const navigateToRegister = () => navigateTo(ROUTES.AUTH_REGISTER);
export const navigateToForgotPassword = () =>
  navigateTo(ROUTES.AUTH_FORGOT_PASSWORD);

// Helper function for replace navigation
export const replaceRoute = (route: string) => {
  router.replace(route as any);
};
