import { usePathname } from 'expo-router';
import { AuthFlow } from '@/features/auth/types/auth-flow';
import { ONBOARDING_ROUTES } from '@/features/onboarding/routes';
import { AUTH_ROUTES } from '@/features/auth/routes';
import { replaceRoute } from '@/features/shared/routes';

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

  return {
    flow,
    isOnboarding,
    routes,
    navigateToLogin: () => replaceRoute(routes.login),
    navigateToRegister: () => replaceRoute(routes.register),
    navigateToForgotPassword: () => replaceRoute(routes.forgotPassword),
    navigateToResetPassword: (email: string) =>
      replaceRoute(`${routes.resetPassword}?email=${encodeURIComponent(email)}`),
    navigateToEmailVerification: (email: string) =>
      replaceRoute(`${routes.emailVerification}?email=${encodeURIComponent(email)}`),
  };
}
