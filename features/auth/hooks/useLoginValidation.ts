import { useMemo } from "react";

export const validateEmail = (email: string): string | undefined => {
  if (!email) return "El correo es obligatorio.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email))
    return "Ingresa tu correo electrónico correctamente.";

  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) return "La contraseña es obligatoria.";
  if (password.length < 6)
    return "La contraseña debe tener al menos 6 caracteres.";
  return undefined;
};

export const useLoginValidation = (email: string, password: string) => {
  const emailError = useMemo(() => validateEmail(email), [email]);
  const passwordError = useMemo(() => validatePassword(password), [password]);
  const isValid = !emailError && !passwordError;
  return {
    emailError,
    passwordError,
    isValid,
  };
};
