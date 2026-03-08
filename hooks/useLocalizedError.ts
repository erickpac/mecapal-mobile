import { useTranslation } from 'react-i18next';
import { parseApiError } from '@/utils/api-error';

export const useLocalizedError = () => {
  const { t } = useTranslation();

  const getErrorMessage = (error: unknown): string => {
    const appError = parseApiError(error);
    return t(appError.i18nKey);
  };

  return { getErrorMessage };
};
