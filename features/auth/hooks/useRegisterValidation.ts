import { useState } from "react";
import { useTranslation } from "react-i18next";

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  userType: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormErrors {
  name?: string;
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t("errors.auth.register.nameRequired");
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("errors.auth.register.emailRequired");
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t("errors.auth.register.emailInvalid");
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.auth.register.phoneRequired");
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = t("errors.auth.register.phoneInvalid");
    }

    // User type validation
    if (!formData.userType) {
      newErrors.userType = t("errors.auth.register.userTypeRequired");
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = t("errors.auth.register.passwordRequired");
    } else if (formData.password.length < 6) {
      newErrors.password = t("errors.auth.register.passwordTooShort");
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t(
        "errors.auth.register.confirmPasswordRequired",
      );
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("errors.auth.register.passwordsMismatch");
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
