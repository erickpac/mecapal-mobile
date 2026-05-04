import { useEffect, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Button } from '@/components/button';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { FormInput } from '@/components/form-input';
import { Input } from '@/components/input';
import Avatar from '@/components/avatar';
import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import { useUpdateUser } from '@/features/user/hooks/useUpdateUser';
import { UpdateUserPayload } from '@/features/user/types/user';
import {
  ClientEditProfileFormData,
  TransporterEditProfileFormData,
  createClientEditProfileSchema,
  createTransporterEditProfileSchema,
} from '@/features/user/schemas/edit-profile';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useSnackbar } from '@/hooks/useSnackbar';

const trim = (value: string | undefined | null): string =>
  typeof value === 'string' ? value.trim() : '';

const InfoScreen = () => {
  const { t } = useTranslation();
  const { user } = useStore();
  const { getErrorMessage } = useLocalizedError();
  const { showSuccess, showError } = useSnackbar();

  const isTransporter = user?.role === UserRole.TRANSPORTER;

  const schema = useMemo(
    () =>
      isTransporter
        ? createTransporterEditProfileSchema(t)
        : createClientEditProfileSchema(t),
    [isTransporter, t],
  );

  const defaultValues = useMemo<
    ClientEditProfileFormData | TransporterEditProfileFormData
  >(() => {
    const base: ClientEditProfileFormData = {
      firstName: trim(user?.firstName),
      lastName: trim(user?.lastName),
      phone: trim(user?.phone),
      taxId: trim(user?.taxId),
    };

    if (isTransporter) {
      const transporterDefaults: TransporterEditProfileFormData = {
        ...base,
        companyName: trim(user?.companyName),
        idNumber: trim(user?.transporterProfile?.idNumber),
      };
      return transporterDefaults;
    }

    return base;
  }, [user, isTransporter]);

  type FormValues = typeof defaultValues;

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting, dirtyFields },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate: updateUser, isPending } = useUpdateUser();

  const buildPayload = (
    values: FormValues,
    dirty: Record<string, unknown>,
  ): UpdateUserPayload => {
    const payload: UpdateUserPayload = {};
    const record = values as unknown as Record<string, string>;
    const allowedKeys: Array<keyof UpdateUserPayload> = [
      'firstName',
      'lastName',
      'phone',
      'taxId',
      'companyName',
      'idNumber',
    ];

    allowedKeys.forEach((key) => {
      if (!dirty[key]) return;
      const raw = record[key];
      const value = typeof raw === 'string' ? raw.trim() : '';

      // Skip empty optional fields — don't send "" to the API
      if (value === '') {
        return;
      }

      payload[key] = value;
    });

    return payload;
  };

  const onSubmit = (values: FormValues) => {
    const payload = buildPayload(
      values,
      dirtyFields as Record<string, unknown>,
    );

    if (Object.keys(payload).length === 0) {
      return;
    }

    updateUser(payload, {
      onSuccess: () => {
        showSuccess(t('profile.personalInfo.updateSuccessMessage'));
        // Snackbar is rendered by the app-level provider, so it remains visible
        // after navigating back. A small delay lets the user register the action
        // before the screen transitions away.
        setTimeout(() => {
          router.back();
        }, 400);
      },
      onError: (error) => {
        showError(getErrorMessage(error));
      },
    });
  };

  // react-hook-form's handleSubmit is generic; cast to satisfy our union type.
  const submit = handleSubmit(onSubmit as (values: FieldValues) => void);

  const userTypeLabel =
    user?.role === UserRole.TRANSPORTER
      ? t('profile.personalInfo.userTypeTransporter')
      : t('profile.personalInfo.userTypeClient');

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <ContentContainer edges={['left', 'right']}>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerClassName="px-4" bounces={false}>
            <View className="py-4">
              <Text className="font-plus-jakarta-bold text-2xl font-bold text-gray-800">
                {t('profile.personalInfo.title')}
              </Text>
            </View>

            <View className="items-center">
              <Avatar size={48} sizeEditButton={20} />
            </View>

            <View className="mt-8 pb-4">
              <FormInput
                control={control}
                name="firstName"
                label={t('profile.personalInfo.firstName')}
                type="text"
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="lastName"
                label={t('profile.personalInfo.lastName')}
                type="text"
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="phone"
                label={t('profile.personalInfo.phone')}
                type="phone"
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="taxId"
                label={t('profile.personalInfo.taxId')}
                type="text"
                returnKeyType="next"
              />

              {isTransporter && (
                <>
                  <FormInput
                    control={control}
                    name="companyName"
                    label={t('profile.personalInfo.companyName')}
                    type="text"
                    returnKeyType="next"
                  />
                  <FormInput
                    control={control}
                    name="idNumber"
                    label={t('profile.personalInfo.idNumber')}
                    type="text"
                    returnKeyType="done"
                  />
                </>
              )}

              <Input
                label={t('profile.personalInfo.email')}
                value={user?.email ?? ''}
                disabled
                editable={false}
                right={undefined}
              />

              <Input
                label={t('profile.personalInfo.userType')}
                value={userTypeLabel}
                disabled
                editable={false}
                right={undefined}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="px-4 pb-4">
          <Button
            title={
              isPending
                ? t('profile.personalInfo.saving')
                : t('profile.personalInfo.save')
            }
            onPress={submit}
            disabled={!isDirty || isPending || isSubmitting}
            loading={isPending}
            userType={user?.role}
            variant="contained"
          />
        </View>
      </ContentContainer>
    </>
  );
};

export default InfoScreen;
