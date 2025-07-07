import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";
import { useStore } from "@/store/useStore";

// Type for Ionicons icons
type IconName = keyof typeof Ionicons.glyphMap;

export default function GuestHomeScreen() {
  const { t } = useTranslation();
  const { enterGuestMode } = useStore();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">
          {t("transport.home.guestGreeting", {
            defaultValue: "¡Bienvenido a Mecapal!",
          })}
        </Text>
        <Text className="text-gray-600 mt-1">
          {t("transport.home.guestSubtitle", {
            defaultValue: "Encuentra el transporte que necesitas",
          })}
        </Text>
      </View>

      {/* Login/Register Banner */}
      <View className="bg-blue-50 p-4 border-b border-blue-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-blue-800 font-semibold text-lg">
              {t("transport.home.guest.loginPrompt", {
                defaultValue: "¿Ya tienes cuenta?",
              })}
            </Text>
            <Text className="text-blue-600 text-sm mt-1">
              {t("transport.home.guest.loginSubtitle", {
                defaultValue:
                  "Inicia sesión para acceder a todas las funciones",
              })}
            </Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="bg-blue-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-semibold">
                {t("transport.home.guest.login", {
                  defaultValue: "Iniciar Sesión",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/register")}
              className="bg-green-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-semibold">
                {t("transport.home.guest.register", {
                  defaultValue: "Registrarse",
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="p-4">
        {/* Quick Search */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.quickSearch.title")}
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/search")}
            className="bg-blue-500 p-4 rounded-lg items-center"
          >
            <Ionicons name="search" size={32} color="white" />
            <Text className="text-white font-semibold mt-2 text-lg">
              {t("transport.home.quickSearch.button")}
            </Text>
            <Text className="text-blue-100 mt-1 text-center">
              {t("transport.home.quickSearch.subtitle")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Types */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.serviceTypes.title")}
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                nameKey: "transport.home.serviceTypes.mudanzas.name",
                descriptionKey:
                  "transport.home.serviceTypes.mudanzas.description",
                icon: "home" as IconName,
                color: "bg-blue-500",
              },
              {
                id: "2",
                nameKey: "transport.home.serviceTypes.cargaGeneral.name",
                descriptionKey:
                  "transport.home.serviceTypes.cargaGeneral.description",
                icon: "cube" as IconName,
                color: "bg-green-500",
              },
              {
                id: "3",
                nameKey:
                  "transport.home.serviceTypes.materialesConstruccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.materialesConstruccion.description",
                icon: "construct" as IconName,
                color: "bg-orange-500",
              },
              {
                id: "4",
                nameKey: "transport.home.serviceTypes.entregaRecoleccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.entregaRecoleccion.description",
                icon: "swap-horizontal" as IconName,
                color: "bg-purple-500",
              },
            ].map((service) => (
              <TouchableOpacity
                key={service.id}
                onPress={() => navigateTo("/search")}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View
                    className={`w-12 h-12 ${service.color} rounded-lg items-center justify-center mr-4`}
                  >
                    <Ionicons name={service.icon} size={24} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {t(service.nameKey)}
                    </Text>
                    <Text className="text-gray-600">
                      {t(service.descriptionKey)}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.quickActions.title")}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="search" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.quickActions.searchTransport")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="bg-green-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="person-add" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.guest.createAccount", {
                  defaultValue: "Crear Cuenta",
                })}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="log-in" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.guest.login", {
                  defaultValue: "Iniciar Sesión",
                })}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/settings")}
              className="bg-gray-500 p-4 rounded-lg w-[48%] mb-4 items-center"
            >
              <Ionicons name="settings" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">
                {t("transport.home.quickActions.settings")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Guest Benefits */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.home.guest.benefits.title", {
              defaultValue: "Beneficios de registrarte",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                icon: "star" as IconName,
                title: t("transport.home.guest.benefits.history.title", {
                  defaultValue: "Historial de viajes",
                }),
                description: t(
                  "transport.home.guest.benefits.history.description",
                  {
                    defaultValue: "Accede a tu historial completo de servicios",
                  }
                ),
              },
              {
                icon: "heart" as IconName,
                title: t("transport.home.guest.benefits.favorites.title", {
                  defaultValue: "Favoritos",
                }),
                description: t(
                  "transport.home.guest.benefits.favorites.description",
                  { defaultValue: "Guarda tus transportistas favoritos" }
                ),
              },
              {
                icon: "notifications" as IconName,
                title: t("transport.home.guest.benefits.notifications.title", {
                  defaultValue: "Notificaciones",
                }),
                description: t(
                  "transport.home.guest.benefits.notifications.description",
                  { defaultValue: "Recibe actualizaciones en tiempo real" }
                ),
              },
              {
                icon: "card" as IconName,
                title: t("transport.home.guest.benefits.payment.title", {
                  defaultValue: "Pagos seguros",
                }),
                description: t(
                  "transport.home.guest.benefits.payment.description",
                  { defaultValue: "Métodos de pago seguros y rápidos" }
                ),
              },
            ].map((benefit, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-4">
                    <Ionicons name={benefit.icon} size={20} color="#007AFF" />
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

        {/* Call to Action */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
          <Text className="text-white text-xl font-bold text-center mb-2">
            {t("transport.home.guest.cta.title", {
              defaultValue: "¿Listo para empezar?",
            })}
          </Text>
          <Text className="text-blue-100 text-center mb-4">
            {t("transport.home.guest.cta.subtitle", {
              defaultValue: "Crea tu cuenta y disfruta de todos los beneficios",
            })}
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/register")}
            className="bg-white p-4 rounded-lg"
          >
            <Text className="text-blue-600 font-bold text-center text-lg">
              {t("transport.home.guest.cta.button", {
                defaultValue: "Crear Cuenta Gratis",
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
