import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  navigateToUserTypeSelection,
  replaceRoute,
  ROUTES,
} from "@/utils/navigation";

export default function OnboardingWelcomeScreen() {
  const handleContinue = () => {
    navigateToUserTypeSelection();
  };

  const handleSkip = () => {
    // Skip onboarding and go to guest mode
    replaceRoute(ROUTES.HOME);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between p-6">
        {/* Skip button */}
        <View className="flex-row justify-end">
          <TouchableOpacity onPress={handleSkip}>
            <Text className="text-gray-500 text-base">Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View className="flex-1 justify-center items-center">
          <View className="w-32 h-32 bg-blue-100 rounded-full items-center justify-center mb-8">
            <Text className="text-4xl">🚛</Text>
          </View>

          <Text className="text-3xl font-bold text-center mb-4 text-gray-900">
            Welcome to Mecapal
          </Text>

          <Text className="text-lg text-center text-gray-600 mb-8 leading-relaxed">
            Your trusted platform for connecting with reliable transporters.
            Safe, fast, and efficient transportation services.
          </Text>

          {/* Features */}
          <View className="w-full space-y-4 mb-8">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-3">
                <Text className="text-green-600 text-lg">✓</Text>
              </View>
              <Text className="text-gray-700 flex-1">
                Quick and reliable service
              </Text>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-3">
                <Text className="text-green-600 text-lg">✓</Text>
              </View>
              <Text className="text-gray-700 flex-1">
                Secure payment system
              </Text>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-3">
                <Text className="text-green-600 text-lg">✓</Text>
              </View>
              <Text className="text-gray-700 flex-1">Real-time tracking</Text>
            </View>
          </View>
        </View>

        {/* Continue button */}
        <View>
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-blue-600 py-4 px-8 rounded-full items-center shadow-lg"
          >
            <Text className="text-white text-lg font-semibold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
