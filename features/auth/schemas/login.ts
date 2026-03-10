import { z } from 'zod';
import { TFunction } from 'i18next';

export const createLoginSchema = (t: TFunction) =>
  z.object({
    email: z
      .string()
      .min(1, t('errors.auth.login.emailRequired'))
      .pipe(z.email(t('errors.auth.login.emailInvalid'))),
    password: z
      .string()
      .min(1, t('errors.auth.login.passwordRequired'))
      .min(6, t('errors.auth.login.passwordTooShort')),
  });

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;
