import { z } from 'zod';
import { TFunction } from 'i18next';

export const createAddressSchema = (t: TFunction) =>
  z.object({
    alias: z
      .string()
      .min(1, t('errors.address.aliasRequired'))
      .max(50, t('errors.address.aliasTooLong')),
    stateId: z.string().min(1, t('errors.address.stateRequired')),
    cityId: z.string().min(1, t('errors.address.cityRequired')),
    zoneId: z.string(),
    street: z.string().min(1, t('errors.address.streetRequired')),
    isDefault: z.boolean(),
  });

export type AddressFormData = z.infer<ReturnType<typeof createAddressSchema>>;
