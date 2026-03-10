import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { IconButton } from '@/components/icon-button';
import { COLORS } from '@/consts/colors';
import { Button } from '@/components/button';
import { FormInput } from '@/components/form-input';
import { useStore } from '@/store/useStore';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useResetPassword } from '@/features/auth/hooks/useResetPassword';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createResetPasswordSchema,
  ResetPasswordFormData,
} from '@/features/auth/schemas/reset-password';

export default function ResetPasswordScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const { getErrorMessage } = useLocalizedError();
  const { isOnboarding, navigateToLogin } = useAuthFlow();

  const {
    mutateAsync: resetPassword,
    isPending,
    error,
    isSuccess,
  } = useResetPassword();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(createResetPasswordSchema(t)),
    defaultValues: { code: '', newPassword: '', confirmPassword: '' },
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      navigateToLogin();
    }
  }, [isSuccess, navigateToLogin]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!email) return;

    try {
      await resetPassword({
        email,
        code: data.code,
        newPassword: data.newPassword,
      });
    } catch {
      // error state handled by mutation
    }
  };

  return (
    <>
      <NavigationHeader
        showBackButton={!isOnboarding}
        rightComponent={
          isOnboarding ? (
            <IconButton
              icon="close"
              color={COLORS.white}
              onPress={() => router.dismiss()}
            />
          ) : undefined
        }
      />
      <ContentContainer>
        <KeyboardAvoidingView
          className="flex-1 pt-8"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerClassName="px-4">
            <View className="mt-6">
              <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
                {t('auth.resetPassword.title')}
              </Text>
              <Text className="mx-6 text-center font-plus-jakarta text-base text-text-active">
                {t('auth.resetPassword.description', { email })}
              </Text>
            </View>

            <View className="mt-6 gap-4">
              <FormInput
                control={control}
                name="code"
                label={t('auth.resetPassword.code')}
                type="number"
                maxLength={6}
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="newPassword"
                label={t('auth.resetPassword.newPassword')}
                type="password"
                returnKeyType="next"
              />

              <FormInput
                control={control}
                name="confirmPassword"
                label={t('auth.resetPassword.confirmPassword')}
                type="password"
                returnKeyType="done"
                onSubmitEditing={handleSubmit(onSubmit)}
              />

              {error && (
                <Text className="text-center font-plus-jakarta text-sm text-red-500">
                  {getErrorMessage(error)}
                </Text>
              )}

              <Button
                title={
                  isPending
                    ? t('auth.resetPassword.resetting')
                    : t('auth.resetPassword.submit')
                }
                onPress={handleSubmit(onSubmit)}
                disabled={!isValid || isPending}
                loading={isPending}
                userType={selectedUserType}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
