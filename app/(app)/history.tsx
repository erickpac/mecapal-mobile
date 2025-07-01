import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-semibold text-gray-800">
          Historial de Viajes
        </Text>
        <Text className="text-gray-600 mt-2 text-center px-4">
          Revisa tus viajes anteriores y transportistas contactados
        </Text>
      </View>
    </SafeAreaView>
  );
}
