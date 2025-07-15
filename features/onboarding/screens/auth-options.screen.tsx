import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { navigateTo, ROUTES, replaceRoute } from "@/utils/navigation";
import { CarAccesories, FreeShipping } from "@/components/svg";
import { Button } from "@/components/button";
import { useMemo } from "react";

export default function AuthOptionsScreen() {
  const { selectedUserType } = useStore();

  const isUser = selectedUserType === UserRole.USER;

  const content = useMemo(() => {
    return {
      illustration: isUser ? (
        <CarAccesories width="100%" height="100%" />
      ) : (
        <FreeShipping width="100%" height="100%" />
      ),
      title: isUser
        ? "Mueve lo que quieras, sin complicarte"
        : "Haz que tu medio de transporte trabaje por ti",
      description: isUser
        ? "Explora transportistas disponibles según ruta, tipo de camión y tarifa. Coordina todo por WhatsApp y haz seguimiento fácilmente."
        : "Registra tus rutas, muestra tus tarifas y recibe clientes directos interesados en tus servicios.",
      aspectRatio: isUser ? "aspect-[342.66/227]" : "aspect-[287/206]",
    };
  }, [isUser]);

  return (
    <>
      <NavigationHeader showBackButton={true} />
      <ContentContainer className="px-4 justify-between">
        <View className="flex-1 pt-8">
          <View className="items-center mb-6">
            <Text className="text-5xl font-plus-jakarta-extrabold text-primary-500 mb-4">
              Mekapal
            </Text>
          </View>
          <View className="items-center mb-8 px-4">
            <View className={`w-full ${content.aspectRatio}`}>
              {content.illustration}
            </View>
          </View>

          <View className="items-center text-center px-6">
            <Text className="text-2xl font-plus-jakarta-bold text-text-active text-center mb-4">
              {content.title}
            </Text>
            <Text className="text-base font-plus-jakarta-regular text-text-active text-center">
              {content.description}
            </Text>
          </View>
        </View>

        <View className="flex flex-col gap-4">
          <Button
            title="Crea tu Cuenta"
            onPress={() => navigateTo(ROUTES.ONBOARDING_REGISTER)}
          />
          <Button
            title="Ya tengo cuenta"
            variant="outlined"
            onPress={() => navigateTo(ROUTES.ONBOARDING_LOGIN)}
          />
          <Button
            title="Saltar"
            variant="text"
            onPress={() => replaceRoute(ROUTES.HOME)}
          />
        </View>
      </ContentContainer>
    </>
  );
}
