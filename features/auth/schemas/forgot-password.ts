import { z } from 'zod';
import { TFunction } from 'i18next';

export const createForgotPasswordSchema = (t: TFunction) =>
  z.object({
    email: z
      .string()
      .min(1, t('errors.auth.register.emailRequired'))
      .pipe(z.email(t('errors.auth.register.emailInvalid'))),
  });

export type ForgotPasswordFormData = z.infer<
  ReturnType<typeof createForgotPasswordSchema>
>;
