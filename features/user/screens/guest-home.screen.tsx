import { Text, View, ScrollView, Image } from "react-native";
import { Header } from "@/components/header";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/features/shared/routes";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import WelcomeHero from "@/components/welcome-hero";
import Card from "@/components/card";
import Truck from "@/components/svg/truck";
import Shuttle from "@/components/svg/shuttle";
import Motorcycle from "@/components/svg/motorcycle";
import { Button } from "@/components/button";
import Amico from "@/components/svg/amico";

export default function GuestHomeScreen() {
  const { t } = useTranslation();
  const { setSelectedUserType } = useStore();

  const handleClickLogin = (role: UserRole) => {
    setSelectedUserType(role);
    navigateTo("/auth");
  };

  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-gray-50">
        <WelcomeHero />
        <View className="-mt-16 w-full flex-row items-center justify-between px-3">
          <Card
            icon={<Motorcycle />}
            title="Carga Pesada"
            onPress={() => navigateTo("/search")}
          />
          <Card
            icon={<Truck />}
            title="Envíos Express"
            onPress={() => navigateTo("/search")}
          />
          <Card
            icon={<Shuttle />}
            title="Carga Liviana"
            onPress={() => navigateTo("/search")}
          />
        </View>
        <View className="mx-8 mt-6 rounded-lg">
          <Image
            source={require("../../../assets/images/CTA-background.png")}
            className="absolute inset-0 h-full w-full rounded-lg"
            resizeMode="cover"
          />
          <View className="mx-8 mt-3 items-center px-6 pb-12 pt-8">
            <Text className="text-xl font-bold text-white">
              ¿Eres transportista?
            </Text>
            <Text className="text-[16px] font-normal text-white">
              Haz que tu vehiculo trabaje para ti
            </Text>
            <View className="mt-5">
              <Button
                title={"Crea tu cuenta"}
                onPress={() => handleClickLogin(UserRole.TRANSPORTER)}
                userType={UserRole.TRANSPORTER}
              />
            </View>
          </View>
        </View>
        <View className="mx-8 mt-6 items-center">
          <View className="py-4">
            <Amico />
          </View>
          <Text className="text-center font-plus-jakarta-semibold text-xl font-semibold">
            ¿Listo para mover tus chivas?
          </Text>
          <View className="mt-4 flex w-72 flex-col items-center justify-center gap-5">
            <Button
              title={"Crear mi cuenta"}
              onPress={() => navigateTo("/auth/register")}
              userType={UserRole.USER}
            />
            <Button
              title={"Iniciar Sesión"}
              onPress={() => handleClickLogin(UserRole.USER)}
              userType={UserRole.USER}
              variant="outlined"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
