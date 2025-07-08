import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { ScreenHeader } from "@/components/screen-header";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos" },
    { id: "available", label: "Disponibles" },
    { id: "nearby", label: "Cercanos" },
    { id: "rated", label: "Mejor Calificados" },
  ];

  const transporters: Transporter[] = [
    {
      id: "1",
      name: "Carlos López",
      vehicle: "Toyota Hilux",
      rating: 4.8,
      reviews: 45,
      distance: "2.5 km",
      available: true,
      price: "$15/km",
    },
    {
      id: "2",
      name: "María García",
      vehicle: "Ford Transit",
      rating: 4.9,
      reviews: 32,
      distance: "1.8 km",
      available: true,
      price: "$18/km",
    },
    {
      id: "3",
      name: "Juan Pérez",
      vehicle: "Nissan Frontier",
      rating: 4.6,
      reviews: 28,
      distance: "3.2 km",
      available: false,
      price: "$16/km",
    },
  ];

  const renderTransporter = ({ item }: { item: Transporter }) => (
    <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-3">
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {item.name}
          </Text>
          <Text className="text-gray-600">{item.vehicle}</Text>
          <Text className="text-gray-500 text-sm">{item.distance}</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg font-bold text-blue-600">{item.price}</Text>
          <View className="flex-row items-center mt-1">
            <MaterialSymbol name="star" size={16} color="text-yellow-500" />
            <Text className="text-gray-600 ml-1">{item.rating}</Text>
            <Text className="text-gray-500 text-sm ml-1">({item.reviews})</Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <View
            className={`w-3 h-3 rounded-full mr-2 ${
              item.available ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <Text
            className={`text-sm font-medium ${
              item.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.available ? "Disponible" : "No disponible"}
          </Text>
        </View>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
          <Text className="text-white font-semibold">Contactar</Text>
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
            <MaterialSymbol
              name="search"
              size={20}
              color="text-gray-400"
              className="absolute left-3 top-3 z-10"
            />
            <TextInput
              className="bg-white pl-10 pr-4 py-3 rounded-lg border border-gray-200"
              placeholder="Buscar por ubicación o servicio..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Filters */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-3 text-gray-800">
            Filtros
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-2">
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  onPress={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === filter.id ? "bg-blue-500" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      selectedFilter === filter.id
                        ? "text-white"
                        : "text-gray-700"
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
          <Text className="text-lg font-semibold mb-3 text-gray-800">
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
        <View className="bg-blue-600 p-6 rounded-lg items-center">
          <MaterialSymbol name="search" size={32} color="text-white" />
          <Text className="text-white text-xl font-bold text-center mt-2">
            ¿No encuentras lo que buscas?
          </Text>
          <Text className="text-blue-100 text-center mt-1 mb-4">
            Crea tu cuenta para acceder a más opciones
          </Text>
          <TouchableOpacity className="bg-white px-6 py-3 rounded-lg">
            <Text className="text-blue-600 font-semibold">Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
