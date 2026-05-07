import { router } from 'expo-router';
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
import { ForgetPasswordImageClient } from '@/components/svg';
import { useStore } from '@/store/useStore';
import { IconButton } from '@/components/icon-button';
import { COLORS } from '@/consts/colors';
import { Button } from '@/components/button';
import { FormInput } from '@/components/form-input';
import { useForgotPassword } from '@/features/auth/hooks/useForgotPassword';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createForgotPasswordSchema,
  ForgotPasswordFormData,
} from '@/features/auth/schemas/forgot-password';

export default function ForgotPasswordScreen() {
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const { mutate: forgotPassword, isPending, error } = useForgotPassword();
  const { getErrorMessage } = useLocalizedError();
  const { isOnboarding, navigateToResetPassword } = useAuthFlow();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(createForgotPasswordSchema(t)),
    defaultValues: { email: '' },
    mode: 'all',
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    forgotPassword(data.email, {
      onSuccess: () => navigateToResetPassword(data.email),
    });
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
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerClassName="px-4 pt-6 pb-6"
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            <View className="mb-6 mt-2 items-center">
              <View className="aspect-[287/206] w-64 max-w-full">
                <ForgetPasswordImageClient width="100%" height="100%" />
              </View>
            </View>

            <View>
              <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
                {t('auth.forgotPassword.title2')}
              </Text>
              <Text className="mx-6 text-center font-plus-jakarta text-base text-text-active">
                {t('auth.forgotPassword.description')}
              </Text>
            </View>

            <View className="mt-8 gap-4">
              <FormInput
                control={control}
                name="email"
                label={t('auth.register.email')}
                type="email"
                returnKeyType="done"
                onSubmitEditing={handleSubmit(onSubmit)}
              />

              {error && (
                <Text className="text-center font-plus-jakarta text-sm text-red-500">
                  {getErrorMessage(error)}
                </Text>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="gap-2 px-4 pb-4">
          <Button
            title={
              isPending
                ? t('auth.forgotPassword.sending')
                : t('auth.forgotPassword.submit')
            }
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid || isPending}
            loading={isPending}
            userType={selectedUserType}
          />
          <Button
            title={t('auth.forgotPassword.backToLogin')}
            variant="text"
            onPress={() => router.dismiss()}
            userType={selectedUserType}
          />
        </View>
      </ContentContainer>
    </>
  );
}
