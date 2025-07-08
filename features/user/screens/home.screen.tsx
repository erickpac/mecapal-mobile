import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";
import { IconName } from "@/types/navigation";
import ScreenHeader from "@/components/screen-header";

export default function UserHomeScreen() {
  const { user } = useStore();
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title={t("transport.home.greeting", { name: user?.name })}
        subtitle={t("transport.home.subtitle")}
      />

      <View className="p-4">
        {/* Quick Search */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.quickSearch.title")}
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/search")}
            className="bg-blue-500 p-4 rounded-lg items-center"
          >
            <Ionicons name="search" size={32} color="white" />
            <Text className="text-white font-semibold mt-2 text-lg">
              {t("transport.home.quickSearch.button")}
            </Text>
            <Text className="text-blue-100 mt-1 text-center">
              {t("transport.home.quickSearch.subtitle")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Types */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.serviceTypes.title")}
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                nameKey: "transport.home.serviceTypes.mudanzas.name",
                descriptionKey:
                  "transport.home.serviceTypes.mudanzas.description",
                icon: "home" as IconName,
                color: "bg-blue-500",
              },
              {
                id: "2",
                nameKey: "transport.home.serviceTypes.cargaGeneral.name",
                descriptionKey:
                  "transport.home.serviceTypes.cargaGeneral.description",
                icon: "cube" as IconName,
                color: "bg-green-500",
              },
              {
                id: "3",
                nameKey:
                  "transport.home.serviceTypes.materialesConstruccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.materialesConstruccion.description",
                icon: "construct" as IconName,
                color: "bg-orange-500",
              },
              {
                id: "4",
                nameKey: "transport.home.serviceTypes.entregaRecoleccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.entregaRecoleccion.description",
                icon: "swap-horizontal" as IconName,
                color: "bg-purple-500",
              },
            ].map((service) => (
              <TouchableOpacity
                key={service.id}
                onPress={() => navigateTo("/search")}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View
                    className={`w-12 h-12 ${service.color} rounded-lg items-center justify-center mr-4`}
                  >
                    <Ionicons name={service.icon} size={24} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {t(service.nameKey)}
                    </Text>
                    <Text className="text-gray-600">
                      {t(service.descriptionKey)}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.quickActions.title")}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="search" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.quickActions.searchTransport")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/history")}
              className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="time" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.quickActions.myHistory")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/profile")}
              className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="person" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.quickActions.myProfile")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/settings")}
              className="bg-gray-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="settings" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.quickActions.settings")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.recentActivity.title")}
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-gray-600 text-center">
              {t("transport.home.recentActivity.noActivity")}
            </Text>
            <Text className="text-gray-500 text-center text-sm mt-1">
              {t("transport.home.recentActivity.subtitle")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
