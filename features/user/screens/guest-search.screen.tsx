import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";
import { useState } from "react";

export default function GuestSearchScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">
          {t("transport.search.title")}
        </Text>
        <Text className="text-gray-600 mt-1">
          {t("transport.search.subtitle")}
        </Text>
      </View>

      {/* Login Banner */}
      <View className="bg-blue-50 p-4 border-b border-blue-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-blue-800 font-semibold">
              {t("transport.search.guest.loginPrompt", {
                defaultValue: "Inicia sesión para reservar",
              })}
            </Text>
            <Text className="text-blue-600 text-sm mt-1">
              {t("transport.search.guest.loginSubtitle", {
                defaultValue: "Necesitas una cuenta para hacer reservas",
              })}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigateTo("/login")}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            <Text className="text-white font-semibold">
              {t("transport.search.guest.login", {
                defaultValue: "Iniciar Sesión",
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4">
        {/* Search Bar */}
        <View className="mb-6">
          <View className="bg-white rounded-lg border border-gray-200 flex-row items-center px-4 py-3">
            <Ionicons name="search" size={20} color="#6B7280" />
            <TextInput
              className="flex-1 ml-3 text-gray-800"
              placeholder={t("transport.search.placeholder", {
                defaultValue: "Buscar servicios de transporte...",
              })}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Popular Services */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.search.popularServices.title", {
              defaultValue: "Servicios Populares",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                name: "Mudanza Residencial",
                description: "Servicios completos de mudanza para hogares",
                price: "$200 - $500",
                rating: 4.8,
                reviews: 124,
                icon: "home",
              },
              {
                id: "2",
                name: "Transporte de Carga",
                description: "Transporte seguro de mercancías y productos",
                price: "$150 - $400",
                rating: 4.6,
                reviews: 89,
                icon: "cube",
              },
              {
                id: "3",
                name: "Materiales de Construcción",
                description: "Entrega de materiales para construcción",
                price: "$100 - $300",
                rating: 4.7,
                reviews: 67,
                icon: "construct",
              },
              {
                id: "4",
                name: "Entrega Urgente",
                description: "Servicios de entrega rápida y urgente",
                price: "$80 - $200",
                rating: 4.9,
                reviews: 156,
                icon: "flash",
              },
            ].map((service) => (
              <View
                key={service.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-start">
                  <View className="w-12 h-12 bg-blue-100 rounded-lg items-center justify-center mr-4">
                    <Ionicons
                      name={service.icon as any}
                      size={24}
                      color="#007AFF"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {service.name}
                    </Text>
                    <Text className="text-gray-600 text-sm mt-1">
                      {service.description}
                    </Text>
                    <View className="flex-row items-center mt-2">
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text className="text-gray-600 text-sm ml-1">
                        {service.rating} ({service.reviews} reseñas)
                      </Text>
                    </View>
                    <Text className="text-green-600 font-semibold mt-1">
                      {service.price}
                    </Text>
                  </View>
                </View>
                <View className="flex-row mt-4 space-x-2">
                  <TouchableOpacity
                    onPress={() => navigateTo("/login")}
                    className="flex-1 bg-blue-500 p-3 rounded-lg"
                  >
                    <Text className="text-white text-center font-semibold">
                      {t("transport.search.guest.reserve", {
                        defaultValue: "Reservar",
                      })}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigateTo("/login")}
                    className="flex-1 bg-gray-500 p-3 rounded-lg"
                  >
                    <Text className="text-white text-center font-semibold">
                      {t("transport.search.guest.viewDetails", {
                        defaultValue: "Ver Detalles",
                      })}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Service Categories */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.search.categories.title", {
              defaultValue: "Categorías de Servicios",
            })}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {[
              { icon: "home", name: "Mudanzas", color: "bg-blue-500" },
              { icon: "cube", name: "Carga", color: "bg-green-500" },
              {
                icon: "construct",
                name: "Construcción",
                color: "bg-orange-500",
              },
              { icon: "flash", name: "Urgente", color: "bg-red-500" },
              { icon: "car", name: "Pasajeros", color: "bg-purple-500" },
              { icon: "bicycle", name: "Mensajería", color: "bg-teal-500" },
            ].map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigateTo("/login")}
                className="w-[48%] bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-100"
              >
                <View className="items-center">
                  <View
                    className={`w-12 h-12 ${category.color} rounded-lg items-center justify-center mb-3`}
                  >
                    <Ionicons
                      name={category.icon as any}
                      size={24}
                      color="white"
                    />
                  </View>
                  <Text className="text-gray-800 font-semibold text-center">
                    {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Call to Action */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
          <Text className="text-white text-xl font-bold text-center mb-2">
            {t("transport.search.guest.cta.title", {
              defaultValue: "¿Encontraste lo que buscabas?",
            })}
          </Text>
          <Text className="text-blue-100 text-center mb-4">
            {t("transport.search.guest.cta.subtitle", {
              defaultValue:
                "Crea tu cuenta para hacer reservas y disfrutar de todos los beneficios",
            })}
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/register")}
              className="flex-1 bg-white p-4 rounded-lg"
            >
              <Text className="text-blue-600 font-bold text-center">
                {t("transport.search.guest.cta.register", {
                  defaultValue: "Crear Cuenta",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="flex-1 bg-transparent border border-white p-4 rounded-lg"
            >
              <Text className="text-white font-bold text-center">
                {t("transport.search.guest.cta.login", {
                  defaultValue: "Iniciar Sesión",
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
