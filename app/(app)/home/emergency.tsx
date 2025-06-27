import UserEmergencyScreen from "@/features/user/screens/emergency.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Emergency() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* Navigation Header */}
      <View className="bg-white p-4 border-b border-gray-200">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
        >
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
          <Text className="text-lg font-semibold ml-2 text-gray-800">
            Emergencia
          </Text>
        </TouchableOpacity>
      </View>

      <UserEmergencyScreen />
    </SafeAreaView>
  );
}
