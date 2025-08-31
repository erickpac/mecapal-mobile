import { router } from "expo-router";

// User routes
export const USER_ROUTES = {
  HOME: "/home",
  SEARCH: "/search",
  HISTORY: "/history",
  PROFILE: "/profile",
  HELP: "/profile/help",
  HELP_PRIVACY_POLICY: "/profile/help/privacy-policy",
  HELP_TERMS_CONDITION: "/profile/help/terms-condition",
  HELP_FAQ: "/profile/help/faq",
  HELP_CONTACT: "/profile/help/contact",
} as const;

// User navigation functions
export const navigateToHome = () => router.push(USER_ROUTES.HOME);
export const navigateToSearch = () => router.push(USER_ROUTES.SEARCH);
export const navigateToHistory = () => router.push(USER_ROUTES.HISTORY);
export const navigateToProfile = () => router.push(USER_ROUTES.PROFILE);
export const navigateToHelp = () => router.push(USER_ROUTES.HELP);
export const navigateToHelpPrivacyPolicy = () => router.push(USER_ROUTES.HELP_PRIVACY_POLICY);
export const navigateToHelpTermsCondition = () => router.push(USER_ROUTES.HELP_TERMS_CONDITION);
export const navigateToHelpFaq = () => router.push(USER_ROUTES.HELP_FAQ);
export const navigateToHelpContact = () => router.push(USER_ROUTES.HELP_CONTACT);

// User replace navigation functions
export const replaceToHome = () => router.replace(USER_ROUTES.HOME);
export const replaceToSearch = () => router.replace(USER_ROUTES.SEARCH);
