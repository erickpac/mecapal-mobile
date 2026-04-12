import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { FormInput } from '@/components/form-input';
import { useStore } from '@/store/useStore';
import { useChangePassword } from '@/features/auth/hooks/useChangePassword';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import {
  createChangePasswordSchema,
  ChangePasswordFormData,
} from '@/features/auth/schemas/change-password';
import { parseApiError } from '@/utils/api-error';

const SecurityScreen = () => {
  const { t } = useTranslation();
  const { user } = useStore();
  const { getErrorMessage } = useLocalizedError();
  const {
    mutate: changePassword,
    isPending,
    error,
    isSuccess,
    reset: resetMutation,
  } = useChangePassword();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(createChangePasswordSchema(t)),
    defaultValues: { oldPassword: '', newPassword: '', confirmPassword: '' },
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess]);

  if (!user) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-600">{t('auth.changePassword.noUser')}</Text>
      </View>
    );
  }

  const onSubmit = (data: ChangePasswordFormData) => {
    resetMutation();
    changePassword(
      { oldPassword: data.oldPassword, newPassword: data.newPassword },
      {
        onError: (err) => {
          const appError = parseApiError(err);
          const code = appError.serverErrorCode;
          if (code === 'INVALID_CREDENTIALS') {
            setError('oldPassword', {
              type: 'server',
              message: t('auth.changePassword.invalidCurrentPassword'),
            });
          } else if (code === 'INVALID_PASSWORD') {
            setError('newPassword', {
              type: 'server',
              message:
                appError.serverMessage ??
                t('auth.changePassword.invalidNewPassword'),
            });
          }
        },
      },
    );
  };

  const formLevelError = (() => {
    if (!error) return null;
    const appError = parseApiError(error);
    const code = appError.serverErrorCode;
    if (code === 'INVALID_CREDENTIALS' || code === 'INVALID_PASSWORD') {
      return null;
    }
    if (code === 'RATE_LIMITED') {
      return t('auth.changePassword.rateLimited');
    }
    return getErrorMessage(error);
  })();

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <ContentContainer edges={['left', 'right']}>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerClassName="px-4 pb-6"
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            <View className="pt-4">
              <Text className="font-plus-jakarta-bold text-2xl text-gray-800">
                {t('profile.security.title')}
              </Text>
              <Text className="mt-4 font-plus-jakarta text-base text-gray-800">
                {t('profile.security.subtitle')}
              </Text>
            </View>

            <Text className="my-4 font-plus-jakarta text-sm text-gray-700">
              {t('auth.changePassword.passwordHint')}
            </Text>

            <View className="gap-4">
              <FormInput
                control={control}
                name="oldPassword"
                label={t('auth.changePassword.oldPassword')}
                type="password"
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="newPassword"
                label={t('auth.changePassword.newPassword')}
                type="password"
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="confirmPassword"
                label={t('auth.changePassword.confirmPassword')}
                type="password"
                returnKeyType="done"
                onSubmitEditing={handleSubmit(onSubmit)}
              />

              {formLevelError && (
                <Text className="text-center font-plus-jakarta text-sm text-red-500">
                  {formLevelError}
                </Text>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="px-4 pb-4">
          <Button
            title={
              isPending
                ? t('auth.changePassword.updating')
                : t('auth.changePassword.submit')
            }
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid || isPending}
            loading={isPending}
            userType={user.role}
            variant="contained"
          />
        </View>
      </ContentContainer>
    </>
  );
};

export default SecurityScreen;
