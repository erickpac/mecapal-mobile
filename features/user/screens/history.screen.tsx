import { MaterialSymbol } from "@/components/material-symbol";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ScreenHeader } from "@/components/screen-header";

export default function UserHistoryScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Mi Historial"
        subtitle="Revisa tus servicios anteriores"
      />

      <View className="p-4">
        {/* Filter Options */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-3 text-gray-800">
            Filtrar por
          </Text>
          <View className="flex-row space-x-2">
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-medium">Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-lg">
              <Text className="text-gray-700 font-medium">Completados</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-lg">
              <Text className="text-gray-700 font-medium">Cancelados</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* History Items */}
        <View className="space-y-4">
          {[
            {
              id: "1",
              service: "Transporte de Carga",
              transporter: "Carlos López",
              date: "15 Mar 2024",
              status: "Completado",
              amount: "$150",
              pickup: "Av. Principal 123",
              delivery: "Calle Secundaria 456",
              rating: 5,
            },
            {
              id: "2",
              service: "Mudanza",
              transporter: "María García",
              date: "10 Mar 2024",
              status: "Completado",
              amount: "$300",
              pickup: "Plaza Central",
              delivery: "Zona Residencial",
              rating: 4,
            },
            {
              id: "3",
              service: "Entrega Urgente",
              transporter: "Juan Pérez",
              date: "5 Mar 2024",
              status: "Cancelado",
              amount: "$80",
              pickup: "Centro Comercial",
              delivery: "Oficina Norte",
              rating: null,
            },
          ].map((item) => (
            <View
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row justify-between items-start mb-3">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {item.service}
                  </Text>
                  <Text className="text-gray-600">
                    Transportista: {item.transporter}
                  </Text>
                  <Text className="text-gray-500 text-sm">{item.date}</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-green-600">
                    {item.amount}
                  </Text>
                  <Text
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Completado"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              <View className="space-y-2 mb-3">
                <View className="flex-row items-center">
                  <MaterialSymbol
                    name="location_on"
                    size={14}
                    color="text-gray-500"
                  />
                  <Text className="text-gray-600 ml-1 text-sm">
                    {item.pickup}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <MaterialSymbol
                    name="location_on"
                    size={14}
                    color="text-gray-500"
                  />
                  <Text className="text-gray-600 ml-1 text-sm">
                    {item.delivery}
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-between items-center">
                {item.rating && (
                  <View className="flex-row items-center">
                    <MaterialSymbol
                      name="star"
                      size={16}
                      color="text-yellow-500"
                    />
                    <Text className="text-gray-600 ml-1">{item.rating}/5</Text>
                  </View>
                )}
                <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
                  <Text className="text-white font-semibold">Ver Detalles</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="mt-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center">
              <MaterialSymbol
                name="directions_car"
                size={32}
                color="text-white"
              />
              <Text className="text-white font-semibold mt-2">
                Nuevo Servicio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center">
              <MaterialSymbol name="star" size={32} color="text-white" />
              <Text className="text-white font-semibold mt-2">Calificar</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center">
              <MaterialSymbol
                name="account_balance_wallet"
                size={32}
                color="text-white"
              />
              <Text className="text-white font-semibold mt-2">Pagos</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-orange-500 p-4 rounded-lg w-[48%] mb-4 items-center">
              <MaterialSymbol
                name="calendar_today"
                size={32}
                color="text-white"
              />
              <Text className="text-white font-semibold mt-2">Programar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
