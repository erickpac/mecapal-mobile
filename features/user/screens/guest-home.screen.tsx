import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/features/shared/routes";
import { ScreenHeader } from "@/components/screen-header";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";

export default function GuestHomeScreen() {
  const { t } = useTranslation();
  const { setSelectedUserType } = useStore();

  const handleClickLogin = () => {
    setSelectedUserType(UserRole.USER);
    navigateTo("/auth");
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title={t("transport.home.guestGreeting", {
          defaultValue: "¡Bienvenido a Mecapal!",
        })}
        subtitle={t("transport.home.guestSubtitle", {
          defaultValue: "Encuentra el transporte que necesitas",
        })}
      />

      {/* Login/Register Banner */}
      <View className="border-b border-blue-200 bg-blue-50 p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-lg font-semibold text-blue-800">
              {t("transport.home.guest.loginPrompt", {
                defaultValue: "¿Ya tienes cuenta?",
              })}
            </Text>
            <Text className="mt-1 text-sm text-blue-600">
              {t("transport.home.guest.loginSubtitle", {
                defaultValue:
                  "Inicia sesión para acceder a todas las funciones",
              })}
            </Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity
              onPress={handleClickLogin}
              className="rounded-lg bg-blue-500 px-4 py-2"
            >
              <Text className="font-semibold text-white">
                {t("transport.home.guest.login", {
                  defaultValue: "Iniciar Sesión",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/auth/register")}
              className="rounded-lg bg-green-500 px-4 py-2"
            >
              <Text className="font-semibold text-white">
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
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.quickSearch.title")}
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/search")}
            className="items-center rounded-lg bg-blue-500 p-4"
          >
            <MaterialSymbol name="search" size={32} color="text-white" />
            <Text className="mt-2 text-lg font-semibold text-white">
              {t("transport.home.quickSearch.button")}
            </Text>
            <Text className="mt-1 text-center text-blue-100">
              {t("transport.home.quickSearch.subtitle")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Types */}
        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.serviceTypes.title")}
          </Text>
          <View className="space-y-3">
            {[
              {
                id: "1",
                nameKey: "transport.home.serviceTypes.mudanzas.name",
                descriptionKey:
                  "transport.home.serviceTypes.mudanzas.description",
                icon: "home",
                color: "bg-blue-500",
              },
              {
                id: "2",
                nameKey: "transport.home.serviceTypes.cargaGeneral.name",
                descriptionKey:
                  "transport.home.serviceTypes.cargaGeneral.description",
                icon: "inventory_2",
                color: "bg-green-500",
              },
              {
                id: "3",
                nameKey:
                  "transport.home.serviceTypes.materialesConstruccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.materialesConstruccion.description",
                icon: "construction",
                color: "bg-orange-500",
              },
              {
                id: "4",
                nameKey: "transport.home.serviceTypes.entregaRecoleccion.name",
                descriptionKey:
                  "transport.home.serviceTypes.entregaRecoleccion.description",
                icon: "swap_horiz",
                color: "bg-purple-500",
              },
            ].map((service) => (
              <TouchableOpacity
                key={service.id}
                onPress={() => navigateTo("/search")}
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <View className="flex-row items-center">
                  <View
                    className={`h-12 w-12 ${service.color} mr-4 items-center justify-center rounded-lg`}
                  >
                    <MaterialSymbol
                      name={service.icon}
                      size={24}
                      color="text-white"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {t(service.nameKey)}
                    </Text>
                    <Text className="text-gray-600">
                      {t(service.descriptionKey)}
                    </Text>
                  </View>
                  <MaterialSymbol
                    name="chevron_right"
                    size={20}
                    color="text-gray-400"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.quickActions.title")}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="mb-4 w-[48%] items-center rounded-lg bg-blue-500 p-4"
            >
              <MaterialSymbol name="search" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.quickActions.searchTransport")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/auth")}
              className="mb-4 w-[48%] items-center rounded-lg bg-green-500 p-4"
            >
              <MaterialSymbol name="person_add" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.guest.createAccount", {
                  defaultValue: "Crear Cuenta",
                })}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/auth")}
              className="mb-4 w-[48%] items-center rounded-lg bg-purple-500 p-4"
            >
              <MaterialSymbol name="login" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.guest.login", {
                  defaultValue: "Iniciar Sesión",
                })}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/settings")}
              className="mb-4 w-[48%] items-center rounded-lg bg-gray-500 p-4"
            >
              <MaterialSymbol name="settings" size={32} color="text-white" />
              <Text className="mt-2 font-semibold text-white">
                {t("transport.home.quickActions.settings")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Guest Benefits */}
        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold text-gray-800">
            {t("transport.home.guest.benefits.title", {
              defaultValue: "Beneficios de registrarte",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                icon: "star",
                title: t("transport.home.guest.benefits.history.title", {
                  defaultValue: "Historial de viajes",
                }),
                description: t(
                  "transport.home.guest.benefits.history.description",
                  {
                    defaultValue: "Accede a tu historial completo de servicios",
                  },
                ),
              },
              {
                icon: "favorite",
                title: t("transport.home.guest.benefits.favorites.title", {
                  defaultValue: "Favoritos",
                }),
                description: t(
                  "transport.home.guest.benefits.favorites.description",
                  { defaultValue: "Guarda tus transportistas favoritos" },
                ),
              },
              {
                icon: "notifications",
                title: t("transport.home.guest.benefits.notifications.title", {
                  defaultValue: "Notificaciones",
                }),
                description: t(
                  "transport.home.guest.benefits.notifications.description",
                  { defaultValue: "Recibe actualizaciones en tiempo real" },
                ),
              },
              {
                icon: "credit_card",
                title: t("transport.home.guest.benefits.payment.title", {
                  defaultValue: "Pagos seguros",
                }),
                description: t(
                  "transport.home.guest.benefits.payment.description",
                  { defaultValue: "Métodos de pago seguros y rápidos" },
                ),
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

        {/* Call to Action */}
        <View className="mb-6 mt-4 items-center rounded-lg bg-blue-600 p-6">
          <MaterialSymbol name="star" size={32} color="text-white" />
          <Text className="mt-2 text-center text-xl font-bold text-white">
            {t("transport.home.guest.ctaTitle", {
              defaultValue: "¿Listo para reservar tu transporte?",
            })}
          </Text>
          <Text className="mb-2 mt-1 text-center text-blue-100">
            {t("transport.home.guest.ctaSubtitle", {
              defaultValue: "Crea tu cuenta y accede a todos los beneficios",
            })}
          </Text>
          <View className="mt-2 flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/auth/register")}
              className="flex-1 rounded-lg bg-white p-3"
            >
              <Text className="text-center font-semibold text-blue-600">
                {t("transport.home.guest.ctaRegister", {
                  defaultValue: "Crear Cuenta",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/auth")}
              className="flex-1 rounded-lg border border-white bg-transparent p-3"
            >
              <Text className="text-center font-semibold text-white">
                {t("transport.home.guest.ctaLogin", {
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
