import { router } from 'expo-router';

export const ACCOUNT_ROUTES = {
  DELETE_CONFIRM: '/profile/account/delete',
  DELETE_SUCCESS: '/profile/account/delete-success',
} as const;

export const navigateToDeleteAccount = () =>
  router.push(ACCOUNT_ROUTES.DELETE_CONFIRM as never);

export const navigateToDeleteAccountSuccess = (scheduledFor: string) =>
  router.replace({
    pathname: ACCOUNT_ROUTES.DELETE_SUCCESS,
    params: { scheduledFor },
  } as never);
