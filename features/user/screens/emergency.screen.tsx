import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconName } from "@/types/navigation";

export default function UserEmergencyScreen() {
  const handleCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Emergency Contact */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Contacto de Emergencia
          </Text>
          <TouchableOpacity
            className="bg-red-500 p-6 rounded-lg mb-4 items-center"
            onPress={() => handleCall("1-800-EMERGENCY")}
          >
            <Ionicons name="call" size={48} color="white" />
            <Text className="text-white font-bold text-xl mt-2">
              Llamar Ahora
            </Text>
            <Text className="text-red-100 text-lg">1-800-EMERGENCY</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Types */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Tipos de Emergencia
          </Text>
          <View className="space-y-3">
            {[
              {
                type: "Avería en Carretera",
                description: "Vehículo no arranca o se avería",
                icon: "warning" as IconName,
                color: "bg-red-500",
              },
              {
                type: "Accidente",
                description: "Accidente de tráfico",
                icon: "alert-circle" as IconName,
                color: "bg-red-600",
              },
              {
                type: "Pérdida de Combustible",
                description: "Se quedó sin gasolina",
                icon: "water" as IconName,
                color: "bg-orange-500",
              },
              {
                type: "Neumático Pinchado",
                description: "Neumático desinflado",
                icon: "car" as IconName,
                color: "bg-yellow-500",
              },
            ].map((emergency, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View
                    className={`w-12 h-12 ${emergency.color} rounded-lg items-center justify-center mr-4`}
                  >
                    <Ionicons name={emergency.icon} size={24} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {emergency.type}
                    </Text>
                    <Text className="text-gray-600">
                      {emergency.description}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Location Information */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Información de Ubicación
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <View className="flex-row items-center mb-4">
              <Ionicons name="location" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-2 text-gray-800">
                Ubicación Actual
              </Text>
            </View>
            <Text className="text-gray-600 mb-4">
              Av. Principal 123, Ciudad
            </Text>
            <TouchableOpacity className="bg-blue-500 p-3 rounded-lg items-center">
              <Text className="text-white font-semibold">
                Compartir Ubicación
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Emergency Services */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Servicios de Emergencia
          </Text>
          <View className="space-y-3">
            {[
              { service: "Grúa", phone: "1-800-GRUA", available: "24/7" },
              {
                service: "Mecánico",
                phone: "1-800-MECANICO",
                available: "24/7",
              },
              { service: "Gasolina", phone: "1-800-GAS", available: "24/7" },
            ].map((service, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-lg font-semibold text-gray-800">
                      {service.service}
                    </Text>
                    <Text className="text-gray-600">{service.phone}</Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-sm text-green-600 font-medium">
                      {service.available}
                    </Text>
                    <TouchableOpacity
                      className="bg-green-500 px-4 py-2 rounded-lg mt-2"
                      onPress={() => handleCall(service.phone)}
                    >
                      <Text className="text-white font-semibold">Llamar</Text>
                    </TouchableOpacity>
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
