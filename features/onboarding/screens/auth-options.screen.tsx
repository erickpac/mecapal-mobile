import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  navigateToOnboardingLogin,
  navigateToOnboardingRegister,
  replaceRoute,
  ROUTES,
} from "@/utils/navigation";

export default function AuthOptionsScreen() {
  const { selectedUserType, setHasCompletedOnboarding } = useStore();

  const handleSignIn = () => {
    // Navigate to modal login screen
    navigateToOnboardingLogin();
  };

  const handleCreateAccount = () => {
    // Navigate to modal register screen
    navigateToOnboardingRegister();
  };

  const handleSkipAuth = () => {
    // Complete onboarding and go to guest mode
    setHasCompletedOnboarding(true);
    replaceRoute(ROUTES.HOME);
  };

  const handleBack = () => {
    router.back();
  };

  const getUserTypeInfo = () => {
    if (selectedUserType === UserRole.USER) {
      return {
        title: "Ready to find transporters?",
        description:
          "Create an account to start requesting transportation services",
        icon: "👤",
        color: "blue",
      };
    } else {
      return {
        title: "Ready to start transporting?",
        description:
          "Create an account to start offering your transportation services",
        icon: "🚛",
        color: "green",
      };
    }
  };

  const userTypeInfo = getUserTypeInfo();

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
          <View
            className={`w-20 h-20 bg-${userTypeInfo.color}-100 rounded-full items-center justify-center mb-6`}
          >
            <Text className="text-4xl">{userTypeInfo.icon}</Text>
          </View>

          <Text className="text-3xl font-bold text-center mb-4 text-gray-900">
            {userTypeInfo.title}
          </Text>

          <Text className="text-lg text-center text-gray-600 mb-12 leading-relaxed">
            {userTypeInfo.description}
          </Text>

          {/* Auth options */}
          <View className="w-full space-y-4">
            {/* Create Account */}
            <TouchableOpacity
              onPress={handleCreateAccount}
              className="bg-blue-600 py-4 px-8 rounded-full items-center shadow-lg"
            >
              <Text className="text-white text-lg font-semibold">
                Create Account
              </Text>
            </TouchableOpacity>

            {/* Sign In */}
            <TouchableOpacity
              onPress={handleSignIn}
              className="bg-white border-2 border-blue-600 py-4 px-8 rounded-full items-center"
            >
              <Text className="text-blue-600 text-lg font-semibold">
                I already have an account
              </Text>
            </TouchableOpacity>

            {/* Skip for now */}
            <TouchableOpacity
              onPress={handleSkipAuth}
              className="py-4 px-8 items-center"
            >
              <Text className="text-gray-500 text-base">Skip for now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress indicator */}
        <View className="flex-row justify-center items-center space-x-2">
          <View className="w-8 h-2 bg-gray-300 rounded-full" />
          <View className="w-8 h-2 bg-gray-300 rounded-full" />
          <View className="w-8 h-2 bg-blue-600 rounded-full" />
        </View>
      </View>
    </SafeAreaView>
  );
}
