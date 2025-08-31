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
            title={t("home.actions.heavyLoad")}
            onPress={() => navigateTo("/search")}
          />
          <Card
            icon={<Truck />}
            title={t("home.actions.express")}
            onPress={() => navigateTo("/search")}
          />
          <Card
            icon={<Shuttle />}
            title={t("home.actions.lightLoad")}
            onPress={() => navigateTo("/search")}
          />
        </View>
        <View className="mx-4 mt-6 rounded-lg">
          <Image
            source={require("../../../assets/images/CTA-background.png")}
            className="absolute inset-0 h-full w-full rounded-lg"
            resizeMode="cover"
          />
          <View className="mx-8 mt-3 items-center px-6 pb-12 pt-8">
            <Text className="text-xl font-bold text-white">
              {t("home.ctaTransporter.title")}
            </Text>
            <Text className="text-[16px] font-normal text-white">
              {t("home.ctaTransporter.subtitle")}
            </Text>
            <View className="mt-5">
              <Button
                title={t("home.ctaTransporter.action1")}
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
            {t("home.ctaUser.title")}
          </Text>
          <View className="mt-4 flex w-72 flex-col items-center justify-center gap-5">
            <Button
              title={t("home.ctaUser.action1")}
              onPress={() => navigateTo("/auth/register")}
              userType={UserRole.USER}
            />
            <Button
              title={t("home.ctaUser.action2")}
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
