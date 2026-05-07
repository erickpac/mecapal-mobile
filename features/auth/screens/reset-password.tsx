import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
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
import { useForgotPassword } from '@/features/auth/hooks/useForgotPassword';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createResetPasswordSchema,
  ResetPasswordFormData,
} from '@/features/auth/schemas/reset-password';

const RESEND_COOLDOWN_SECONDS = 45;

export default function ResetPasswordScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const { getErrorMessage } = useLocalizedError();
  const { isOnboarding, navigateToResetPasswordSuccess } = useAuthFlow();

  const {
    mutate: resetPassword,
    isPending,
    error,
    isSuccess,
  } = useResetPassword();

  const { mutate: resendForgotPassword, isPending: isResending } =
    useForgotPassword();

  const [secondsLeft, setSecondsLeft] = useState<number>(
    RESEND_COOLDOWN_SECONDS,
  );
  const [resendInfo, setResendInfo] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCooldown = () => {
    setSecondsLeft(RESEND_COOLDOWN_SECONDS);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startCooldown();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
      navigateToResetPasswordSuccess();
    }
  }, [isSuccess, navigateToResetPasswordSuccess]);

  const onSubmit = (data: ResetPasswordFormData) => {
    if (!email) return;
    resetPassword({
      email,
      code: data.code,
      newPassword: data.newPassword,
    });
  };

  const handleResend = () => {
    if (!email || secondsLeft > 0 || isResending) return;
    resendForgotPassword(email, {
      onSuccess: () => {
        setResendInfo(t('auth.resetPassword.codeResent'));
        startCooldown();
      },
    });
  };

  const canResend = secondsLeft === 0 && !isResending;

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
            <View className="mt-2">
              <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
                {t('auth.resetPassword.title')}
              </Text>
              <Text className="mx-4 text-center font-plus-jakarta text-base text-text-active">
                {t('auth.resetPassword.description', { email })}
              </Text>
            </View>

            <View className="mt-8 gap-4">
              <FormInput
                control={control}
                name="code"
                label={t('auth.resetPassword.code')}
                type="number"
                maxLength={6}
                returnKeyType="next"
                placeholder={t('auth.resetPassword.codePlaceholder')}
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

              <TouchableOpacity
                onPress={handleResend}
                disabled={!canResend}
                activeOpacity={0.7}
                className="items-center py-2"
              >
                <Text
                  className={`font-plus-jakarta text-sm ${
                    canResend ? 'text-primary-500' : 'text-gray-500'
                  }`}
                >
                  {canResend
                    ? t('auth.resetPassword.resendCode')
                    : t('auth.resetPassword.resendCodeIn', {
                        seconds: secondsLeft,
                      })}
                </Text>
              </TouchableOpacity>

              {resendInfo && !error && (
                <Text className="text-center font-plus-jakarta text-sm text-success-500">
                  {resendInfo}
                </Text>
              )}

              {error && (
                <Text className="text-center font-plus-jakarta text-sm text-red-500">
                  {getErrorMessage(error)}
                </Text>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="px-4 pb-4">
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
      </ContentContainer>
    </>
  );
}
