import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^\d{8}$/.test(phone);

export const useRegisterValidation = (formData: RegisterFormData) => {
  const { t } = useTranslation();

  const errors = useMemo(() => {
    const newErrors: RegisterFormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('errors.auth.register.firstNameRequired');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('errors.auth.register.lastNameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.auth.register.emailRequired');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t('errors.auth.register.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('errors.auth.register.phoneRequired');
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = t('errors.auth.register.phoneInvalid');
    }

    if (!formData.password) {
      newErrors.password = t('errors.auth.register.passwordRequired');
    } else if (formData.password.length < 8) {
      newErrors.password = t('errors.auth.register.passwordTooShort');
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(formData.password)) {
      newErrors.password = t('errors.auth.register.passwordPolicy');
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('errors.auth.register.confirmPasswordRequired');
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('errors.auth.register.passwordsMismatch');
    }

    return newErrors;
  }, [formData, t]);

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};
