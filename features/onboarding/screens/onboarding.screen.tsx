import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen() {
  const setHasCompletedOnboarding = useStore(
    (state) => state.setHasCompletedOnboarding
  );

  const handleComplete = () => {
    setHasCompletedOnboarding(true);
    router.replace("/auth");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-3xl font-bold mb-8 text-black">
        Bienvenido a Mecapal
      </Text>
      <Text className="text-lg text-center mb-8 text-black">
        Tu aplicación para gestionar tus mecánicas de manera eficiente
      </Text>
      <TouchableOpacity
        onPress={handleComplete}
        className="bg-blue-500 px-8 py-4 rounded-full"
      >
        <Text className="text-white font-semibold text-lg">Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
}
