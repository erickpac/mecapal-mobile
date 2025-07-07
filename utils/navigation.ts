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
