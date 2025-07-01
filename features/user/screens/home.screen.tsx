import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { navigateTo } from "@/utils/navigation";

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
        <Text className="text-gray-600 mt-1">¿Necesitas transporte hoy?</Text>
      </View>

      <View className="p-4">
        {/* Quick Search */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Buscar Transportista
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/search")}
            className="bg-blue-500 p-4 rounded-lg items-center"
          >
            <Ionicons name="search" size={32} color="white" />
            <Text className="text-white font-semibold mt-2 text-lg">
              Buscar Transportistas Disponibles
            </Text>
            <Text className="text-blue-100 mt-1 text-center">
              Encuentra el transporte que necesitas
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Types */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Tipos de Servicio
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                name: "Mudanzas",
                icon: "home" as IconName,
                color: "bg-blue-500",
                description: "Traslado de muebles y enseres",
              },
              {
                id: "2",
                name: "Carga General",
                icon: "cube" as IconName,
                color: "bg-green-500",
                description: "Mercancías y productos",
              },
              {
                id: "3",
                name: "Materiales de Construcción",
                icon: "construct" as IconName,
                color: "bg-orange-500",
                description: "Arena, grava, cemento, etc.",
              },
              {
                id: "4",
                name: "Entrega/Recolección",
                icon: "swap-horizontal" as IconName,
                color: "bg-purple-500",
                description: "Servicios de logística",
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

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="search" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                Buscar Transporte
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/history")}
              className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="time" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                Mi Historial
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/profile")}
              className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="person" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Mi Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/settings")}
              className="bg-gray-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="settings" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                Configuración
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Actividad Reciente
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-gray-600 text-center">
              No tienes actividad reciente
            </Text>
            <Text className="text-gray-500 text-center text-sm mt-1">
              Los transportistas que contactes aparecerán aquí
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
