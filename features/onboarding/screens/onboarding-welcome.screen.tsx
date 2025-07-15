import React from "react";
import { Text, View } from "react-native";
import { Button } from "@/components/button";
import { navigateToUserTypeSelection } from "@/utils/navigation";
import { CarRental, CheckCircle } from "@/components/svg";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";

export default function OnboardingWelcomeScreen() {
  const handleContinue = () => {
    navigateToUserTypeSelection();
  };

  return (
    <>
      <NavigationHeader showBackButton={false} />

      <ContentContainer className="px-4 justify-between">
        <View className="flex-1 pt-8">
          <View className="items-center mb-12">
            <Text className="text-5xl font-plus-jakarta-extrabold text-primary-500 mb-4">
              Mekapal
            </Text>
            <CarRental width={252} height={135} />
          </View>

          <View className="flex flex-col gap-4">
            <Text className="text-2xl font-plus-jakarta-bold text-text-active text-center">
              Bienvenido a Mekapal
            </Text>
            <Text className="text-base font-plus-jakarta-regular text-text-active text-center">
              Tu plataforma de confianza para conectar con transportistas.
              Seguro, rápido y eficiente.
            </Text>
            <View className="flex flex-col gap-2">
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="ml-2 text-text-active text-base font-plus-jakarta-regular">
                  Rápido y de confianza
                </Text>
              </View>
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="ml-2 text-text-active text-base font-plus-jakarta-regular">
                  Sistema de pago seguro
                </Text>
              </View>
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="ml-2 text-text-active text-base font-plus-jakarta-regular">
                  Seguimiento en tiempo real
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Button title="Empezar" onPress={handleContinue} fullWidth />
      </ContentContainer>
    </>
  );
}
