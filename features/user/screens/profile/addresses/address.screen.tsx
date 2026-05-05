import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { Button } from '@/components/button';
import { useStore } from '@/store/useStore';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useAddresses } from '@/features/user/hooks/useAddresses';
import { useDeleteAddress } from '@/features/user/hooks/useDeleteAddress';
import { useSetDefaultAddress } from '@/features/user/hooks/useSetDefaultAddress';
import { AddressCard } from '@/features/user/components/address-card';
import { AddressEmptyState } from '@/features/user/components/address-empty-state';
import { Address } from '@/features/user/types/address';
import {
  navigateToAddAddress,
  navigateToEditAddress,
} from '@/features/user/routes';
import { COLORS } from '@/consts/colors';

const MAX_ADDRESSES = 10;

const AddressScreen = () => {
  const { user } = useStore();
  const { t } = useTranslation();
  const { getErrorMessage } = useLocalizedError();
  const { showSuccess, showError } = useSnackbar();

  const { data: addresses, isLoading, error } = useAddresses();
  const { mutate: deleteAddress } = useDeleteAddress();
  const { mutate: setDefault } = useSetDefaultAddress();

  const handleEdit = (address: Address) => {
    navigateToEditAddress(address.id);
  };

  const handleDelete = (id: string) => {
    deleteAddress(id, {
      onSuccess: () => {
        showSuccess(t('profile.address.deleteSuccess'));
      },
      onError: (mutationError) => {
        showError(getErrorMessage(mutationError));
      },
    });
  };

  const handleSetDefault = (id: string) => {
    setDefault(id, {
      onSuccess: () => {
        showSuccess(t('profile.address.setDefaultSuccess'));
      },
      onError: (mutationError) => {
        showError(getErrorMessage(mutationError));
      },
    });
  };

  const addressCount = addresses?.length ?? 0;
  const isMaxReached = addressCount >= MAX_ADDRESSES;

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <ContentContainer edges={['left', 'right']}>
        <View className="flex-1">
          <View className="px-4 pt-4">
            <Text className="font-plus-jakarta-bold text-2xl text-gray-900">
              {t('profile.address.title2')}
            </Text>
            <Text className="mt-4 font-plus-jakarta text-base text-gray-800">
              {t('profile.address.subTitle2')}
            </Text>
          </View>

          {isLoading ? (
            <View className="flex-1 items-center justify-center py-16">
              <ActivityIndicator size="small" color={COLORS.primary} />
            </View>
          ) : error ? (
            <View className="flex-1 items-center justify-center px-8 py-16">
              <Text className="text-center font-plus-jakarta text-sm text-red-500">
                {getErrorMessage(error)}
              </Text>
            </View>
          ) : !addresses || addresses.length === 0 ? (
            <AddressEmptyState />
          ) : (
            <View className="mt-6 flex-1 pb-2">
              <FlatList
                data={addresses}
                renderItem={({ item }) => (
                  <AddressCard
                    address={item}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSetDefault={handleSetDefault}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        </View>

        <View className="px-4 pb-4">
          <Button
            title={
              isMaxReached
                ? t('profile.address.maxAddresses')
                : t('profile.address.addNew')
            }
            onPress={navigateToAddAddress}
            userType={user?.role}
            variant="contained"
            disabled={isMaxReached}
          />
        </View>
      </ContentContainer>
    </>
  );
};

export default AddressScreen;
