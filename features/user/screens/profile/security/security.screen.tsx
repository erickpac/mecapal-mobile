import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Button } from '@/components/button';
import React, { useState } from 'react';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { useStore } from '@/store/useStore';
import { Input } from '@/components/input';
import { useTranslation } from 'react-i18next';
import { useChangePassword } from '@/features/auth/hooks/useChangePassword';
import { useLocalizedError } from '@/hooks/useLocalizedError';

const SecurityScreen = () => {
  const { t } = useTranslation();
  const { user } = useStore();
  const {
    mutateAsync: changePassword,
    isPending,
    error,
    isSuccess,
  } = useChangePassword();
  const { getErrorMessage } = useLocalizedError();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  if (!user) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-600">{t('auth.changePassword.noUser')}</Text>
      </View>
    );
  }

  const userRole = user.role || 'CLIENT';

  const handlePasswordChange = async () => {
    setValidationError('');

    if (newPassword !== confirmPassword) {
      setValidationError(t('auth.changePassword.passwordsMismatch'));
      return;
    }

    if (newPassword.length < 8) {
      setValidationError(t('auth.changePassword.passwordTooShort'));
      return;
    }

    try {
      await changePassword({
        oldPassword,
        newPassword,
      });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      // error state is handled by the mutation
    }
  };

  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ContentContainer>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerClassName="px-4" bounces={false}>
            <View className="pt-4">
              <Text className="font-plus-jakarta-bold text-2xl font-bold text-gray-800">
                {t('profile.security.title')}
              </Text>
              <Text className="mt-4 font-plus-jakarta text-base font-normal text-gray-800">
                {t('profile.security.subtitle')}
              </Text>
            </View>

            <View className="pb-4">
              <Text className="my-4 font-plus-jakarta text-base font-normal text-gray-800">
                {t('auth.changePassword.passwordHint')}
              </Text>

              <View className="space-y-4 rounded-lg">
                <Input
                  label={t('auth.changePassword.oldPassword')}
                  value={oldPassword}
                  type="password"
                  onChangeText={setOldPassword}
                />

                <Input
                  label={t('auth.changePassword.newPassword')}
                  value={newPassword}
                  type="password"
                  onChangeText={setNewPassword}
                />

                <Input
                  label={t('auth.changePassword.confirmPassword')}
                  value={confirmPassword}
                  type="password"
                  onChangeText={setConfirmPassword}
                />
              </View>

              {validationError ? (
                <Text className="mt-2 font-plus-jakarta text-sm text-red-500">
                  {validationError}
                </Text>
              ) : null}

              {error && (
                <Text className="mt-2 font-plus-jakarta text-sm text-red-500">
                  {getErrorMessage(error)}
                </Text>
              )}

              {isSuccess && (
                <Text className="mt-2 font-plus-jakarta text-sm text-green-600">
                  {t('auth.changePassword.success')}
                </Text>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="px-4">
          <Button
            title={
              isPending
                ? t('auth.changePassword.updating')
                : t('auth.changePassword.submit')
            }
            onPress={handlePasswordChange}
            disabled={
              isPending || !oldPassword || !newPassword || !confirmPassword
            }
            userType={userRole}
          />
        </View>
      </ContentContainer>
    </>
  );
};

export default SecurityScreen;
