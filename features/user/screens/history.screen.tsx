import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { ScreenHeader } from '@/components/screen-header';
import { COLORS } from '@/consts/colors';

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
          <Text className="mb-3 text-lg font-semibold text-gray-800">
            Filtrar por
          </Text>
          <View className="flex-row space-x-2">
            <TouchableOpacity className="rounded-lg bg-blue-500 px-4 py-2">
              <Text className="font-medium text-white">Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg bg-gray-200 px-4 py-2">
              <Text className="font-medium text-gray-700">Completados</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg bg-gray-200 px-4 py-2">
              <Text className="font-medium text-gray-700">Cancelados</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* History Items */}
        <View className="space-y-4">
          {[
            {
              id: '1',
              service: 'Transporte de Carga',
              transporter: 'Carlos López',
              date: '15 Mar 2024',
              status: 'Completado',
              amount: '$150',
              pickup: 'Av. Principal 123',
              delivery: 'Calle Secundaria 456',
              rating: 5,
            },
            {
              id: '2',
              service: 'Mudanza',
              transporter: 'María García',
              date: '10 Mar 2024',
              status: 'Completado',
              amount: '$300',
              pickup: 'Plaza Central',
              delivery: 'Zona Residencial',
              rating: 4,
            },
            {
              id: '3',
              service: 'Entrega Urgente',
              transporter: 'Juan Pérez',
              date: '5 Mar 2024',
              status: 'Cancelado',
              amount: '$80',
              pickup: 'Centro Comercial',
              delivery: 'Oficina Norte',
              rating: null,
            },
          ].map((item) => (
            <View
              key={item.id}
              className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
            >
              <View className="mb-3 flex-row items-start justify-between">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {item.service}
                  </Text>
                  <Text className="text-gray-600">
                    Transportista: {item.transporter}
                  </Text>
                  <Text className="text-sm text-gray-500">{item.date}</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold text-green-600">
                    {item.amount}
                  </Text>
                  <Text
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === 'Completado'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              <View className="mb-3 space-y-2">
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="map-marker" size={14} color={COLORS.darkGray[400]} />
                  <Text className="ml-1 text-sm text-gray-600">
                    {item.pickup}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="map-marker" size={14} color={COLORS.darkGray[400]} />
                  <Text className="ml-1 text-sm text-gray-600">
                    {item.delivery}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center justify-between">
                {item.rating && (
                  <View className="flex-row items-center">
                    <MaterialCommunityIcons name="star" size={16} color={COLORS.warning} />
                    <Text className="ml-1 text-gray-600">{item.rating}/5</Text>
                  </View>
                )}
                <TouchableOpacity className="rounded-lg bg-blue-500 px-4 py-2">
                  <Text className="font-semibold text-white">Ver Detalles</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="mt-6">
          <Text className="mb-4 text-lg font-semibold text-gray-800">
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="mb-4 w-[48%] items-center rounded-lg bg-blue-500 p-4">
              <MaterialCommunityIcons name="car" size={32} color={COLORS.white} />
              <Text className="mt-2 font-semibold text-white">
                Nuevo Servicio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 w-[48%] items-center rounded-lg bg-green-500 p-4">
              <MaterialCommunityIcons name="star" size={32} color={COLORS.white} />
              <Text className="mt-2 font-semibold text-white">Calificar</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 w-[48%] items-center rounded-lg bg-purple-500 p-4">
              <MaterialCommunityIcons name="wallet" size={32} color={COLORS.white} />
              <Text className="mt-2 font-semibold text-white">Pagos</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 w-[48%] items-center rounded-lg bg-orange-500 p-4">
              <MaterialCommunityIcons name="calendar-today" size={32} color={COLORS.white} />
              <Text className="mt-2 font-semibold text-white">Programar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
