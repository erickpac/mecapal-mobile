import { Text, View, ScrollView } from "react-native";
import { ScreenHeader } from "@/components/screen-header";

export default function TransporterOrdersScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Mis Pedidos"
        subtitle="Gestiona tus pedidos de transporte"
      />

      <View className="p-4">
        <Text className="text-lg font-semibold mb-4 text-gray-800">
          Pedidos Activos
        </Text>

        <View className="space-y-3">
          {[
            {
              id: "1",
              client: "Juan Pérez",
              service: "Transporte de carga",
              status: "En progreso",
              time: "10:30 AM",
              price: "$150",
            },
            {
              id: "2",
              client: "María García",
              service: "Entrega urgente",
              status: "Pendiente",
              time: "2:15 PM",
              price: "$200",
            },
            {
              id: "3",
              client: "Carlos López",
              service: "Mudanza",
              status: "Completado",
              time: "9:00 AM",
              price: "$300",
            },
          ].map((order) => (
            <View
              key={order.id}
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
                  <Text className="text-lg font-bold text-green-600">
                    {order.price}
                  </Text>
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
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
