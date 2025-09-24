import { Text, View, ScrollView } from 'react-native';
import { NavigationHeader } from '@/components/navigation-header';

export default function TransporterEarningsScreen() {
  // A function to receive a number or string and format it as currency
  const formatCurrency = (amount: number | string) => {
    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    return new Intl.NumberFormat('es-GT', {
      style: 'currency',
      currency: 'GTQ',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numAmount);
  };

  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView>
        <View className="">
          <View className="px-8 py-4">
            <Text className="font-plus-jakarta-bold text-2xl text-gray-800">
              {'Ganancias Totales'}
            </Text>
          </View>

          <View className="m-8 items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-md shadow-black/10">
            <Text className="mt-4 font-plus-jakarta-bold text-5xl">
              {formatCurrency(19233)}
            </Text>
            <Text className="mt-4 font-plus-jakarta-light text-sm">
              Acreditacion al dia siguiente
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
