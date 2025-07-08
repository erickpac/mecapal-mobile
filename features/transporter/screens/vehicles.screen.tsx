import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenHeader } from "@/components/screen-header";

export default function TransporterVehiclesScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Mis Vehículos"
        subtitle="Gestiona tu flota de vehículos"
      />

      <View className="p-4">
        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mb-6 items-center">
          <Ionicons name="add" size={24} color="white" />
          <Text className="text-white font-semibold mt-2">
            Agregar Vehículo
          </Text>
        </TouchableOpacity>

        <Text className="text-lg font-semibold mb-4 text-gray-800">
          Vehículos Registrados
        </Text>

        <View className="space-y-3">
          {[
            {
              id: "1",
              type: "Camión",
              plate: "ABC-123",
              capacity: "5 toneladas",
              status: "Activo",
            },
            {
              id: "2",
              type: "Furgoneta",
              plate: "XYZ-789",
              capacity: "2 toneladas",
              status: "En mantenimiento",
            },
            {
              id: "3",
              type: "Pickup",
              plate: "DEF-456",
              capacity: "1 tonelada",
              status: "Activo",
            },
          ].map((vehicle) => (
            <View
              key={vehicle.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">
                    {vehicle.type}
                  </Text>
                  <Text className="text-gray-600">Placa: {vehicle.plate}</Text>
                  <Text className="text-gray-500 text-sm">
                    Capacidad: {vehicle.capacity}
                  </Text>
                </View>
                <View className="items-end">
                  <Text
                    className={`text-sm font-medium ${
                      vehicle.status === "Activo"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {vehicle.status}
                  </Text>
                  <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
