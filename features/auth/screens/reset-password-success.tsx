import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { IconButton } from '@/components/icon-button';
import { COLORS } from '@/consts/colors';
import { Button } from '@/components/button';
import { useStore } from '@/store/useStore';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';

export default function ResetPasswordSuccessScreen() {
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const { isOnboarding, exitForgotPasswordFlow } = useAuthFlow();

  return (
    <>
      <NavigationHeader
        showBackButton={false}
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
        <View className="flex-1 items-center justify-center px-6">
          <View className="mb-6 items-center justify-center">
            <MaterialCommunityIcons
              name="check-circle"
              size={96}
              color={COLORS.success}
            />
          </View>
          <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
            {t('auth.resetPasswordSuccess.title')}
          </Text>
          <Text className="text-center font-plus-jakarta text-base text-text-active">
            {t('auth.resetPasswordSuccess.description')}
          </Text>
        </View>

        <View className="px-4 pb-4">
          <Button
            title={t('auth.resetPasswordSuccess.goToLogin')}
            onPress={exitForgotPasswordFlow}
            userType={selectedUserType}
          />
        </View>
      </ContentContainer>
    </>
  );
}
