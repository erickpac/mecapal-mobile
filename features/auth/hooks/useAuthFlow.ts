import { router, usePathname } from 'expo-router';
import { AuthFlow } from '@/features/auth/types/auth-flow';
import { ONBOARDING_ROUTES } from '@/features/onboarding/routes';
import { AUTH_ROUTES } from '@/features/auth/routes';
import { replaceRoute, navigateTo } from '@/features/shared/routes';

export function useAuthFlow() {
  const pathname = usePathname();
  const flow: AuthFlow = pathname.includes('/onboarding/')
    ? 'onboarding'
    : 'auth';
  const isOnboarding = flow === 'onboarding';

  const routes = isOnboarding
    ? {
        login: ONBOARDING_ROUTES.ONBOARDING_LOGIN,
        register: ONBOARDING_ROUTES.ONBOARDING_REGISTER,
        forgotPassword: ONBOARDING_ROUTES.ONBOARDING_FORGOT_PASSWORD,
        resetPassword: ONBOARDING_ROUTES.ONBOARDING_RESET_PASSWORD,
        resetPasswordSuccess:
          ONBOARDING_ROUTES.ONBOARDING_RESET_PASSWORD_SUCCESS,
        emailVerification: ONBOARDING_ROUTES.ONBOARDING_EMAIL_VERIFICATION,
      }
    : {
        login: AUTH_ROUTES.AUTH,
        register: AUTH_ROUTES.AUTH_REGISTER,
        forgotPassword: AUTH_ROUTES.AUTH_FORGOT_PASSWORD,
        resetPassword: AUTH_ROUTES.AUTH_RESET_PASSWORD,
        resetPasswordSuccess: AUTH_ROUTES.AUTH_RESET_PASSWORD_SUCCESS,
        emailVerification: AUTH_ROUTES.AUTH_EMAIL_VERIFICATION,
      };

  // Push for going deeper in the auth flow (preserves back navigation)
  const push = isOnboarding ? replaceRoute : navigateTo;

  return {
    flow,
    isOnboarding,
    routes,
    // After success or going back to login: always replace
    navigateToLogin: () => replaceRoute(routes.login),
    // Login → Register: push in auth flow (back button returns to login),
    // replace in onboarding (no back button, uses "I already have an account")
    navigateToRegister: () => push(routes.register),
    // Deeper screens: push in auth flow so back button works
    navigateToForgotPassword: () => push(routes.forgotPassword),
    navigateToResetPassword: (email: string) =>
      push(`${routes.resetPassword}?email=${encodeURIComponent(email)}`),
    navigateToResetPasswordSuccess: () =>
      replaceRoute(routes.resetPasswordSuccess),
    // Exits the forgot-password flow and returns to the login screen that
    // initiated it. In auth flow two screens were pushed (forgot-password +
    // reset-password, the latter replaced by the success screen): the first
    // back pops within the /auth stack, the second exits it to the origin.
    // In onboarding the flow uses replace, so the stack is [success] and a
    // single replace to login is enough.
    exitForgotPasswordFlow: () => {
      if (isOnboarding) {
        replaceRoute(routes.login);
        return;
      }
      router.back();
      router.back();
    },
    navigateToEmailVerification: (email: string) =>
      push(`${routes.emailVerification}?email=${encodeURIComponent(email)}`),
  };
}
