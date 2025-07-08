import { MaterialSymbol } from "@/components/material-symbol";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
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
          <MaterialSymbol name="add" size={24} color="text-white" />
          <Text className="text-white font-semibold mt-2">
            Agregar Vehículo
          </Text>
        </TouchableOpacity>

        <Text className="text-lg font-semibold mb-4 text-gray-800">
          Vehículos Registrados
        </Text>

        <View className="space-y-4">
          {[
            {
              id: "1",
              type: "Camión",
              model: "Toyota Hilux",
              year: "2020",
              plate: "ABC-123",
              status: "Disponible",
              capacity: "1.5 toneladas",
            },
            {
              id: "2",
              type: "Furgón",
              model: "Ford Transit",
              year: "2019",
              plate: "XYZ-789",
              status: "En Servicio",
              capacity: "2 toneladas",
            },
            {
              id: "3",
              type: "Pickup",
              model: "Nissan Frontier",
              year: "2021",
              plate: "DEF-456",
              status: "Mantenimiento",
              capacity: "1 tonelada",
            },
          ].map((vehicle) => (
            <View
              key={vehicle.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row justify-between items-start mb-3">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {vehicle.model}
                  </Text>
                  <Text className="text-gray-600">{vehicle.year}</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-blue-600">
                    {vehicle.plate}
                  </Text>
                  <Text
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      vehicle.status === "Disponible"
                        ? "bg-green-100 text-green-800"
                        : vehicle.status === "En Servicio"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {vehicle.status}
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-gray-600">Tipo: {vehicle.type}</Text>
                  <Text className="text-gray-600">
                    Capacidad: {vehicle.capacity}
                  </Text>
                </View>
                <TouchableOpacity className="bg-gray-100 p-2 rounded-lg">
                  <MaterialSymbol
                    name="chevron_right"
                    size={16}
                    color="text-gray-400"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
