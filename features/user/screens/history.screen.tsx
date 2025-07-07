import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function UserHistoryScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Filtros */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.history.filters.title")}
          </Text>
          <View className="flex-row space-x-2">
            <View className="bg-blue-500 px-4 py-2 rounded-full">
              <Text className="text-white font-medium">
                {t("transport.history.filters.all")}
              </Text>
            </View>
            <View className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="text-gray-700 font-medium">
                {t("transport.history.filters.thisMonth")}
              </Text>
            </View>
            <View className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="text-gray-700 font-medium">
                {t("transport.history.filters.thisYear")}
              </Text>
            </View>
          </View>
        </View>

        {/* Historial de Servicios de Transporte */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.history.recentServices.title")}
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                service: "Mudanza Residencial",
                date: "15 Mar 2024",
                transporter: "Transportes Rápidos S.A.",
                price: "$450",
                rating: 5,
                status: "Completado",
                from: "San José Centro",
                to: "Heredia Centro",
              },
              {
                id: "2",
                service: "Transporte de Carga",
                date: "10 Mar 2024",
                transporter: "Cargo Express",
                price: "$280",
                rating: 4,
                status: "Completado",
                from: "Alajuela",
                to: "Cartago",
              },
              {
                id: "3",
                service: "Entrega Urgente",
                date: "5 Mar 2024",
                transporter: "Flash Delivery",
                price: "$120",
                rating: 5,
                status: "Completado",
                from: "San José",
                to: "Escazú",
              },
              {
                id: "4",
                service: "Transporte de Materiales",
                date: "1 Mar 2024",
                transporter: "Construcción Express",
                price: "$350",
                rating: 4,
                status: "Completado",
                from: "San José",
                to: "Grecia",
              },
            ].map((item) => (
              <View
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-start mb-3">
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {item.service}
                    </Text>
                    <Text className="text-gray-600">
                      {t("transport.history.transporter")}: {item.transporter}
                    </Text>
                    <Text className="text-gray-500 text-sm">{item.date}</Text>
                    <View className="flex-row items-center mt-1">
                      <Ionicons name="location" size={14} color="#6B7280" />
                      <Text className="text-gray-500 text-sm ml-1">
                        {item.from} → {item.to}
                      </Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="text-lg font-bold text-green-600">
                      {item.price}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      {[...Array(5)].map((_, index) => (
                        <Ionicons
                          key={index}
                          name={index < item.rating ? "star" : "star-outline"}
                          size={16}
                          color={index < item.rating ? "#FFD700" : "#D1D5DB"}
                        />
                      ))}
                    </View>
                  </View>
                </View>

                <View className="flex-row justify-between items-center">
                  <View className="bg-green-100 px-3 py-1 rounded-full">
                    <Text className="text-green-600 text-sm font-medium">
                      {item.status}
                    </Text>
                  </View>
                  <View className="flex-row space-x-2">
                    <TouchableOpacity className="bg-blue-500 px-3 py-1 rounded-lg">
                      <Text className="text-white text-sm font-medium">
                        {t("transport.history.actions.details")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-500 px-3 py-1 rounded-lg">
                      <Text className="text-white text-sm font-medium">
                        {t("transport.history.actions.repeat")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Estadísticas */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.history.statistics.title")}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="car" size={32} color="#007AFF" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  12
                </Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.totalServices")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="star" size={32} color="#FFD700" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  4.7
                </Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.averageRating")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="cash" size={32} color="#34C759" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $1,200
                </Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.totalSpent")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="calendar" size={32} color="#FF9500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">4</Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.thisMonth")}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
