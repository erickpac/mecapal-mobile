import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { navigateToServicesBooking } from "@/utils/navigation";

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const handleBooking = () => {
    navigateToServicesBooking(id);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <View className="bg-white p-4 border-b border-gray-200">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
        >
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
          <Text className="text-lg font-semibold ml-2 text-gray-800">
            Detalle del Servicio
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-4">
        <View className="space-y-6">
          {/* Service Header */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-2xl font-bold text-gray-800 mb-2">
              Mantenimiento General
            </Text>
            <Text className="text-lg text-blue-600 font-semibold">$90.00</Text>
            <Text className="text-gray-600 mt-2">
              Duración estimada: 2-3 horas
            </Text>
          </View>

          {/* Service Description */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Descripción del Servicio
            </Text>
            <Text className="text-gray-700 leading-6">
              Servicio completo de mantenimiento que incluye cambio de aceite,
              filtros, inspección general del vehículo y diagnóstico básico.
              Ideal para mantener tu vehículo en óptimas condiciones.
            </Text>
          </View>

          {/* Service Includes */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Incluye
            </Text>

            <View className="space-y-3">
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#34C759" />
                <Text className="text-gray-700 ml-3">
                  Cambio de aceite sintético
                </Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#34C759" />
                <Text className="text-gray-700 ml-3">
                  Cambio de filtro de aceite
                </Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#34C759" />
                <Text className="text-gray-700 ml-3">Inspección de frenos</Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#34C759" />
                <Text className="text-gray-700 ml-3">
                  Revisión de niveles de fluidos
                </Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#34C759" />
                <Text className="text-gray-700 ml-3">Diagnóstico básico</Text>
              </View>
            </View>
          </View>

          {/* Technician Info */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Técnico Asignado
            </Text>

            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
                <Ionicons name="person" size={24} color="#007AFF" />
              </View>
              <View className="ml-4">
                <Text className="text-lg font-semibold text-gray-800">
                  Carlos Méndez
                </Text>
                <Text className="text-gray-600">Técnico Certificado</Text>
                <Text className="text-gray-600">5 años de experiencia</Text>
              </View>
            </View>
          </View>

          {/* Booking Button */}
          <TouchableOpacity
            onPress={handleBooking}
            className="bg-blue-500 p-4 rounded-lg"
          >
            <Text className="text-white text-center font-semibold text-lg">
              Reservar Servicio
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
