import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserHistoryScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Filtros */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Filtrar por
          </Text>
          <View className="flex-row space-x-2">
            <View className="bg-blue-500 px-4 py-2 rounded-full">
              <Text className="text-white font-medium">Todos</Text>
            </View>
            <View className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="text-gray-700 font-medium">Este Mes</Text>
            </View>
            <View className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="text-gray-700 font-medium">Este Año</Text>
            </View>
          </View>
        </View>

        {/* Historial de Servicios */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Servicios Recientes
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                service: "Mecánica General",
                date: "15 Mar 2024",
                mechanic: "Carlos Méndez",
                price: "$120",
                rating: 5,
                status: "Completado",
              },
              {
                id: "2",
                service: "Cambio de Aceite",
                date: "10 Mar 2024",
                mechanic: "Juan Pérez",
                price: "$45",
                rating: 4,
                status: "Completado",
              },
              {
                id: "3",
                service: "Reparación de Frenos",
                date: "5 Mar 2024",
                mechanic: "María García",
                price: "$200",
                rating: 5,
                status: "Completado",
              },
              {
                id: "4",
                service: "Diagnóstico Eléctrico",
                date: "1 Mar 2024",
                mechanic: "Luis Rodríguez",
                price: "$80",
                rating: 4,
                status: "Completado",
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
                      Mecánico: {item.mechanic}
                    </Text>
                    <Text className="text-gray-500 text-sm">{item.date}</Text>
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
                        Detalles
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-500 px-3 py-1 rounded-lg">
                      <Text className="text-white text-sm font-medium">
                        Repetir
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
            Estadísticas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="construct" size={32} color="#007AFF" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  15
                </Text>
                <Text className="text-gray-600">Servicios Totales</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="star" size={32} color="#FFD700" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  4.8
                </Text>
                <Text className="text-gray-600">Calificación Promedio</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="cash" size={32} color="#34C759" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $445
                </Text>
                <Text className="text-gray-600">Total Gastado</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <Ionicons name="calendar" size={32} color="#FF9500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">3</Text>
                <Text className="text-gray-600">Este Mes</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
