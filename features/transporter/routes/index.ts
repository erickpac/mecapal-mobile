import { router } from 'expo-router';

// Transporter routes
export const TRANSPORTER_ROUTES = {
  ORDERS: '/orders',
  INFO: '/profile/info',
  VEHICLES: '/vehicles',
  EARNINGS: '/profile/earnings',
  PROFILE: '/profile',
  HELP: '/profile/transporter-help',
} as const;

// Transporter navigation functions
export const navigateToOrders = () => router.push(TRANSPORTER_ROUTES.ORDERS);
export const navigateToVehicles = () =>
  router.push(TRANSPORTER_ROUTES.VEHICLES);
export const navigateToEarnings = () =>
  router.push(TRANSPORTER_ROUTES.EARNINGS);
export const navigateToTransporterProfile = () =>
  router.push(TRANSPORTER_ROUTES.PROFILE);
export const navigateToTransporterInfo = () =>
  router.push(TRANSPORTER_ROUTES.INFO);
export const navigateToTransporterHelp = () =>
  router.push(TRANSPORTER_ROUTES.HELP);

// Transporter replace navigation functions
export const replaceToOrders = () => router.replace(TRANSPORTER_ROUTES.ORDERS);
export const replaceToVehicles = () =>
  router.replace(TRANSPORTER_ROUTES.VEHICLES);
