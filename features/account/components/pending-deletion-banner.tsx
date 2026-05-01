import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { useStore } from '@/store/useStore';
import { useCancelAccountDeletion } from '@/features/account/hooks/useCancelAccountDeletion';
import { formatDeletionDate } from '@/features/account/utils/format-deletion-date';

export const PendingDeletionBanner = () => {
  const { t } = useTranslation();
  const { user, setDeletionScheduledFor } = useStore();
  const { mutate: cancelDeletion, isPending } = useCancelAccountDeletion();

  if (!user?.deletionScheduledFor) return null;

  const handleCancel = () => {
    cancelDeletion(undefined, {
      onSuccess: () => setDeletionScheduledFor(null),
    });
  };

  return (
    <View className="flex-row items-start gap-2 border-b border-amber-200 bg-amber-50 px-4 py-3">
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={20}
        color={COLORS.warning}
      />
      <View className="flex-1">
        <Text className="font-plus-jakarta-semibold text-sm text-amber-900">
          {t('account.deletion.banner.text', {
            date: formatDeletionDate(user.deletionScheduledFor),
          })}
        </Text>
        <TouchableOpacity
          onPress={handleCancel}
          disabled={isPending}
          className="mt-1 self-start"
        >
          <Text className="font-plus-jakarta-semibold text-sm text-amber-900 underline">
            {isPending
              ? t('account.deletion.banner.cancelling')
              : t('account.deletion.banner.cancel')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
