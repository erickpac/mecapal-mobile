import { Text, View, ScrollView } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { ScreenHeader } from "@/components/screen-header";

export default function TransporterEarningsScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Mis Ganancias"
        subtitle="Revisa tus ingresos y estadísticas"
      />

      <View className="p-4">
        {/* Resumen de Ganancias */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Resumen del Mes
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="account_balance_wallet"
                  size={32}
                  color="text-green-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $8,450
                </Text>
                <Text className="text-gray-600">Ganancias Totales</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="trending_up"
                  size={32}
                  color="text-blue-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $2,150
                </Text>
                <Text className="text-gray-600">Esta Semana</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="receipt_long"
                  size={32}
                  color="text-orange-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  45
                </Text>
                <Text className="text-gray-600">Pedidos Completados</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol name="star" size={32} color="text-red-500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  4.8
                </Text>
                <Text className="text-gray-600">Calificación Promedio</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Gráfico de Ganancias */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Ganancias por Semana
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm">
            <View className="flex-row items-end justify-between h-32">
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 40 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Lun</Text>
              </View>
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 60 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Mar</Text>
              </View>
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 80 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Mié</Text>
              </View>
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 50 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Jue</Text>
              </View>
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 90 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Vie</Text>
              </View>
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 70 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Sáb</Text>
              </View>
              <View className="items-center">
                <View
                  className="bg-blue-500 w-8 rounded-t"
                  style={{ height: 30 }}
                />
                <Text className="text-xs mt-1 text-gray-600">Dom</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Transacciones Recientes */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            Transacciones Recientes
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                customer: "Juan Pérez",
                amount: "$120",
                date: "Hoy, 14:30",
                status: "Completado",
              },
              {
                id: "2",
                customer: "María García",
                amount: "$85",
                date: "Hoy, 12:15",
                status: "Completado",
              },
              {
                id: "3",
                customer: "Carlos López",
                amount: "$95",
                date: "Ayer, 18:45",
                status: "Completado",
              },
              {
                id: "4",
                customer: "Ana Martínez",
                amount: "$150",
                date: "Ayer, 16:20",
                status: "Completado",
              },
            ].map((transaction) => (
              <View
                key={transaction.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {transaction.customer}
                    </Text>
                    <Text className="text-gray-600">{transaction.date}</Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-lg font-bold text-green-600">
                      {transaction.amount}
                    </Text>
                    <Text className="text-sm text-green-500 font-medium">
                      {transaction.status}
                    </Text>
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
