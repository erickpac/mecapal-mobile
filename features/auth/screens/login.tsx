import { useLogin } from '@/features/auth/hooks/useLogin';
import { useStore } from '@/store/useStore';
import { router, usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { navigateToForgotPassword } from '../routes';
import {
  navigateToForgotPassword as navigateToOnboardingForgotPassword,
  ONBOARDING_ROUTES,
} from '@/features/onboarding/routes';
import { AUTH_ROUTES } from '@/features/auth/routes';
import { replaceRoute } from '@/features/shared/routes';
import { USER_ROUTES } from '@/features/user/routes';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { IconButton } from '@/components/icon-button';
import { Button } from '@/components/button';
import { LoginUser, LoginTransporter } from '@/components/svg';
import { Input } from '@/components/input';
import { useLoginValidation } from '@/features/auth/hooks/useLoginValidation';
import { UserRole } from '@/features/auth/types/user';
import { ActionLink } from '@/components/action-link';

export default function LoginScreen({
  showBackButton = true,
}: {
  showBackButton?: boolean;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login, isPending, error, isSuccess } = useLogin();
  const { setHasCompletedOnboarding, selectedUserType } = useStore();
  const { t } = useTranslation();
  const { getErrorMessage } = useLocalizedError();
  const pathname = usePathname();
  const isOnboardingFlow = pathname.includes('/onboarding/');
  const { emailError, passwordError, isValid } = useLoginValidation(
    email,
    password,
  );

  const handleLogin = () => {
    if (!isValid) return;
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      setHasCompletedOnboarding(true);
      replaceRoute(USER_ROUTES.HOME);
    }
  }, [isSuccess, setHasCompletedOnboarding]);

  return (
    <>
      <NavigationHeader
        showBackButton={!showBackButton ? showBackButton : !isOnboardingFlow}
        rightComponent={
          isOnboardingFlow ? (
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
          className="flex-1 pt-8"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView>
            <View className="mb-6 mt-2 items-center">
              <View className="aspect-[287/206] w-64 max-w-full">
                {selectedUserType === UserRole.CLIENT ? (
                  <LoginUser width="100%" height="100%" />
                ) : (
                  <LoginTransporter width="100%" height="100%" />
                )}
              </View>
            </View>
            <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t('auth.login.title')}
            </Text>
            <View className="mb-2">
              <Input
                label={t('auth.login.email')}
                type="email"
                value={email}
                onChangeText={setEmail}
                error={emailError}
                returnKeyType="next"
              />
              <View>
                <Input
                  label={t('auth.login.password')}
                  type="password"
                  value={password}
                  onChangeText={setPassword}
                  error={passwordError}
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                />
                <ActionLink
                  className="mb-4 mt-1 text-right text-[13px] text-black"
                  onPress={() => {
                    if (isOnboardingFlow) {
                      navigateToOnboardingForgotPassword();
                    } else {
                      navigateToForgotPassword();
                    }
                  }}
                  title={t('auth.login.forgotPassword')}
                />
              </View>
            </View>

            {error && (
              <Text className="mb-4 text-center font-plus-jakarta text-sm text-red-500">
                {getErrorMessage(error)}
              </Text>
            )}

            <Button
              title={t('auth.login.login')}
              onPress={handleLogin}
              disabled={!isValid || isPending}
              loading={isPending}
              userType={selectedUserType}
            />

            <Button
              title={`${t('auth.login.noAccount')}`}
              variant="text"
              className="mt-2"
              onPress={() => {
                if (isOnboardingFlow) {
                  replaceRoute(ONBOARDING_ROUTES.ONBOARDING_REGISTER);
                } else {
                  replaceRoute(AUTH_ROUTES.AUTH_REGISTER);
                }
              }}
              userType={selectedUserType}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
