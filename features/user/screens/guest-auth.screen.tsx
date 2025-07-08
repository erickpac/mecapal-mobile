import { MaterialSymbol } from "@/components/material-symbol";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ScreenHeader } from "@/components/screen-header";
import { navigateTo } from "@/utils/navigation";

export default function GuestAuthScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader title="Acceso" subtitle="Inicia sesión o crea tu cuenta" />

      <View className="p-4">
        {/* Welcome Banner */}
        <View className="bg-blue-600 p-6 rounded-lg mb-6 items-center">
          <MaterialSymbol name="rocket_launch" size={48} color="text-white" />
          <Text className="text-white text-xl font-bold text-center mt-2">
            ¡Bienvenido a Mecapal!
          </Text>
          <Text className="text-blue-100 text-center mt-1">
            Conectamos usuarios con transportistas confiables
          </Text>
        </View>

        {/* Auth Options */}
        <View className="space-y-4 mb-6">
          <TouchableOpacity
            onPress={() => navigateTo("/auth/register")}
            className="bg-green-500 p-4 rounded-lg items-center"
          >
            <MaterialSymbol name="person_add" size={32} color="text-white" />
            <Text className="text-white font-semibold mt-2 text-lg">
              Crear Cuenta
            </Text>
            <Text className="text-green-100 mt-1 text-center">
              Únete a nuestra comunidad
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo("/auth/login")}
            className="bg-blue-500 p-4 rounded-lg items-center"
          >
            <MaterialSymbol name="login" size={32} color="text-blue-500" />
            <Text className="text-white font-semibold mt-2 text-lg">
              Iniciar Sesión
            </Text>
            <Text className="text-blue-100 mt-1 text-center">
              Accede a tu cuenta existente
            </Text>
          </TouchableOpacity>
        </View>

        {/* Benefits */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Beneficios de registrarte
          </Text>
          <View className="space-y-3">
            {[
              {
                icon: "star",
                title: "Acceso completo",
                description: "Reserva servicios sin restricciones",
              },
              {
                icon: "history",
                title: "Historial personal",
                description: "Revisa todos tus servicios anteriores",
              },
              {
                icon: "favorite",
                title: "Favoritos",
                description: "Guarda tus transportistas preferidos",
              },
              {
                icon: "notifications",
                title: "Notificaciones",
                description: "Recibe actualizaciones en tiempo real",
              },
            ].map((benefit, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-4">
                    <MaterialSymbol
                      name={benefit.icon}
                      size={20}
                      color="text-blue-500"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {benefit.title}
                    </Text>
                    <Text className="text-gray-600">{benefit.description}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <MaterialSymbol name="search" size={24} color="text-blue-500" />
              <Text className="text-white font-semibold mt-2">Explorar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/about")}
              className="bg-gray-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <MaterialSymbol name="info" size={24} color="text-gray-500" />
              <Text className="text-white font-semibold mt-2">Acerca de</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Call to Action */}
        <View className="bg-blue-600 p-6 rounded-lg items-center">
          <MaterialSymbol name="star" size={32} color="text-white" />
          <Text className="text-white text-xl font-bold text-center mt-2">
            ¿Listo para empezar?
          </Text>
          <Text className="text-blue-100 text-center mt-1 mb-4">
            Crea tu cuenta y accede a todos los beneficios
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
              onPress={() => navigateTo("/auth/login")}
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
