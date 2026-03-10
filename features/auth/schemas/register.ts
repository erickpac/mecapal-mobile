import { z } from 'zod';
import { TFunction } from 'i18next';

export const createRegisterSchema = (t: TFunction) =>
  z
    .object({
      firstName: z
        .string()
        .min(1, t('errors.auth.register.firstNameRequired')),
      lastName: z
        .string()
        .min(1, t('errors.auth.register.lastNameRequired')),
      email: z
        .string()
        .min(1, t('errors.auth.register.emailRequired'))
        .email(t('errors.auth.register.emailInvalid')),
      phone: z
        .string()
        .min(1, t('errors.auth.register.phoneRequired'))
        .regex(/^\d{8}$/, t('errors.auth.register.phoneInvalid')),
      password: z
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
    .refine((data) => data.password === data.confirmPassword, {
      message: t('errors.auth.register.passwordsMismatch'),
      path: ['confirmPassword'],
    });

export type RegisterFormData = z.infer<
  ReturnType<typeof createRegisterSchema>
>;
