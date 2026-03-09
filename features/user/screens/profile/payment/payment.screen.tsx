import { View, Text } from 'react-native';
import React from 'react';
import { Input } from '@/components/input';
import { NavigationHeader } from '@/components/navigation-header';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { Button } from '@/components/button';
import addresses from '@/app/(app)/profile/addresses';
import { useStore } from '@/store/useStore';

const mockCreditData = [
  {
    id: 1,
    name: 'Jhon Doe',
    number: '1234 1234 1234 1234',
    expirationDate: '12/24',
    cvv: '123',
    brand: 'Visa',
  },
  {
    id: 2,
    name: 'Kimbler Tim',
    number: '1234 1234 1234 1234',
    expirationDate: '12/24',
    cvv: '123',
    brand: 'Mastercard',
  },
  {
    id: 3,
    name: 'Algebra de Bald0r',
    number: '1234 1234 1234 1234',
    expirationDate: '12/24',
    cvv: '123',
    brand: 'American Express',
  },
];

const PaymentsScreen = () => {
  const { user } = useStore();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="px-8 py-4">
          <Text className="font-plus-jakarta-bold text-2xl font-bold text-gray-800">
            {'Mis metodos de Pago'}
          </Text>
        </View>
        <View className="mt-4 space-y-4 px-6 py-4">
          {mockCreditData.map((credit) => (
            <View key={credit.id} className="flex-row items-center">
              <View className="h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                {credit.brand === 'Visa' && (
                  <MaterialCommunityIcons name="credit-card" size={20} color={COLORS.white} />
                )}
                {credit.brand === 'Mastercard' && (
                  <MaterialCommunityIcons name="credit-card-check" size={20} color={COLORS.white} />
                )}
                {credit.brand === 'American Express' && (
                  <MaterialCommunityIcons name="cash" size={20} color={COLORS.white} />
                )}
              </View>
              <View className="flex-1">
                <Input
                  label=""
                  value={'1234...XXXX...1234'}
                  mode="flat"
                  disabled={true}
                  activeUnderlineColor="black"
                />
              </View>
            </View>
          ))}
        </View>
        <View className="px-6 py-6 pt-4">
          <Button
            title="Agregar Nueva Dirección"
            onPress={() => {}}
            userType={user?.role}
            variant="text"
            disabled={addresses.length >= 3}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default PaymentsScreen;
