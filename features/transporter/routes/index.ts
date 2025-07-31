import { router } from "expo-router";

// Transporter routes
export const TRANSPORTER_ROUTES = {
  ORDERS: "/orders",
  VEHICLES: "/vehicles",
  EARNINGS: "/earnings",
  PROFILE: "/profile",
} as const;

// Transporter navigation functions
export const navigateToOrders = () => router.push(TRANSPORTER_ROUTES.ORDERS);
export const navigateToVehicles = () =>
  router.push(TRANSPORTER_ROUTES.VEHICLES);
export const navigateToEarnings = () =>
  router.push(TRANSPORTER_ROUTES.EARNINGS);
export const navigateToTransporterProfile = () =>
  router.push(TRANSPORTER_ROUTES.PROFILE);

// Transporter replace navigation functions
export const replaceToOrders = () => router.replace(TRANSPORTER_ROUTES.ORDERS);
export const replaceToVehicles = () =>
  router.replace(TRANSPORTER_ROUTES.VEHICLES);
