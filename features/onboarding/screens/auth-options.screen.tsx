import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Text, View } from "react-native";
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
        : "Haz que tu medio de transporte trabaje para ti",
      description: isUser
        ? "Explora transportistas disponibles según ruta, tipo de camión y tarifa. Coordina todo por WhatsApp y haz seguimiento fácilmente."
        : "Registra tus rutas, muestra tus tarifas y recibe clientes directos interesados en tus servicios.",
      aspectRatio: isUser ? "aspect-[342/227]" : "aspect-[287/206]",
    };
  }, [isUser]);

  return (
    <>
      <NavigationHeader showBackButton={true} />
      <ContentContainer className="justify-between px-4">
        <View className="flex-1 pt-8">
          <View className="mb-2 items-center">
            <Text className="mb-4 font-plus-jakarta-extrabold text-5xl leading-[64px] text-primary-500">
              Mekapal
            </Text>
          </View>
          <View className="mb-6 items-center">
            <View className={`w-full ${content.aspectRatio}`}>
              {content.illustration}
            </View>
          </View>

          <View className="items-center text-center">
            <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {content.title}
            </Text>
            <Text className="font-plus-jakarta-regular text-center text-base text-text-active">
              {content.description}
            </Text>
          </View>
        </View>

        <View className="gap-4">
          <Button
            title="Crea tu cuenta"
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
