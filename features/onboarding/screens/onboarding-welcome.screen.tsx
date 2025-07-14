import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/button";
import { navigateToUserTypeSelection } from "@/utils/navigation";
import { CarRental, CheckCircle } from "@/components/svg";

export default function OnboardingWelcomeScreen() {
  const handleContinue = () => {
    navigateToUserTypeSelection();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-8 pb-4 justify-between">
        <View className="items-center mt-12 mb-6">
          <Text className="text-5xl font-plus-jakarta-extrabold text-primary-500 mb-6">
            Mekapal
          </Text>
          <CarRental width={252} height={135} />
        </View>

        <View className="mb-10">
          <Text className="text-2xl font-plus-jakarta-bold text-center text-text-active mb-2">
            ¡Bienvenido a Mekapal!
          </Text>
          <Text className="text-base text-center text-text-idle mb-4">
            Tu plataforma de confianza para conectar con transportistas. Seguro,
            rápido y eficiente.
          </Text>
          <View className="space-y-4 mt-2">
            <View className="flex-row items-center">
              <CheckCircle width={24} height={24} />
              <Text className="text-base ml-2 text-text-active">
                Rápido y de confianza
              </Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircle width={24} height={24} />
              <Text className="text-base ml-2 text-text-active">
                Sistema de pago seguro
              </Text>
            </View>
            <View className="flex-row items-center">
              <CheckCircle width={24} height={24} />
              <Text className="text-base ml-2 text-text-active">
                Seguimiento en tiempo real
              </Text>
            </View>
          </View>
        </View>

        <View className="mb-2">
          <Button title="Empezar" onPress={handleContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
}
