import { router } from "expo-router";

// User routes
export const USER_ROUTES = {
  HOME: "/home",
  SEARCH: "/search",
  HISTORY: "/history",
  PROFILE: "/profile",
  INFO: "/profile/info",
  PAYMENT: "/profile/payment",
  HELP: "/profile/help",
  HELP_PRIVACY_POLICY: "/profile/help/privacy-policy",
  HELP_TERMS_CONDITION: "/profile/help/terms-condition",
  HELP_FAQ: "/profile/help/faq",
  HELP_CONTACT: "/profile/help/contact",
  
  // Addresses routes
  ADDRESSES: "/profile/addresses",
  ADDRESSES_INDEX: "/profile/addresses",
  ADDRESSES_ADD: "/profile/addresses/add",
  ADDRESSES_EDIT: "/profile/addresses/edit",
  
  // Security routes
  SECURITY: "/profile/security",
  SECURITY_INDEX: "/profile/security",
  SECURITY_CHANGE_PASSWORD: "/profile/security/change-password",
  SECURITY_TWO_FACTOR: "/profile/security/two-factor",
  SECURITY_DEVICES: "/profile/security/devices",
} as const;

// User navigation functions
export const navigateToHome = () => router.push(USER_ROUTES.HOME);
export const navigateToSearch = () => router.push(USER_ROUTES.SEARCH);
export const navigateToHistory = () => router.push(USER_ROUTES.HISTORY);
export const navigateToProfile = () => router.push(USER_ROUTES.PROFILE);
export const navigateToInfo = () => router.push(USER_ROUTES.INFO);
export const navigateToPayment = () => router.push(USER_ROUTES.PAYMENT);
export const navigateToHelp = () => router.push(USER_ROUTES.HELP);
export const navigateToHelpPrivacyPolicy = () => router.push(USER_ROUTES.HELP_PRIVACY_POLICY);
export const navigateToHelpTermsCondition = () => router.push(USER_ROUTES.HELP_TERMS_CONDITION);
export const navigateToHelpFaq = () => router.push(USER_ROUTES.HELP_FAQ);
export const navigateToHelpContact = () => router.push(USER_ROUTES.HELP_CONTACT);

// Addresses navigation functions
export const navigateToAddresses = () => router.push(USER_ROUTES.ADDRESSES);
export const navigateToAddressesIndex = () => router.push(USER_ROUTES.ADDRESSES_INDEX);
export const navigateToAddAddress = () => router.push(USER_ROUTES.ADDRESSES_ADD);
export const navigateToEditAddress = () => router.push(USER_ROUTES.ADDRESSES_EDIT);

// Security navigation functions
export const navigateToSecurity = () => router.push(USER_ROUTES.SECURITY);
export const navigateToSecurityIndex = () => router.push(USER_ROUTES.SECURITY_INDEX);
export const navigateToChangePassword = () => router.push(USER_ROUTES.SECURITY_CHANGE_PASSWORD);
export const navigateToTwoFactor = () => router.push(USER_ROUTES.SECURITY_TWO_FACTOR);
export const navigateToDevices = () => router.push(USER_ROUTES.SECURITY_DEVICES);

// User replace navigation functions
export const replaceToHome = () => router.replace(USER_ROUTES.HOME);
export const replaceToSearch = () => router.replace(USER_ROUTES.SEARCH);
