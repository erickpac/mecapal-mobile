import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@/components/input'
import { NavigationHeader } from '@/components/navigation-header'
import { ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { MaterialSymbol } from '@/components/material-symbol'
import { Button } from "@/components/button";
import addresses from '@/app/(app)/profile/addresses'
import { useStore } from "@/store/useStore";

type Props = {}


const mockCreditData = [{
  id: 1,
  name: "Jhon Doe",
  number: "1234 1234 1234 1234",
  expirationDate: "12/24",
  cvv: "123",
  brand: "Visa",
},
{
  id: 2,
  name: "Kimbler Tim",
  number: "1234 1234 1234 1234",
  expirationDate: "12/24",
  cvv: "123",
  brand: "Mastercard",
},
{
  id: 3,
  name: "Algebra de Bald0r",
  number: "1234 1234 1234 1234",
  expirationDate: "12/24",
  cvv: "123",
  brand: "American Express",
}

]

const PaymentsScreen = (props: Props) => {
  const { user } = useStore();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="px-8 py-4">
          <Text className="text-2xl font-plus-jakarta-bold font-bold text-gray-800">{"Mis metodos de Pago"}</Text>
        </View>
        <View className="mt-4 px-6 py-4 space-y-4">
          {mockCreditData.map((credit) => (
            <View key={credit.id} className="flex-row items-center">
              <View className="bg-blue-600 rounded-full w-8 h-8 items-center justify-center">
                {credit.brand === 'Visa' && (
                  <MaterialSymbol name="credit_card" size={20} color="white" />
                )}
                {credit.brand === 'Mastercard' && (
                  <MaterialSymbol name="credit_score" size={20} color="white" />
                )}
                {credit.brand === 'American Express' && (
                  <MaterialSymbol name="payments" size={20} color="white" />
                )}
              </View>
              <View className="flex-1">
                <Input
                  label=""
                  value={"1234...XXXX...1234"}
                  mode="flat"
                  disabled={true}
                  // contentStyle={{ backgroundColor: COLORS.white }}
                  // style={{ backgroundColor: COLORS.white }}
                  activeUnderlineColor="black"
                // onChangeText={(value) => setUserEdit({ ...userEdit, name: value })}
                />
              </View>
            </View>
          ))}
        </View>
        <View className="pt-4 px-6 py-6">
          <Button
            title="Agregar Nueva Dirección"
            onPress={() => { }}
            userType={user?.role}
            variant="text"
            disabled={addresses.length >= 3}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default PaymentsScreen