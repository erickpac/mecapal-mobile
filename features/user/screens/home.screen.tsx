import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/features/shared/routes";
import { ScreenHeader } from "@/components/screen-header";

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
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.quickSearch.title")}
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/search")}
            className="items-center rounded-lg bg-blue-500 p-4"
          >
            <MaterialSymbol name="search" size={32} color="text-white" />
            <Text className="mt-2 text-lg font-semibold text-white">
              {t("transport.home.quickSearch.button")}
            </Text>
            <Text className="mt-1 text-center text-blue-100">
              {t("transport.home.quickSearch.subtitle")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Types */}
        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.serviceTypes.title")}
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                nameKey: "transport.home.serviceTypes.mudanzas.name",
                descriptionKey:
                  "transport.home.serviceTypes.mudanzas.description",
                icon: "home",
                color: "bg-blue-500",
              },
              {
                id: "2",
                nameKey: "transport.home.serviceTypes.cargaGeneral.name",
                descriptionKey:
                  "transport.home.serviceTypes.cargaGeneral.description",
                icon: "inventory_2",
                color: "bg-green-500",
              },
              {
                id: "3",
                nameKey:
                  "transport.home.serviceTypes.materialesConstruccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.materialesConstruccion.description",
                icon: "construction",
                color: "bg-orange-500",
              },
              {
                id: "4",
                nameKey: "transport.home.serviceTypes.entregaRecoleccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.entregaRecoleccion.description",
                icon: "swap_horiz",
                color: "bg-purple-500",
              },
            ].map((service) => (
              <TouchableOpacity
                key={service.id}
                onPress={() => navigateTo("/search")}
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <View className="flex-row items-center">
                  <View
                    className={`h-12 w-12 ${service.color} mr-4 items-center justify-center rounded-lg`}
                  >
                    <MaterialSymbol
                      name={service.icon}
                      size={24}
                      color="text-white"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {t(service.nameKey)}
                    </Text>
                    <Text className="text-gray-600">
                      {t(service.descriptionKey)}
                    </Text>
                  </View>
                  <MaterialSymbol
                    name="chevron_right"
                    size={20}
                    color="text-gray-400"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.quickActions.title")}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="mb-4 w-[48%] items-center rounded-lg bg-blue-500 p-4"
            >
              <MaterialSymbol name="search" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.quickActions.searchTransport")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/history")}
              className="mb-4 w-[48%] items-center rounded-lg bg-green-500 p-4"
            >
              <MaterialSymbol name="history" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.quickActions.myHistory")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/profile")}
              className="mb-4 w-[48%] items-center rounded-lg bg-purple-500 p-4"
            >
              <MaterialSymbol name="person" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.quickActions.myProfile")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/settings")}
              className="mb-4 w-[48%] items-center rounded-lg bg-gray-500 p-4"
            >
              <MaterialSymbol name="settings" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.quickActions.settings")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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
      </View>
    </ScrollView>
  );
}
