import React from "react";
import { Text, View } from "react-native";
import { Button } from "@/components/button";
import { navigateToUserTypeSelection } from "@/utils/navigation";
import { CarRental, CheckCircle } from "@/components/svg";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { COLORS } from "@/consts/colors";

export default function OnboardingWelcomeScreen() {
  const handleContinue = () => {
    navigateToUserTypeSelection();
  };

  return (
    <>
      <NavigationHeader
        showBackButton={false}
        backgroundColor={COLORS.primary}
      />

      <ContentContainer className="justify-between px-4">
        <View className="flex-1 pt-8">
          <View className="mb-12 items-center">
            <Text className="mb-4 font-plus-jakarta-extrabold text-5xl text-primary-500">
              Mekapal
            </Text>
            <View className="aspect-[252/135] w-full">
              <CarRental width="100%" height="100%" />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-center font-plus-jakarta-bold text-2xl text-text-active">
              Bienvenido a Mekapal
            </Text>
            <Text className="font-plus-jakarta-regular text-center text-base text-text-active">
              Tu plataforma de confianza para conectar con transportistas.
              Seguro, rápido y eficiente.
            </Text>
            <View className="gap-2">
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="font-plus-jakarta-regular ml-2 text-base text-text-active">
                  Rápido y de confianza
                </Text>
              </View>
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="font-plus-jakarta-regular ml-2 text-base text-text-active">
                  Sistema de pago seguro
                </Text>
              </View>
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="font-plus-jakarta-regular ml-2 text-base text-text-active">
                  Seguimiento en tiempo real
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Button
          title="Empezar"
          onPress={handleContinue}
          fullWidth
          buttonColor={COLORS.primary}
        />
      </ContentContainer>
    </>
  );
}
