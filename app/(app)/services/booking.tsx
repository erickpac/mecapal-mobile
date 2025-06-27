import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function BookingScreen() {
  const { serviceId } = useLocalSearchParams<{ serviceId: string }>();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your API
    console.log("Booking confirmed:", {
      serviceId,
      date: selectedDate,
      time: selectedTime,
      notes,
    });

    // Navigate back to services
    router.back();
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
            Reservar Servicio
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-4">
        <View className="space-y-6">
          {/* Service Info */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-xl font-semibold text-gray-800 mb-2">
              Mantenimiento General
            </Text>
            <Text className="text-lg text-blue-600 font-semibold">$90.00</Text>
            <Text className="text-gray-600">Duración estimada: 2-3 horas</Text>
          </View>

          {/* Date Selection */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Seleccionar Fecha
            </Text>
            <TextInput
              value={selectedDate}
              onChangeText={setSelectedDate}
              placeholder="DD/MM/YYYY"
              className="border border-gray-300 rounded-lg p-3 text-gray-800"
            />
          </View>

          {/* Time Selection */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Seleccionar Hora
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map(
                (time) => (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedTime === time
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <Text
                      className={`font-medium ${
                        selectedTime === time ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          {/* Notes */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Notas Adicionales
            </Text>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Agregar notas o comentarios..."
              multiline
              numberOfLines={4}
              className="border border-gray-300 rounded-lg p-3 text-gray-800"
              textAlignVertical="top"
            />
          </View>

          {/* Vehicle Info */}
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Información del Vehículo
            </Text>
            <View className="space-y-3">
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Marca:</Text>
                <Text className="font-semibold">Toyota</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Modelo:</Text>
                <Text className="font-semibold">Corolla</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Año:</Text>
                <Text className="font-semibold">2020</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Placa:</Text>
                <Text className="font-semibold">ABC-123</Text>
              </View>
            </View>
          </View>

          {/* Confirm Button */}
          <TouchableOpacity
            onPress={handleConfirmBooking}
            className="bg-blue-500 p-4 rounded-lg"
          >
            <Text className="text-white text-center font-semibold text-lg">
              Confirmar Reserva
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
