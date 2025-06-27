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

  // Nested home routes
  HOME_EMERGENCY: "/home/emergency",

  // Nested services routes
  SERVICES_DETAIL: "/services/service-detail",
  SERVICES_BOOKING: "/services/booking",
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
export const navigateToServices = () => navigateTo(ROUTES.SERVICES);
export const navigateToAppointments = () => navigateTo(ROUTES.APPOINTMENTS);
export const navigateToProfile = () => navigateTo(ROUTES.PROFILE);
export const navigateToOrders = () => navigateTo(ROUTES.ORDERS);
export const navigateToVehicles = () => navigateTo(ROUTES.VEHICLES);
export const navigateToEarnings = () => navigateTo(ROUTES.EARNINGS);
export const navigateToSchedule = () => navigateTo(ROUTES.SCHEDULE);
export const navigateToEmergency = () => navigateTo(ROUTES.EMERGENCY);
export const navigateToHistory = () => navigateTo(ROUTES.HISTORY);

// Nested home navigation functions
export const navigateToHomeEmergency = () => navigateTo(ROUTES.HOME_EMERGENCY);

// Nested services navigation functions
export const navigateToServicesDetail = (serviceId: string) =>
  navigateToWithParams(ROUTES.SERVICES_DETAIL, { id: serviceId });
export const navigateToServicesBooking = (serviceId: string) =>
  navigateToWithParams(ROUTES.SERVICES_BOOKING, { serviceId });
