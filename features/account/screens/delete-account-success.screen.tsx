import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { Button } from '@/components/button';
import { COLORS } from '@/consts/colors';
import { useStore } from '@/store/useStore';
import { replaceRoute } from '@/features/shared/routes';
import { USER_ROUTES } from '@/features/user/routes';
import { formatDeletionDate } from '@/features/account/utils/format-deletion-date';

export default function DeleteAccountSuccessScreen() {
  const { t } = useTranslation();
  const { user, setDeletionScheduledFor } = useStore();
  const params = useLocalSearchParams<{ scheduledFor?: string }>();
  const scheduledFor = params.scheduledFor ?? user?.deletionScheduledFor ?? '';

  useEffect(() => {
    if (scheduledFor && user?.deletionScheduledFor !== scheduledFor) {
      setDeletionScheduledFor(scheduledFor);
    }
  }, [scheduledFor, setDeletionScheduledFor, user?.deletionScheduledFor]);

  const formatted = scheduledFor ? formatDeletionDate(scheduledFor) : '';

  return (
    <>
      <NavigationHeader title="" showBackButton={false} borderBottom={false} />
      <ContentContainer>
        <View className="flex-1 items-center justify-center px-6">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-amber-100">
            <MaterialCommunityIcons
              name="clock-alert-outline"
              size={40}
              color={COLORS.warning}
            />
          </View>
          <Text className="mt-6 text-center font-plus-jakarta-bold text-2xl text-gray-900">
            {t('account.deletion.success.title')}
          </Text>
          <Text className="mt-4 text-center font-plus-jakarta text-base text-gray-700">
            {t('account.deletion.success.message', { date: formatted })}
          </Text>
          <Text className="mt-2 text-center font-plus-jakarta text-sm text-gray-600">
            {t('account.deletion.success.cancelHint')}
          </Text>
        </View>

        <View className="px-4 pb-4">
          <Button
            title={t('account.deletion.success.goHome')}
            onPress={() => replaceRoute(USER_ROUTES.HOME)}
            userType={user?.role}
          />
        </View>
      </ContentContainer>
    </>
  );
}
