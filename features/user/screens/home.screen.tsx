import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  navigateTo,
  navigateToServices,
  navigateToAppointments,
  navigateToHomeEmergency,
  navigateToHistory,
} from "@/utils/navigation";

// Type for Ionicons icons
type IconName = keyof typeof Ionicons.glyphMap;

export default function UserHomeScreen() {
  const { user } = useStore();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">
          ¡Hola, {user?.name}!
        </Text>
        <Text className="text-gray-600 mt-1">¿Qué servicio necesitas hoy?</Text>
      </View>

      <View className="p-4">
        {/* Featured Services */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Servicios Destacados
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                name: "Mecánica General",
                icon: "construct" as IconName,
                color: "bg-blue-500",
              },
              {
                id: "2",
                name: "Electricidad",
                icon: "flash" as IconName,
                color: "bg-yellow-500",
              },
              {
                id: "3",
                name: "Suspensión",
                icon: "car" as IconName,
                color: "bg-green-500",
              },
            ].map((service) => (
              <TouchableOpacity
                key={service.id}
                onPress={() => navigateTo(`/services/${service.id}`)}
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
                      {service.name}
                    </Text>
                    <Text className="text-gray-600">
                      Ver detalles y precios
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
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={navigateToServices}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="construct" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                Buscar Servicios
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToAppointments}
              className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="calendar" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Nueva Cita</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToHomeEmergency}
              className="bg-red-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="warning" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Emergencia</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToHistory}
              className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="time" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Historial</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
