import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { navigateTo } from "@/utils/navigation";

// Type for Ionicons icons
type IconName = keyof typeof Ionicons.glyphMap;

export default function UserServicesScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">Servicios</Text>
        <Text className="text-gray-600 mt-1">
          Encuentra el servicio que necesitas
        </Text>
      </View>

      <View className="p-4">
        <Text className="text-lg font-semibold mb-4 text-gray-800">
          Categorías de Servicios
        </Text>

        <View className="space-y-3">
          {[
            {
              id: "1",
              name: "Mecánica General",
              description: "Mantenimiento y reparaciones básicas",
              icon: "construct" as IconName,
            },
            {
              id: "2",
              name: "Electricidad",
              description: "Sistema eléctrico del vehículo",
              icon: "flash" as IconName,
            },
            {
              id: "3",
              name: "Suspensión",
              description: "Suspensión y dirección",
              icon: "car" as IconName,
            },
            {
              id: "4",
              name: "Frenos",
              description: "Sistema de frenos",
              icon: "stop-circle" as IconName,
            },
            {
              id: "5",
              name: "Motor",
              description: "Reparaciones del motor",
              icon: "settings" as IconName,
            },
          ].map((service) => (
            <TouchableOpacity
              key={service.id}
              onPress={() => navigateTo(`/services/${service.id}`)}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-blue-500 rounded-lg items-center justify-center mr-4">
                  <Ionicons name={service.icon} size={24} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {service.name}
                  </Text>
                  <Text className="text-gray-600">{service.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
