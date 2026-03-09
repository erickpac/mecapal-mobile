import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { IconButton } from '@/components/icon-button';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useStore } from '@/store/useStore';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useVerifyEmail } from '@/features/auth/hooks/useVerifyEmail';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';

export default function EmailVerificationScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const { getErrorMessage } = useLocalizedError();
  const { isOnboarding, navigateToLogin } = useAuthFlow();

  const [code, setCode] = useState('');

  const {
    mutateAsync: verifyEmail,
    isPending: isVerifying,
    error: verifyError,
    isSuccess,
  } = useVerifyEmail();

  useEffect(() => {
    if (isSuccess) {
      navigateToLogin();
    }
  }, [isSuccess, navigateToLogin]);

  const handleVerify = async () => {
    if (code.length !== 6 || !email) return;

    try {
      await verifyEmail({ email, code });
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
      <ContentContainer className="flex-1 px-4">
        <KeyboardAvoidingView
          className="flex-1 gap-6 pt-8"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View className="mt-6">
            <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t('auth.verifyEmail.title')}
            </Text>
            <Text className="mx-6 text-center font-plus-jakarta text-base text-text-active">
              {t('auth.verifyEmail.description', { email })}
            </Text>
          </View>

          <View className="gap-4">
            <Input
              label={t('auth.verifyEmail.codeLabel')}
              type="text"
              value={code}
              onChangeText={setCode}
              placeholder={t('auth.verifyEmail.codePlaceholder')}
              keyboardType="number-pad"
              maxLength={6}
              returnKeyType="done"
              onSubmitEditing={handleVerify}
            />

            {verifyError && (
              <Text className="text-center font-plus-jakarta text-sm text-red-500">
                {getErrorMessage(verifyError)}
              </Text>
            )}

            <Button
              title={
                isVerifying
                  ? t('auth.verifyEmail.verifying')
                  : t('auth.verifyEmail.submit')
              }
              onPress={handleVerify}
              disabled={code.length !== 6 || isVerifying}
              loading={isVerifying}
              userType={selectedUserType}
            />
          </View>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
