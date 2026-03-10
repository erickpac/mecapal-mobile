import { z } from 'zod';
import { TFunction } from 'i18next';

export const createResetPasswordSchema = (t: TFunction) =>
  z
    .object({
      code: z
        .string()
        .min(1, t('errors.validationError'))
        .length(6, t('auth.resetPassword.codePlaceholder')),
      newPassword: z
        .string()
        .min(1, t('errors.auth.register.passwordRequired'))
        .min(8, t('errors.auth.register.passwordTooShort'))
        .regex(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/,
          t('errors.auth.register.passwordPolicy'),
        ),
      confirmPassword: z
        .string()
        .min(1, t('errors.auth.register.confirmPasswordRequired')),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t('auth.resetPassword.passwordsMismatch'),
      path: ['confirmPassword'],
    });

export type ResetPasswordFormData = z.infer<
  ReturnType<typeof createResetPasswordSchema>
>;
