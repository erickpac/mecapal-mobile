import { MaterialSymbol } from "@/components/material-symbol";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ScreenHeader } from "@/components/screen-header";
import { navigateTo } from "@/features/shared/routes";

export default function GuestAuthScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader title="Acceso" subtitle="Inicia sesión o crea tu cuenta" />

      <View className="p-4">
        {/* Welcome Banner */}
        <View className="mb-6 items-center rounded-lg bg-blue-600 p-6">
          <MaterialSymbol name="rocket_launch" size={48} color="text-white" />
          <Text className="mt-2 text-center text-xl font-bold text-white">
            ¡Bienvenido a Mecapal!
          </Text>
          <Text className="mt-1 text-center text-blue-100">
            Conectamos usuarios con transportistas confiables
          </Text>
        </View>

        {/* Auth Options */}
        <View className="mb-6 space-y-4">
          <TouchableOpacity
            onPress={() => navigateTo("/auth/register")}
            className="items-center rounded-lg bg-green-500 p-4"
          >
            <MaterialSymbol name="person_add" size={32} color="text-white" />
            <Text className="mt-2 text-lg font-semibold text-white">
              Crear Cuenta
            </Text>
            <Text className="mt-1 text-center text-green-100">
              Únete a nuestra comunidad
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo("/auth")}
            className="items-center rounded-lg bg-blue-500 p-4"
          >
            <MaterialSymbol name="login" size={32} color="text-white" />
            <Text className="mt-2 text-lg font-semibold text-white">
              Iniciar Sesión
            </Text>
            <Text className="mt-1 text-center text-blue-100">
              Accede a tu cuenta existente
            </Text>
          </TouchableOpacity>
        </View>

        {/* Benefits */}
        <View className="mb-6">
          <Text className="mb-4 text-lg font-semibold text-gray-800">
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
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <View className="flex-row items-center">
                  <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
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
          <Text className="mb-4 text-lg font-semibold text-gray-800">
            Acciones Rápidas
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="mb-4 w-[48%] items-center rounded-lg bg-blue-500 p-4"
            >
              <MaterialSymbol name="search" size={24} color="text-blue-500" />
              <Text className="mt-2 font-semibold text-white">Explorar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/about")}
              className="mb-4 w-[48%] items-center rounded-lg bg-gray-500 p-4"
            >
              <MaterialSymbol name="info" size={24} color="text-gray-500" />
              <Text className="mt-2 font-semibold text-white">Acerca de</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Call to Action */}
        <View className="items-center rounded-lg bg-blue-600 p-6">
          <MaterialSymbol name="star" size={32} color="text-white" />
          <Text className="mt-2 text-center text-xl font-bold text-white">
            ¿Listo para empezar?
          </Text>
          <Text className="mb-4 mt-1 text-center text-blue-100">
            Crea tu cuenta y accede a todos los beneficios
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/auth/register")}
              className="flex-1 rounded-lg bg-white p-3"
            >
              <Text className="text-center font-semibold text-blue-600">
                Crear Cuenta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/auth")}
              className="flex-1 rounded-lg border border-white bg-transparent p-3"
            >
              <Text className="text-center font-semibold text-white">
                Iniciar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
