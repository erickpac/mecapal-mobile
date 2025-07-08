import { Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenHeader } from "@/components/screen-header";

export default function TransporterEarningsScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Mis Ganancias"
        subtitle="Revisa tus ingresos y estadísticas"
      />

      <View className="p-4">
        {/* Resumen de Ganancias */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Resumen del Mes
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="cash" size={32} color="#34C759" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $8,450
                </Text>
                <Text className="text-gray-600">Ganancias Totales</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="trending-up" size={32} color="#007AFF" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $2,150
                </Text>
                <Text className="text-gray-600">Esta Semana</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="list" size={32} color="#FF9500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  45
                </Text>
                <Text className="text-gray-600">Pedidos Completados</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="star" size={32} color="#FF3B30" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  4.8
                </Text>
                <Text className="text-gray-600">Calificación</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Historial de Ganancias */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Historial Reciente
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                client: "Juan Pérez",
                service: "Transporte de carga",
                amount: "$150",
                date: "15 Mar 2024",
              },
              {
                id: "2",
                client: "María García",
                service: "Entrega urgente",
                amount: "$200",
                date: "14 Mar 2024",
              },
              {
                id: "3",
                client: "Carlos López",
                service: "Mudanza",
                amount: "$300",
                date: "13 Mar 2024",
              },
            ].map((earning) => (
              <View
                key={earning.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-lg font-semibold text-gray-800">
                      {earning.client}
                    </Text>
                    <Text className="text-gray-600">{earning.service}</Text>
                    <Text className="text-gray-500 text-sm">
                      {earning.date}
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-lg font-bold text-green-600">
                      {earning.amount}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
