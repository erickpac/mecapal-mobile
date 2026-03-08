import { router, usePathname } from 'expo-router';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { Input } from '@/components/input';
import { ContentContainer } from '@/components/content-container';
import { ForgetPasswordImageClient } from '@/components/svg';
import { useStore } from '@/store/useStore';
import { IconButton } from '@/components/icon-button';
import { Button } from '@/components/button';
import { useState } from 'react';
import { useRecoverPassword } from '@/features/auth/hooks/useRecoverPassword';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { navigateToForgotPasswordSuccessMessage } from '../routes';

export default function ForgotPasswordScreen() {
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const {
    mutateAsync: recoverPassword,
    isPending,
    error,
  } = useRecoverPassword();
  const { getErrorMessage } = useLocalizedError();

  const isModalMode = pathname.includes('/onboarding/');

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleValidateEmail = (value: string) => {
    setEmailError('');

    if (!value.trim()) {
      setEmailError(t('errors.auth.register.emailRequired'));
      return false;
    } else if (!validateEmail(value)) {
      setEmailError(t('auth.errors.invalidEmail'));
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!handleValidateEmail(email)) return;

    try {
      await recoverPassword(email);
      navigateToForgotPasswordSuccessMessage();
    } catch {
      // error state is handled by the mutation
    }
  };

  return (
    <>
      <NavigationHeader
        showBackButton={!isModalMode}
        rightComponent={
          isModalMode ? (
            <IconButton
              icon="close"
              color="text-white"
              onPress={() => router.dismiss()}
            />
          ) : undefined
        }
      />
      <ContentContainer className="flex-1 px-4">
        <KeyboardAvoidingView
          className="flex-1 gap-6 pt-8"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View className="mb-6 mt-2 items-center">
            <View className="aspect-[287/206] w-64 max-w-full">
              <ForgetPasswordImageClient />
            </View>
          </View>
          <View className="mt-6">
            <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t('auth.forgotPassword.title2')}
            </Text>
            <Text className="mx-6 text-center font-plus-jakarta text-base text-text-active">
              {t('auth.forgotPassword.description')}
            </Text>
          </View>
          <View className="gap-4">
            <Input
              label={t('auth.register.email')}
              type="email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                handleValidateEmail(text);
              }}
              error={emailError}
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {error && (
              <Text className="text-center font-plus-jakarta text-sm text-red-500">
                {getErrorMessage(error)}
              </Text>
            )}

            <Button
              title={t('auth.forgotPassword.submit')}
              onPress={handleSubmit}
              disabled={emailError.length > 0 || email.length <= 0 || isPending}
              loading={isPending}
              userType={selectedUserType}
            />

            <Button
              title={`${t('auth.forgotPassword.backToLogin')}`}
              variant="text"
              className="mt-2"
              onPress={() => {
                router.dismiss();
              }}
              userType={selectedUserType}
            />
          </View>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
