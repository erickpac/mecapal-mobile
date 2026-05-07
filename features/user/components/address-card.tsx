import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/consts/colors';
import { Address } from '@/features/user/types/address';

interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export const AddressCard = ({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressCardProps) => {
  const { t } = useTranslation();

  const handleLongPress = () => {
    const buttons: {
      text: string;
      style?: 'cancel' | 'default' | 'destructive';
      onPress?: () => void;
    }[] = [{ text: t('common.cancel'), style: 'cancel' }];

    if (!address.isDefault) {
      buttons.push({
        text: t('profile.address.setDefault'),
        onPress: () => onSetDefault(address.id),
      });
    }

    buttons.push({
      text: t('profile.address.deleteAddress'),
      style: 'destructive',
      onPress: confirmDelete,
    });

    Alert.alert(address.alias, undefined, buttons);
  };

  const confirmDelete = () => {
    Alert.alert(
      t('profile.address.deleteConfirmTitle'),
      t('profile.address.deleteConfirmMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: () => onDelete(address.id),
        },
      ],
    );
  };

  const defaultLabel = address.isDefault
    ? ` (${t('profile.address.default')})`
    : '';

  const postalCode = address.zone?.postalCode;
  const streetLine = postalCode
    ? `${address.street}, ${postalCode}`
    : address.street;

  const localityLine = [address.municipality?.name, address.state?.name]
    .filter(Boolean)
    .join(', ');

  return (
    <TouchableOpacity
      onPress={() => onEdit(address)}
      onLongPress={handleLongPress}
      className="border-b border-t border-gray-100 bg-white p-4 px-4"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1 pr-4">
          <Text className="font-plus-jakarta-bold text-base leading-tight text-gray-900">
            {address.alias}
            {defaultLabel}
          </Text>
          <Text className="mt-0.5 font-plus-jakarta-medium text-base leading-tight text-gray-900">
            {streetLine}
          </Text>
          {localityLine ? (
            <Text className="font-plus-jakarta-medium text-base leading-tight text-gray-900">
              {localityLine}
            </Text>
          ) : null}
        </View>
        <View className="justify-center">
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={COLORS.lightGray[700]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
