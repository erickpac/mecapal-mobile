import { z } from 'zod';
import { TFunction } from 'i18next';

const optionalOrEmpty = (
  schema: z.ZodString,
): z.ZodUnion<readonly [typeof schema, z.ZodLiteral<''>]> =>
  z.union([schema, z.literal('')]);

const createBaseSchema = (t: TFunction) =>
  z.object({
    firstName: z
      .string()
      .min(2, t('errors.profile.editProfile.firstNameTooShort')),
    lastName: z
      .string()
      .min(2, t('errors.profile.editProfile.lastNameTooShort')),
    phone: z.string().min(8, t('errors.profile.editProfile.phoneTooShort')),
    taxId: optionalOrEmpty(z.string().min(1)),
  });

export const createClientEditProfileSchema = (t: TFunction) =>
  createBaseSchema(t);

export const createTransporterEditProfileSchema = (t: TFunction) =>
  createBaseSchema(t).extend({
    companyName: optionalOrEmpty(z.string().min(1)),
    idNumber: optionalOrEmpty(
      z.string().min(5, t('errors.profile.editProfile.idNumberTooShort')),
    ),
  });

export type ClientEditProfileFormData = z.infer<
  ReturnType<typeof createClientEditProfileSchema>
>;

export type TransporterEditProfileFormData = z.infer<
  ReturnType<typeof createTransporterEditProfileSchema>
>;

export type EditProfileFormData =
  | ClientEditProfileFormData
  | TransporterEditProfileFormData;
