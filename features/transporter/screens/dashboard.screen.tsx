import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  navigateToOrders,
  navigateToVehicles,
  navigateToEarnings,
  navigateToSchedule,
  navigateToHomeOrders,
  navigateToHomeOrderDetail,
} from "@/utils/navigation";

export default function TransporterDashboardScreen() {
  const { user } = useStore();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">Dashboard</Text>
        <Text className="text-gray-600 mt-1">Bienvenido, {user?.name}</Text>
      </View>

      <View className="p-4">
        {/* Quick Statistics */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Estadísticas del Día
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="list" size={32} color="#007AFF" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  12
                </Text>
                <Text className="text-gray-600">Pedidos Activos</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="checkmark-circle" size={32} color="#34C759" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">8</Text>
                <Text className="text-gray-600">Completados</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="car" size={32} color="#FF9500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">3</Text>
                <Text className="text-gray-600">Vehículos</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="cash" size={32} color="#FF3B30" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $2,450
                </Text>
                <Text className="text-gray-600">Ganancias</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Orders */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-semibold text-gray-800">
              Pedidos Recientes
            </Text>
            <TouchableOpacity onPress={navigateToHomeOrders}>
              <Text className="text-blue-600 font-medium">Ver todos</Text>
            </TouchableOpacity>
          </View>
          <View className="space-y-3">
            {[
              {
                id: "1",
                client: "Juan Pérez",
                service: "Transporte de carga",
                status: "En progreso",
                time: "10:30 AM",
              },
              {
                id: "2",
                client: "María García",
                service: "Entrega urgente",
                status: "Pendiente",
                time: "2:15 PM",
              },
              {
                id: "3",
                client: "Carlos López",
                service: "Mudanza",
                status: "Completado",
                time: "9:00 AM",
              },
            ].map((order) => (
              <TouchableOpacity
                key={order.id}
                onPress={() => navigateToHomeOrderDetail(order.id)}
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
                        order.status === "Completado"
                          ? "text-green-600"
                          : order.status === "En progreso"
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
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
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={navigateToOrders}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="list" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Ver Pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToVehicles}
              className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="car" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                Mis Vehículos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToEarnings}
              className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="cash" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Ganancias</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToSchedule}
              className="bg-orange-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="calendar" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Horario</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
