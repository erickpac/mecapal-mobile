import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { useTranslation } from "react-i18next";
import {
  navigateToOrders,
  navigateToVehicles,
  navigateToEarnings,
  navigateTo,
} from "@/utils/navigation";
import { ScreenHeader } from "@/components/screen-header";

export default function TransporterDashboardScreen() {
  const { user } = useStore();
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title={t("transport.dashboard.title")}
        subtitle={t("transport.home.greeting", { name: user?.name })}
      />

      <View className="p-4">
        {/* Quick Statistics */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.dashboard.stats.activeOrders")}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="receipt_long"
                  size={32}
                  color="text-blue-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  12
                </Text>
                <Text className="text-gray-600">
                  {t("transport.dashboard.stats.activeOrders")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="check_circle"
                  size={32}
                  color="text-green-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">8</Text>
                <Text className="text-gray-600">
                  {t("transport.dashboard.stats.completedOrders")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="directions_car"
                  size={32}
                  color="text-orange-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">3</Text>
                <Text className="text-gray-600">
                  {t("transport.dashboard.stats.availableVehicles")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="account_balance_wallet"
                  size={32}
                  color="text-red-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $2,450
                </Text>
                <Text className="text-gray-600">
                  {t("transport.dashboard.stats.totalEarnings")}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Orders */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-semibold text-gray-800">
              {t("transport.orders.title")}
            </Text>
            <TouchableOpacity onPress={navigateToOrders}>
              <Text className="text-blue-600 font-medium">
                {t("common.viewAll")}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="space-y-3">
            {[
              {
                id: "1",
                client: "Juan Pérez",
                service: "Transporte de carga",
                status: "inProgress",
                time: "10:30 AM",
              },
              {
                id: "2",
                client: "María García",
                service: "Entrega urgente",
                status: "pending",
                time: "2:15 PM",
              },
              {
                id: "3",
                client: "Carlos López",
                service: "Mudanza",
                status: "completed",
                time: "9:00 AM",
              },
            ].map((order) => (
              <TouchableOpacity
                key={order.id}
                onPress={() => navigateTo(`/orders/${order.id}`)}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-lg font-semibold text-gray-800">
                      {order.client}
                    </Text>
                    <Text className="text-gray-600">{order.service}</Text>
                    <Text className="text-gray-500 text-sm">{order.time}</Text>
                  </View>
                  <View className="items-end">
                    <Text
                      className={`text-sm font-medium ${
                        order.status === "completed"
                          ? "text-green-600"
                          : order.status === "inProgress"
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {t(`transport.orders.status.${order.status}`)}
                    </Text>
                    <MaterialSymbol
                      name="chevron_right"
                      size={16}
                      color="#8E8E93"
                    />
                  </View>
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
              onPress={navigateToOrders}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <MaterialSymbol
                name="receipt_long"
                size={32}
                color="text-white"
              />
              <Text className="text-white font-semibold mt-2">
                {t("transport.dashboard.quickActions.viewOrders")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToVehicles}
              className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <MaterialSymbol
                name="directions_car"
                size={32}
                color="text-white"
              />
              <Text className="text-white font-semibold mt-2">
                {t("transport.dashboard.quickActions.manageVehicles")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToEarnings}
              className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <MaterialSymbol
                name="account_balance_wallet"
                size={32}
                color="text-white"
              />
              <Text className="text-white font-semibold mt-2">
                {t("transport.dashboard.quickActions.viewEarnings")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/profile")}
              className="bg-gray-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <MaterialSymbol name="person" size={32} color="text-white" />
              <Text className="text-white font-semibold mt-2">
                {t("navigation.tabs.profile")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
