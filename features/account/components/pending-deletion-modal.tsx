import { Modal, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '@/components/button';
import { COLORS } from '@/consts/colors';
import { useStore } from '@/store/useStore';
import { useCancelAccountDeletion } from '@/features/account/hooks/useCancelAccountDeletion';
import { formatDeletionDate } from '@/features/account/utils/format-deletion-date';

/**
 * Global modal shown when any request returns 403 ACCOUNT_PENDING_DELETION.
 * Mounted once at the root (_layout.tsx).
 */
export const PendingDeletionModal = () => {
  const { t } = useTranslation();
  const {
    pendingDeletionModal,
    hidePendingDeletionModal,
    setDeletionScheduledFor,
  } = useStore();
  const { mutate: cancelDeletion, isPending } = useCancelAccountDeletion();

  const { visible, scheduledFor } = pendingDeletionModal;

  const handleCancelDeletion = () => {
    cancelDeletion(undefined, {
      onSuccess: () => {
        setDeletionScheduledFor(null);
        hidePendingDeletionModal();
      },
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={hidePendingDeletionModal}
    >
      <View className="flex-1 items-center justify-center bg-black/50 px-6">
        <View className="w-full rounded-2xl bg-white p-6">
          <View className="items-center">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-amber-100">
              <MaterialCommunityIcons
                name="alert-outline"
                size={32}
                color={COLORS.warning}
              />
            </View>
            <Text className="mt-4 text-center font-plus-jakarta-bold text-lg text-gray-900">
              {t('account.deletion.pendingModal.title')}
            </Text>
            <Text className="mt-2 text-center font-plus-jakarta text-sm text-gray-700">
              {t('account.deletion.pendingModal.message', {
                date: scheduledFor ? formatDeletionDate(scheduledFor) : '',
              })}
            </Text>
          </View>

          <View className="mt-6 gap-2">
            <Button
              title={
                isPending
                  ? t('account.deletion.banner.cancelling')
                  : t('account.deletion.pendingModal.cancelDeletion')
              }
              onPress={handleCancelDeletion}
              disabled={isPending}
              loading={isPending}
              variant="contained"
            />
            <Button
              title={t('common.close')}
              variant="text"
              onPress={hidePendingDeletionModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
