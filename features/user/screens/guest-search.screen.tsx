import { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenHeader } from '@/components/screen-header';

interface Transporter {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  reviews: number;
  distance: string;
  available: boolean;
  price: string;
}

export default function GuestSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'available', label: 'Disponibles' },
    { id: 'nearby', label: 'Cercanos' },
    { id: 'rated', label: 'Mejor Calificados' },
  ];

  const transporters: Transporter[] = [
    {
      id: '1',
      name: 'Carlos López',
      vehicle: 'Toyota Hilux',
      rating: 4.8,
      reviews: 45,
      distance: '2.5 km',
      available: true,
      price: '$15/km',
    },
    {
      id: '2',
      name: 'María García',
      vehicle: 'Ford Transit',
      rating: 4.9,
      reviews: 32,
      distance: '1.8 km',
      available: true,
      price: '$18/km',
    },
    {
      id: '3',
      name: 'Juan Pérez',
      vehicle: 'Nissan Frontier',
      rating: 4.6,
      reviews: 28,
      distance: '3.2 km',
      available: false,
      price: '$16/km',
    },
  ];

  const renderTransporter = ({ item }: { item: Transporter }) => (
    <TouchableOpacity className="mb-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <View className="mb-3 flex-row items-start justify-between">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {item.name}
          </Text>
          <Text className="text-gray-600">{item.vehicle}</Text>
          <Text className="text-sm text-gray-500">{item.distance}</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg font-bold text-blue-600">{item.price}</Text>
          <View className="mt-1 flex-row items-center">
            <MaterialCommunityIcons name="star" size={16} color={COLORS.warning} />
            <Text className="ml-1 text-gray-600">{item.rating}</Text>
            <Text className="ml-1 text-sm text-gray-500">({item.reviews})</Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View
            className={`mr-2 h-3 w-3 rounded-full ${
              item.available ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <Text
            className={`text-sm font-medium ${
              item.available ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {item.available ? 'Disponible' : 'No disponible'}
          </Text>
        </View>
        <TouchableOpacity className="rounded-lg bg-blue-500 px-4 py-2">
          <Text className="font-semibold text-white">Contactar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Buscar Transporte"
        subtitle="Encuentra el transportista ideal"
      />

      <View className="p-4">
        {/* Search Bar */}
        <View className="mb-6">
          <View className="relative">
            <View className="absolute left-3 top-3 z-10">
              <MaterialCommunityIcons name="magnify" size={20} color={COLORS.lightGray[400]} />
            </View>
            <TextInput
              className="rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4"
              placeholder="Buscar por ubicación o servicio..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Filters */}
        <View className="mb-6">
          <Text className="mb-3 text-lg font-semibold text-gray-800">
            Filtros
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-2">
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  onPress={() => setSelectedFilter(filter.id)}
                  className={`rounded-lg px-4 py-2 ${
                    selectedFilter === filter.id ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      selectedFilter === filter.id
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Results */}
        <View className="mb-6">
          <Text className="mb-3 text-lg font-semibold text-gray-800">
            Transportistas Disponibles
          </Text>
          <FlatList
            data={transporters}
            renderItem={renderTransporter}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Call to Action */}
        <View className="items-center rounded-lg bg-blue-600 p-6">
          <MaterialCommunityIcons name="magnify" size={32} color={COLORS.white} />
          <Text className="mt-2 text-center text-xl font-bold text-white">
            ¿No encuentras lo que buscas?
          </Text>
          <Text className="mb-4 mt-1 text-center text-blue-100">
            Crea tu cuenta para acceder a más opciones
          </Text>
          <TouchableOpacity className="rounded-lg bg-white px-6 py-3">
            <Text className="font-semibold text-blue-600">Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
