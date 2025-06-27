import { Text, View, ScrollView } from "react-native";

export default function TransporterScheduleScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">Mi Horario</Text>
        <Text className="text-gray-600 mt-1">Gestiona tu disponibilidad</Text>
      </View>

      <View className="p-4">
        {/* Horario de Hoy */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Horario de Hoy
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold text-gray-800">
                Lunes, 15 de Marzo
              </Text>
              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-600 text-sm font-medium">
                  Disponible
                </Text>
              </View>
            </View>

            <View className="space-y-3">
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-600">Horario de Trabajo</Text>
                <Text className="font-semibold">8:00 AM - 6:00 PM</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-600">Pedidos Programados</Text>
                <Text className="font-semibold text-blue-600">5</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-600">Tiempo Libre</Text>
                <Text className="font-semibold text-green-600">2 horas</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Próximos Días */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Próximos Días
          </Text>
          <View className="space-y-3">
            {[
              {
                day: "Martes, 16 Mar",
                status: "Disponible",
                orders: 3,
                hours: "8:00 AM - 6:00 PM",
              },
              {
                day: "Miércoles, 17 Mar",
                status: "Disponible",
                orders: 4,
                hours: "8:00 AM - 6:00 PM",
              },
              {
                day: "Jueves, 18 Mar",
                status: "Disponible",
                orders: 2,
                hours: "8:00 AM - 6:00 PM",
              },
              {
                day: "Viernes, 19 Mar",
                status: "Disponible",
                orders: 6,
                hours: "8:00 AM - 6:00 PM",
              },
            ].map((schedule, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-lg font-semibold text-gray-800">
                      {schedule.day}
                    </Text>
                    <Text className="text-gray-600">{schedule.hours}</Text>
                  </View>
                  <View className="items-end">
                    <View className="bg-green-100 px-3 py-1 rounded-full mb-2">
                      <Text className="text-green-600 text-sm font-medium">
                        {schedule.status}
                      </Text>
                    </View>
                    <Text className="text-sm text-gray-600">
                      {schedule.orders} pedidos
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Configuración de Horario */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Configuración de Horario
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <View className="space-y-4">
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-800">Horario Automático</Text>
                <View className="bg-blue-100 px-3 py-1 rounded-full">
                  <Text className="text-blue-600 text-sm font-medium">
                    Activo
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-800">Notificaciones</Text>
                <View className="bg-green-100 px-3 py-1 rounded-full">
                  <Text className="text-green-600 text-sm font-medium">
                    Activadas
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-800">Días de Trabajo</Text>
                <Text className="text-gray-600">Lun - Vie</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
