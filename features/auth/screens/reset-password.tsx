import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { IconButton } from '@/components/icon-button';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useStore } from '@/store/useStore';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useResetPassword } from '@/features/auth/hooks/useResetPassword';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';

export default function ResetPasswordScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const { getErrorMessage } = useLocalizedError();
  const { isOnboarding, navigateToLogin } = useAuthFlow();

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  const {
    mutateAsync: resetPassword,
    isPending,
    error,
    isSuccess,
  } = useResetPassword();

  useEffect(() => {
    if (isSuccess) {
      navigateToLogin();
    }
  }, [isSuccess, navigateToLogin]);

  const handleSubmit = async () => {
    setValidationError('');

    if (newPassword !== confirmPassword) {
      setValidationError(t('auth.resetPassword.passwordsMismatch'));
      return;
    }

    if (code.length !== 6 || !email) return;

    try {
      await resetPassword({ email, code, newPassword });
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
              color="text-white"
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
              <Input
                label={t('auth.resetPassword.code')}
                type="text"
                value={code}
                onChangeText={setCode}
                placeholder={t('auth.resetPassword.codePlaceholder')}
                keyboardType="number-pad"
                maxLength={6}
                returnKeyType="next"
              />

              <Input
                label={t('auth.resetPassword.newPassword')}
                type="password"
                value={newPassword}
                onChangeText={setNewPassword}
                returnKeyType="next"
              />

              <Input
                label={t('auth.resetPassword.confirmPassword')}
                type="password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />

              {validationError ? (
                <Text className="text-center font-plus-jakarta text-sm text-red-500">
                  {validationError}
                </Text>
              ) : null}

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
                onPress={handleSubmit}
                disabled={code.length !== 6 || !newPassword || !confirmPassword || isPending}
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
