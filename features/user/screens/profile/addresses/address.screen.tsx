import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button } from '@/components/button';
// import TabComponent from '@/components/tab-component';
import { NavigationHeader } from '@/components/navigation-header';
import { useStore } from '@/store/useStore';
import { COLORS } from '@/consts/colors';
import { MaterialSymbol } from '@/components/material-symbol';
import { useTranslation } from 'react-i18next';
import { navigateToAddAddress } from '@/features/user/routes';

type Address = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
};

const AddressScreen = () => {
  const { user } = useStore();
  const { t } = useTranslation();

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'Casa',
      street: '13a Calle 12-12, zona 10, Apto 1234',
      city: 'Guatemala City',
      state: 'Guatemala',
      zipCode: '01001',
      country: 'Guatemala',
      isDefault: true,
    },
    {
      id: '2',
      name: 'Trabajo',
      street: '13a Calle 12-12, zona 10, Apto 1234',
      city: 'Guatemala City',
      state: 'Guatemala',
      zipCode: '01001',
      country: 'Guatemala',
      isDefault: false,
    },
    {
      id: '3',
      name: 'Trabajo',
      street: '13a Calle 12-12, zona 10, Apto 1234',
      city: 'Guatemala City',
      state: 'Guatemala',
      zipCode: '01001',
      country: 'Guatemala',
      isDefault: false,
    },
  ]);

  const renderListAddressItem = (address: Address) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigateToAddAddress();
        }}
        className="border-b border-t border-gray-100 bg-white p-4 px-6"
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <View className="flex-row items-center gap-2">
              <Text className="font-plus-jakarta-bold text-base font-bold leading-tight text-gray-900">
                {address.name} {address.isDefault && '(Predeterminada)'}
              </Text>
            </View>
            <Text className="font-plus-jakarta-medium text-base font-medium leading-tight text-gray-900">
              {address.street}
            </Text>
            <Text className="font-plus-jakarta-medium text-base font-medium leading-tight text-gray-900">
              {address.city}, {address.state}, {address.zipCode},{' '}
              {address.country}
            </Text>
          </View>
          <View className="justify-center">
            <MaterialSymbol
              name="chevron_right"
              size={20}
              color={COLORS.gray[400]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <View className="flex-1 bg-white">
        <View className="flex-1">
          <View className="px-6 pt-6">
            <Text className="font-plus-jakarta-bold text-2xl font-bold text-gray-900">
              {t('profile.address.title2')}
            </Text>
            <Text className="mt-4 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.address.subTitle2')}
            </Text>
          </View>

          <View className="mt-6">
            {/*{addresses.length > 0 && (
              <TabComponent
                tabs={[
                  {
                    title: t('profile.address.myAddresses'),
                    component: <></>,
                    activeColor: COLORS.primary,
                  },
                ]}
              />
            )}*/}
          </View>
          <View className="space-y-4 pb-2">
            <FlatList
              data={addresses}
              renderItem={({ item }) => renderListAddressItem(item)}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
        <View className="px-6 py-6 pt-4">
          <Button
            title={t('profile.address.addNew')}
            onPress={() => navigateToAddAddress()}
            userType={user?.role}
            variant="contained"
            disabled={addresses.length >= 3}
          />
        </View>
      </View>
    </>
  );
};

export default AddressScreen;
