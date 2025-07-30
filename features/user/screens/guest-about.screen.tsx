import { MaterialSymbol } from "@/components/material-symbol";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ScreenHeader } from "@/components/screen-header";
import { navigateTo } from "@/features/shared/routes";

export default function GuestAboutScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Acerca de Mecapal"
        subtitle="Conectamos usuarios con transportistas confiables"
      />

      <View className="p-4">
        {/* Hero Section */}
        <View className="bg-blue-600 p-6 rounded-lg mb-6 items-center">
          <MaterialSymbol name="rocket_launch" size={48} color="text-white" />
          <Text className="text-white text-xl font-bold text-center mt-2">
            Tu plataforma de transporte de confianza
          </Text>
          <Text className="text-blue-100 text-center mt-1">
            Conectamos usuarios con transportistas verificados
          </Text>
        </View>

        {/* What We Do */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            ¿Qué hacemos?
          </Text>
          <View className="space-y-3">
            {[
              {
                icon: "connect_without_contact",
                title: "Conexión Directa",
                description:
                  "Conectamos usuarios con transportistas verificados en tiempo real",
              },
              {
                icon: "security",
                title: "Seguridad Garantizada",
                description:
                  "Todos nuestros transportistas pasan por un proceso de verificación riguroso",
              },
              {
                icon: "speed",
                title: "Servicio Rápido",
                description:
                  "Encuentra y reserva transporte en cuestión de minutos",
              },
              {
                icon: "support_agent",
                title: "Soporte 24/7",
                description: "Estamos aquí para ayudarte en cualquier momento",
              },
            ].map((item, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View className="w-12 h-12 bg-blue-100 rounded-lg items-center justify-center mr-4">
                    <MaterialSymbol
                      name={item.icon}
                      size={24}
                      color="text-blue-500"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </Text>
                    <Text className="text-gray-600">{item.description}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Services */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Nuestros Servicios
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {[
              { icon: "home", name: "Mudanzas", color: "bg-blue-500" },
              {
                icon: "inventory_2",
                name: "Carga General",
                color: "bg-green-500",
              },
              {
                icon: "construction",
                name: "Construcción",
                color: "bg-orange-500",
              },
              {
                icon: "local_shipping",
                name: "Envíos",
                color: "bg-purple-500",
              },
              {
                icon: "directions_car",
                name: "Pasajeros",
                color: "bg-red-500",
              },
              {
                icon: "delivery_dining",
                name: "Entrega",
                color: "bg-teal-500",
              },
            ].map((service, index) => (
              <TouchableOpacity
                key={index}
                className="w-[48%] bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-100"
              >
                <View className="items-center">
                  <View
                    className={`w-12 h-12 ${service.color} rounded-lg items-center justify-center mb-3`}
                  >
                    <MaterialSymbol
                      name={service.icon}
                      size={24}
                      color="text-white"
                    />
                  </View>
                  <Text className="text-gray-800 font-semibold text-center">
                    {service.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Statistics */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Nuestros Números
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol name="people" size={32} color="text-blue-500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  10K+
                </Text>
                <Text className="text-gray-600">Usuarios Activos</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="directions_car"
                  size={32}
                  color="text-green-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  500+
                </Text>
                <Text className="text-gray-600">Transportistas</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol name="star" size={32} color="text-yellow-500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  4.8
                </Text>
                <Text className="text-gray-600">Calificación</Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm">
              <View className="items-center">
                <MaterialSymbol
                  name="receipt_long"
                  size={32}
                  color="text-purple-500"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  50K+
                </Text>
                <Text className="text-gray-600">Servicios</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View className="bg-blue-600 p-6 rounded-lg items-center">
          <MaterialSymbol name="rocket_launch" size={32} color="text-white" />
          <Text className="text-white text-xl font-bold text-center mt-2">
            ¿Listo para empezar?
          </Text>
          <Text className="text-blue-100 text-center mt-1 mb-4">
            Únete a miles de usuarios que ya confían en Mecapal
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/auth/register")}
              className="flex-1 bg-white p-3 rounded-lg"
            >
              <Text className="text-blue-600 font-semibold text-center">
                Crear Cuenta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/auth")}
              className="flex-1 bg-transparent border border-white p-3 rounded-lg"
            >
              <Text className="text-white font-semibold text-center">
                Iniciar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
