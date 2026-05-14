import { z } from 'zod';
import { TFunction } from 'i18next';

export const createNewsletterSchema = (t: TFunction) =>
  z.object({
    email: z
      .string()
      .min(1, t('errors.newsletter.emailRequired'))
      .pipe(z.email(t('errors.newsletter.emailInvalid'))),
  });

export type NewsletterFormData = z.infer<
  ReturnType<typeof createNewsletterSchema>
>;
