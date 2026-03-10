import { router, usePathname } from 'expo-router';
import { AuthFlow } from '@/features/auth/types/auth-flow';
import { ONBOARDING_ROUTES } from '@/features/onboarding/routes';
import { AUTH_ROUTES } from '@/features/auth/routes';
import { replaceRoute, navigateTo } from '@/features/shared/routes';

export function useAuthFlow() {
  const pathname = usePathname();
  const flow: AuthFlow = pathname.includes('/onboarding/') ? 'onboarding' : 'auth';
  const isOnboarding = flow === 'onboarding';

  const routes = isOnboarding
    ? {
        login: ONBOARDING_ROUTES.ONBOARDING_LOGIN,
        register: ONBOARDING_ROUTES.ONBOARDING_REGISTER,
        forgotPassword: ONBOARDING_ROUTES.ONBOARDING_FORGOT_PASSWORD,
        resetPassword: ONBOARDING_ROUTES.ONBOARDING_RESET_PASSWORD,
        emailVerification: ONBOARDING_ROUTES.ONBOARDING_EMAIL_VERIFICATION,
      }
    : {
        login: AUTH_ROUTES.AUTH,
        register: AUTH_ROUTES.AUTH_REGISTER,
        forgotPassword: AUTH_ROUTES.AUTH_FORGOT_PASSWORD,
        resetPassword: AUTH_ROUTES.AUTH_RESET_PASSWORD,
        emailVerification: AUTH_ROUTES.AUTH_EMAIL_VERIFICATION,
      };

  // Onboarding: replace to avoid stack buildup (X dismiss handles exit)
  // Auth: push to preserve back navigation
  const navigate = isOnboarding ? replaceRoute : navigateTo;

  return {
    flow,
    isOnboarding,
    routes,
    // After success (login, verify, reset) always replace — no going back
    navigateToLogin: () => replaceRoute(routes.login),
    // Screen-to-screen navigation: push in auth flow, replace in onboarding
    navigateToRegister: () => navigate(routes.register),
    navigateToForgotPassword: () => navigate(routes.forgotPassword),
    navigateToResetPassword: (email: string) =>
      navigate(`${routes.resetPassword}?email=${encodeURIComponent(email)}`),
    navigateToEmailVerification: (email: string) =>
      navigate(`${routes.emailVerification}?email=${encodeURIComponent(email)}`),
  };
}
