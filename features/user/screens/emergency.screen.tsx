import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function UserEmergencyScreen() {
  const handleCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Emergency Contact */}
        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            Contacto de Emergencia
          </Text>
          <TouchableOpacity
            className="mb-4 items-center rounded-lg bg-red-500 p-6"
            onPress={() => handleCall('1-800-EMERGENCY')}
          >
            <MaterialCommunityIcons name="phone" size={48} color={COLORS.white} />
            <Text className="mt-2 text-xl font-bold text-white">
              Llamar Ahora
            </Text>
            <Text className="text-lg text-red-100">1-800-EMERGENCY</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Types */}
        <View className="mb-6">
          <Text className="mb-4 text-lg font-semibold text-gray-800">
            Tipos de Emergencia
          </Text>
          <View className="space-y-3">
            {[
              {
                type: 'Avería en Carretera',
                description: 'Vehículo no arranca o se avería',
                icon: 'alert' as const,
                color: 'bg-red-500',
              },
              {
                type: 'Accidente',
                description: 'Accidente de tráfico',
                icon: 'alert-circle' as const,
                color: 'bg-red-600',
              },
              {
                type: 'Pérdida de Combustible',
                description: 'Se quedó sin gasolina',
                icon: 'gas-station' as const,
                color: 'bg-orange-500',
              },
              {
                type: 'Neumático Pinchado',
                description: 'Neumático desinflado',
                icon: 'car-tire-alert' as const,
                color: 'bg-yellow-500',
              },
            ].map((emergency, index) => (
              <TouchableOpacity
                key={index}
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <View className="flex-row items-center">
                  <View
                    className={`h-12 w-12 ${emergency.color} mr-4 items-center justify-center rounded-lg`}
                  >
                    <MaterialCommunityIcons
                      name={emergency.icon}
                      size={24}
                      color={COLORS.white}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {emergency.type}
                    </Text>
                    <Text className="text-gray-600">
                      {emergency.description}
                    </Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={20} color={COLORS.lightGray[400]} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Location Information */}
        <View className="mb-6">
          <Text className="mb-4 text-lg font-semibold text-gray-800">
            Información de Ubicación
          </Text>
          <View className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <View className="mb-4 flex-row items-center">
              <MaterialCommunityIcons name="map-marker" size={24} color={COLORS.info} />
              <Text className="ml-2 text-lg font-semibold text-gray-800">
                Ubicación Actual
              </Text>
            </View>
            <Text className="mb-4 text-gray-600">
              Av. Principal 123, Ciudad
            </Text>
            <TouchableOpacity className="items-center rounded-lg bg-blue-500 p-3">
              <Text className="font-semibold text-white">
                Compartir Ubicación
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Emergency Services */}
        <View className="mb-6">
          <Text className="mb-4 text-lg font-semibold text-gray-800">
            Servicios de Emergencia
          </Text>
          <View className="space-y-3">
            {[
              { service: 'Grúa', phone: '1-800-GRUA', available: '24/7' },
              {
                service: 'Mecánico',
                phone: '1-800-MECANICO',
                available: '24/7',
              },
              { service: 'Gasolina', phone: '1-800-GAS', available: '24/7' },
            ].map((service, index) => (
              <View
                key={index}
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-lg font-semibold text-gray-800">
                      {service.service}
                    </Text>
                    <Text className="text-gray-600">{service.phone}</Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-sm font-medium text-green-600">
                      {service.available}
                    </Text>
                    <TouchableOpacity
                      className="mt-2 rounded-lg bg-green-500 px-4 py-2"
                      onPress={() => handleCall(service.phone)}
                    >
                      <Text className="font-semibold text-white">Llamar</Text>
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
