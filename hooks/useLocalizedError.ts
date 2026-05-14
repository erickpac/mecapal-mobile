import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { parseApiError } from '@/utils/api-error';

export const useLocalizedError = () => {
  const { t } = useTranslation();

  const getErrorMessage = useCallback(
    (error: unknown): string => {
      const appError = parseApiError(error);
      // The raw server message is English/dev-facing — never shown to the
      // user, only logged in development to aid debugging.
      if (__DEV__ && appError.serverMessage) {
        console.warn(
          `[API error] ${appError.serverErrorCode ?? appError.code}: ${appError.serverMessage}`,
        );
      }
      return t(appError.i18nKey);
    },
    [t],
  );

  return { getErrorMessage };
};
