import { Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/button";
import { NavigationHeader } from "@/components/navigation-header";
import { navigateToUserTypeSelection } from "@/utils/navigation";
import { CarRental, CheckCircle } from "@/components/svg";
import { useStatusBar } from "@/hooks/useStatusBar";

export default function OnboardingWelcomeScreen() {
  const { statusBarColor, isAndroid } = useStatusBar();

  const handleContinue = () => {
    navigateToUserTypeSelection();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Status bar for Android */}
      {isAndroid && (
        <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />
      )}

      {/* Status bar background for iOS */}
      {!isAndroid && (
        <View style={{ backgroundColor: statusBarColor, height: 0 }} />
      )}

      <NavigationHeader
        title=""
        showBackButton={false}
        backgroundColor="bg-primary-500"
      />
      <View className="flex-1 px-6 pt-8 pb-4 justify-between">
        <View className="items-center mt-12 mb-6">
          <Text className="text-5xl font-plus-jakarta-bold text-primary-500 mb-8">
            Mekapal
          </Text>
          <CarRental width={252} height={135} />
        </View>

        {/* Contenido principal */}
        <View className="flex-1 justify-center">
          <Text className="text-2xl font-plus-jakarta-bold text-text-active text-center mb-4">
            Bienvenido a Mekapal
          </Text>
          <Text className="text-base text-text-idle text-center mb-8 leading-6">
            Tu plataforma de transporte confiable, rápido y eficiente.
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

        {/* Botón */}
        <View className="mt-8">
          <Button title="Empezar" onPress={handleContinue} fullWidth />
        </View>
      </View>
    </SafeAreaView>
  );
}
