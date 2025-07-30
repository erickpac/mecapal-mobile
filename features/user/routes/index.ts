import { router } from "expo-router";

// User routes
export const USER_ROUTES = {
  HOME: "/home",
  SEARCH: "/search",
  HISTORY: "/history",
  PROFILE: "/profile",
} as const;

// User navigation functions
export const navigateToHome = () => router.push(USER_ROUTES.HOME);
export const navigateToSearch = () => router.push(USER_ROUTES.SEARCH);
export const navigateToHistory = () => router.push(USER_ROUTES.HISTORY);
export const navigateToProfile = () => router.push(USER_ROUTES.PROFILE);

// User replace navigation functions
export const replaceToHome = () => router.replace(USER_ROUTES.HOME);
export const replaceToSearch = () => router.replace(USER_ROUTES.SEARCH);
