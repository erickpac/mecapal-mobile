import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/features/shared/routes";
import { Header } from "@/components/header";
import { ScreenHeader } from "@/components/screen-header";
import WelcomeHero from "@/components/welcome-hero";
import Card from "@/components/card";
import Truck from "@/components/svg/truck";
import Shuttle from "@/components/svg/shuttle";
import Motorcycle from "@/components/svg/motorcycle";
import { Button } from "@/components/button";
import { UserRole } from "@/features/auth/types/user";


export default function UserHomeScreen() {
  const { user } = useStore();
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-gray-50">
        <WelcomeHero name={user?.name} />
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
        <View className="mx-4 mt-6 rounded-lg bg-primary-50 border border-primary-500">
          <View className="mx-8 mt-3 items-center px-6 pb-6 pt-6">
            <Text className="text-xl font-bold text-black">Ahorra 15% de descuento</Text>
            <Text className="text-base font-medium text-black">Al contratar a tu primer transportista.</Text>
            <View className="mt-5">
              <Button
                title="Obtener descuento"
                onPress={() => { }}
                userType={user?.role}
              />
            </View>
          </View>
        </View>

        <View className="p-4">
          {/* Recent Activity */}
          <View className="mb-6">
            <Text className="mb-4 text-xl font-semibold text-gray-800">
              {t("transport.home.recentActivity.title")}
            </Text>
            <View className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
              <Text className="text-center text-gray-600">
                {t("transport.home.recentActivity.noActivity")}
              </Text>
              <Text className="mt-1 text-center text-sm text-gray-500">
                {t("transport.home.recentActivity.subtitle")}
              </Text>
            </View>
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
                  onPress={() => { }}
                  userType={UserRole.TRANSPORTER}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
