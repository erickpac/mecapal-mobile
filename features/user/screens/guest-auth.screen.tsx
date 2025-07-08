import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";
import { ScreenHeader } from "@/components/screen-header";

export default function GuestAuthScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title={t("transport.auth.title", {
          defaultValue: "Únete a Mecapal",
        })}
        subtitle={t("transport.auth.subtitle", {
          defaultValue: "Crea tu cuenta y accede a todos los servicios",
        })}
      />

      <View className="p-4">
        {/* Welcome Section */}
        <View className="bg-blue-600 p-6 rounded-lg mb-6 items-center">
          <Ionicons name="rocket" size={48} color="white" />
          <Text className="text-white text-xl font-bold text-center mt-4">
            {t("transport.auth.welcome.title", {
              defaultValue: "¡Bienvenido a Mecapal!",
            })}
          </Text>
          <Text className="text-blue-100 text-center mt-2">
            {t("transport.auth.welcome.subtitle", {
              defaultValue: "La plataforma de transporte más confiable",
            })}
          </Text>
        </View>

        {/* Main CTA Buttons */}
        <View className="mb-6">
          <TouchableOpacity
            onPress={() => navigateTo("/auth/register")}
            className="bg-blue-500 p-4 rounded-lg mb-4 items-center"
          >
            <Ionicons name="person-add" size={32} color="white" />
            <Text className="text-white font-bold text-lg mt-2">
              {t("transport.auth.createAccount.title", {
                defaultValue: "Crear Cuenta Gratis",
              })}
            </Text>
            <Text className="text-blue-100 text-center mt-1">
              {t("transport.auth.createAccount.subtitle", {
                defaultValue: "Regístrate en menos de 2 minutos",
              })}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigateTo("/auth/login")}
            className="bg-white border-2 border-blue-500 p-4 rounded-lg items-center"
          >
            <Ionicons name="log-in" size={32} color="#007AFF" />
            <Text className="text-blue-500 font-bold text-lg mt-2">
              {t("transport.auth.signIn.title", {
                defaultValue: "Ya tengo cuenta",
              })}
            </Text>
            <Text className="text-gray-600 text-center mt-1">
              {t("transport.auth.signIn.subtitle", {
                defaultValue: "Inicia sesión en tu cuenta",
              })}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Benefits Section */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.auth.benefits.title", {
              defaultValue: "¿Por qué crear una cuenta?",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                icon: "shield-checkmark",
                title: t("transport.auth.benefits.secure.title", {
                  defaultValue: "Seguridad Garantizada",
                }),
                description: t("transport.auth.benefits.secure.description", {
                  defaultValue:
                    "Todos nuestros transportistas están verificados",
                }),
                color: "text-green-600",
              },
              {
                icon: "flash",
                title: t("transport.auth.benefits.fast.title", {
                  defaultValue: "Reservas Rápidas",
                }),
                description: t("transport.auth.benefits.fast.description", {
                  defaultValue: "Reserva tu transporte en segundos",
                }),
                color: "text-blue-600",
              },
              {
                icon: "card",
                title: t("transport.auth.benefits.payment.title", {
                  defaultValue: "Pagos Seguros",
                }),
                description: t("transport.auth.benefits.payment.description", {
                  defaultValue: "Múltiples métodos de pago disponibles",
                }),
                color: "text-orange-600",
              },
              {
                icon: "notifications",
                title: t("transport.auth.benefits.notifications.title", {
                  defaultValue: "Notificaciones en Tiempo Real",
                }),
                description: t(
                  "transport.auth.benefits.notifications.description",
                  {
                    defaultValue: "Sigue tu transporte en tiempo real",
                  }
                ),
                color: "text-purple-600",
              },
            ].map((benefit, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-start">
                  <Ionicons
                    name={benefit.icon as any}
                    size={24}
                    className={benefit.color}
                  />
                  <View className="flex-1 ml-4">
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
            {t("transport.auth.quickActions.title", {
              defaultValue: "Acciones Rápidas",
            })}
          </Text>
          <View className="space-y-3">
            <TouchableOpacity
              onPress={() => navigateTo("/search")}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row items-center">
                <Ionicons name="search" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  {t("transport.auth.quickActions.explore", {
                    defaultValue: "Explorar Servicios",
                  })}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#8E8E93"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateTo("/about")}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <View className="flex-row items-center">
                <Ionicons name="information-circle" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  {t("transport.auth.quickActions.learnMore", {
                    defaultValue: "Conoce Más Sobre Mecapal",
                  })}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#8E8E93"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Social Proof */}
        <View className="bg-gray-50 p-4 rounded-lg mb-6">
          <Text className="text-center text-gray-600 mb-2">
            {t("transport.auth.socialProof", {
              defaultValue:
                "Únete a miles de usuarios que ya confían en Mecapal",
            })}
          </Text>
          <View className="flex-row justify-center space-x-4">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">10K+</Text>
              <Text className="text-gray-600 text-sm">Usuarios</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">4.8★</Text>
              <Text className="text-gray-600 text-sm">Calificación</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-purple-600">24/7</Text>
              <Text className="text-gray-600 text-sm">Soporte</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
