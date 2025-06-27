import { router } from "expo-router";

// Define available routes
export const ROUTES = {
  HOME: "/home",
  SERVICES: "/services",
  APPOINTMENTS: "/appointments",
  PROFILE: "/profile",
  ORDERS: "/orders",
  VEHICLES: "/vehicles",
  EARNINGS: "/earnings",
  SCHEDULE: "/schedule",
  EMERGENCY: "/emergency",
  HISTORY: "/history",
} as const;

// Helper function for typed navigation
export const navigateTo = (route: string) => {
  router.push(route as any);
};

// Typed navigation functions
export const navigateToServices = () => navigateTo(ROUTES.SERVICES);
export const navigateToAppointments = () => navigateTo(ROUTES.APPOINTMENTS);
export const navigateToProfile = () => navigateTo(ROUTES.PROFILE);
export const navigateToOrders = () => navigateTo(ROUTES.ORDERS);
export const navigateToVehicles = () => navigateTo(ROUTES.VEHICLES);
export const navigateToEarnings = () => navigateTo(ROUTES.EARNINGS);
export const navigateToSchedule = () => navigateTo(ROUTES.SCHEDULE);
export const navigateToEmergency = () => navigateTo(ROUTES.EMERGENCY);
export const navigateToHistory = () => navigateTo(ROUTES.HISTORY);
