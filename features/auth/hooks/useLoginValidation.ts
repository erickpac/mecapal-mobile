import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useLoginValidation = (email: string, password: string) => {
  const { t } = useTranslation();

  const emailError = useMemo(() => {
    if (!email) return t('errors.auth.login.emailRequired');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return t('errors.auth.login.emailInvalid');
    return undefined;
  }, [email, t]);

  const passwordError = useMemo(() => {
    if (!password) return t('errors.auth.login.passwordRequired');
    if (password.length < 6) return t('errors.auth.login.passwordTooShort');
    return undefined;
  }, [password, t]);

  const isValid = !emailError && !passwordError;

  return { emailError, passwordError, isValid };
};
