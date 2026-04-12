import { z } from 'zod';
import { TFunction } from 'i18next';

export const createChangePasswordSchema = (t: TFunction) =>
  z
    .object({
      oldPassword: z
        .string()
        .min(1, t('errors.auth.changePassword.oldPasswordRequired')),
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
      message: t('auth.changePassword.passwordsMismatch'),
      path: ['confirmPassword'],
    })
    .refine((data) => data.newPassword !== data.oldPassword, {
      message: t('errors.auth.changePassword.samePassword'),
      path: ['newPassword'],
    });

export type ChangePasswordFormData = z.infer<
  ReturnType<typeof createChangePasswordSchema>
>;
