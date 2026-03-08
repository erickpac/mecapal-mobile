import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  userType?: string;
  password?: string;
  confirmPassword?: string;
}

export const useRegisterValidation = (formData: RegisterFormData) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<RegisterFormErrors>({});

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^\d{8}$/.test(phone);
  };

  const validateForm = (): boolean => {
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

    if (!formData.userType) {
      newErrors.userType = t('errors.auth.register.userTypeRequired');
    }

    if (!formData.password) {
      newErrors.password = t('errors.auth.register.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('errors.auth.register.passwordTooShort');
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t(
        'errors.auth.register.confirmPasswordRequired',
      );
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('errors.auth.register.passwordsMismatch');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validateForm,
    isValid: Object.keys(errors).length === 0,
  };
};
