import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserAppointmentsScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">Mis Citas</Text>
        <Text className="text-gray-600 mt-1">
          Gestiona tus citas y reservas
        </Text>
      </View>

      <View className="p-4">
        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mb-6 items-center">
          <Ionicons name="add" size={24} color="white" />
          <Text className="text-white font-semibold mt-2">Nueva Cita</Text>
        </TouchableOpacity>

        <Text className="text-lg font-semibold mb-4 text-gray-800">
          Citas Programadas
        </Text>

        <View className="space-y-3">
          {[
            {
              id: "1",
              service: "Mecánica General",
              date: "15 Mar 2024",
              time: "10:00 AM",
              status: "Confirmada",
            },
            {
              id: "2",
              service: "Cambio de Aceite",
              date: "20 Mar 2024",
              time: "2:00 PM",
              status: "Pendiente",
            },
          ].map((appointment) => (
            <View
              key={appointment.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">
                    {appointment.service}
                  </Text>
                  <Text className="text-gray-600">
                    {appointment.date} - {appointment.time}
                  </Text>
                </View>
                <View className="items-end">
                  <Text
                    className={`text-sm font-medium ${
                      appointment.status === "Confirmada"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {appointment.status}
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
