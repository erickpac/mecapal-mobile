import { router } from "expo-router";

// Shared routes (common across features)
export const SHARED_ROUTES = {
  SETTINGS: "/settings",
} as const;

// Shared navigation functions
export const navigateToSettings = () => router.push(SHARED_ROUTES.SETTINGS);

// Shared replace navigation functions
export const replaceToSettings = () => router.replace(SHARED_ROUTES.SETTINGS);

// Helper function for typed navigation with any route
export const navigateTo = (route: string) => {
  router.push(route as any);
};

// Helper function for navigation with parameters
export const navigateToWithParams = (
  route: string,
  params: Record<string, string>,
) => {
  const queryString = new URLSearchParams(params).toString();
  router.push(`${route}?${queryString}` as any);
};

// Helper function for replace navigation
export const replaceRoute = (route: string) => {
  router.replace(route as any);
};
