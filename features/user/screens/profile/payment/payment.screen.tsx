import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@/components/input'
import { NavigationHeader } from '@/components/navigation-header'
import { ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.payment.title")}</Text>
        </View>
        <View className="mt-4 px-6 py-4 space-y-4">
          <View className="flex-row items-center">
            <View className="flex-1">
              <Input
                label=""
                value={"zxxxxxxxx"}
                mode="flat"
                disabled={true}
                // contentStyle={{ backgroundColor: COLORS.white }}
                // style={{ backgroundColor: COLORS.white }}
                activeUnderlineColor="black"
              // onChangeText={(value) => setUserEdit({ ...userEdit, name: value })}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default PaymentsScreen