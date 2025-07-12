import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigateToAuthOptions } from "@/utils/navigation";

export default function UserTypeSelectionScreen() {
  const { setSelectedUserType } = useStore();

  const handleUserTypeSelect = (userType: UserRole) => {
    setSelectedUserType(userType);
    navigateToAuthOptions();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between p-6">
        {/* Back button */}
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={handleBack}>
            <Text className="text-blue-600 text-base">← Back</Text>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-3xl font-bold text-center mb-4 text-gray-900">
            What type of user are you?
          </Text>

          <Text className="text-lg text-center text-gray-600 mb-12 leading-relaxed">
            Choose your role to get a personalized experience
          </Text>

          {/* User type options */}
          <View className="w-full space-y-4">
            {/* User option */}
            <TouchableOpacity
              onPress={() => handleUserTypeSelect(UserRole.USER)}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <View className="items-center">
                <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center mb-4">
                  <Text className="text-3xl">👤</Text>
                </View>
                <Text className="text-xl font-semibold text-gray-900 mb-2">
                  User
                </Text>
                <Text className="text-gray-600 text-center">
                  I need transportation services for my goods
                </Text>
              </View>
            </TouchableOpacity>

            {/* Transporter option */}
            <TouchableOpacity
              onPress={() => handleUserTypeSelect(UserRole.TRANSPORTER)}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <View className="items-center">
                <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-4">
                  <Text className="text-3xl">🚛</Text>
                </View>
                <Text className="text-xl font-semibold text-gray-900 mb-2">
                  Transporter
                </Text>
                <Text className="text-gray-600 text-center">
                  I provide transportation services
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress indicator */}
        <View className="flex-row justify-center items-center space-x-2">
          <View className="w-8 h-2 bg-gray-300 rounded-full" />
          <View className="w-8 h-2 bg-blue-600 rounded-full" />
          <View className="w-8 h-2 bg-gray-300 rounded-full" />
        </View>
      </View>
    </SafeAreaView>
  );
}
