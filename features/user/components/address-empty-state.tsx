import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { EmptyAddress } from '@/components/svg';

export const AddressEmptyState = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="aspect-square w-56">
        <EmptyAddress width="100%" height="100%" />
      </View>
      <Text className="mt-4 text-center font-plus-jakarta-bold text-xl text-gray-900">
        {t('profile.address.noAddresses')}
      </Text>
      <Text className="mx-6 mt-3 text-center font-plus-jakarta text-base text-gray-600">
        {t('profile.address.noAddressesSubtitle')}
      </Text>
    </View>
  );
};
