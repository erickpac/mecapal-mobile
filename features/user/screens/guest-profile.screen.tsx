import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";

export default function GuestProfileScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">
          {t("transport.profile.title", { defaultValue: "Mi Perfil" })}
        </Text>
        <Text className="text-gray-600 mt-1">
          {t("transport.profile.subtitle", {
            defaultValue: "Gestiona tu información personal",
          })}
        </Text>
      </View>

      {/* Guest Profile Info */}
      <View className="p-4">
        <View className="bg-white p-6 rounded-lg mb-6 shadow-sm">
          <View className="items-center mb-6">
            <View className="w-24 h-24 bg-gray-300 rounded-full items-center justify-center mb-4">
              <Ionicons name="person" size={48} color="#6B7280" />
            </View>
            <Text className="text-xl font-semibold text-gray-800">
              {t("transport.profile.guest.title", {
                defaultValue: "Usuario Invitado",
              })}
            </Text>
            <Text className="text-gray-600">
              {t("transport.profile.guest.subtitle", {
                defaultValue: "Explorando la aplicación",
              })}
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              {t("transport.profile.guest.status", {
                defaultValue: "Modo Invitado",
              })}
            </Text>
          </View>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center border-b border-gray-200 pb-4">
              <Text className="text-gray-600">
                {t("transport.profile.guest.access", {
                  defaultValue: "Acceso",
                })}
              </Text>
              <Text className="font-semibold text-orange-600">
                {t("transport.profile.guest.limited", {
                  defaultValue: "Limitado",
                })}
              </Text>
            </View>

            <View className="flex-row justify-between items-center border-b border-gray-200 pb-4">
              <Text className="text-gray-600">
                {t("transport.profile.guest.features", {
                  defaultValue: "Funciones disponibles",
                })}
              </Text>
              <Text className="font-semibold">
                {t("transport.profile.guest.basic", {
                  defaultValue: "Básicas",
                })}
              </Text>
            </View>
          </View>
        </View>

        {/* Enhanced Login/Register Section */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg mb-6">
          <View className="items-center mb-4">
            <Ionicons name="star" size={32} color="white" />
            <Text className="text-white text-xl font-bold text-center mt-2">
              {t("transport.profile.guest.upgrade.title", {
                defaultValue: "Desbloquea todas las funciones",
              })}
            </Text>
            <Text className="text-blue-100 text-center mt-2">
              {t("transport.profile.guest.upgrade.subtitle", {
                defaultValue:
                  "Crea una cuenta gratuita y accede a todas las funcionalidades premium",
              })}
            </Text>
          </View>

          {/* Benefits List */}
          <View className="mb-4">
            {[
              {
                text: t("transport.profile.guest.benefits.reservations", {
                  defaultValue: "✓ Reservas ilimitadas",
                }),
                icon: "checkmark-circle",
              },
              {
                text: t("transport.profile.guest.benefits.history", {
                  defaultValue: "✓ Historial completo de servicios",
                }),
                icon: "time",
              },
              {
                text: t("transport.profile.guest.benefits.notifications", {
                  defaultValue: "✓ Notificaciones en tiempo real",
                }),
                icon: "notifications",
              },
              {
                text: t("transport.profile.guest.benefits.support", {
                  defaultValue: "✓ Soporte prioritario",
                }),
                icon: "headset",
              },
            ].map((benefit, index) => (
              <View key={index} className="flex-row items-center mb-2">
                <Ionicons name={benefit.icon as any} size={16} color="white" />
                <Text className="text-white ml-2 text-sm">{benefit.text}</Text>
              </View>
            ))}
          </View>

          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/register")}
              className="flex-1 bg-white p-3 rounded-lg"
            >
              <Text className="text-blue-600 font-semibold text-center">
                {t("transport.profile.guest.upgrade.register", {
                  defaultValue: "Crear Cuenta Gratis",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="flex-1 bg-transparent border border-white p-3 rounded-lg"
            >
              <Text className="text-white font-semibold text-center">
                {t("transport.profile.guest.upgrade.login", {
                  defaultValue: "Ya tengo cuenta",
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Available Actions */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.profile.guest.availableActions.title", {
              defaultValue: "Acciones Disponibles",
            })}
          </Text>
          <View className="space-y-3">
            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="search" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  {t("transport.profile.guest.actions.search", {
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

            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="information-circle" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  {t("transport.profile.guest.actions.about", {
                    defaultValue: "Acerca de la App",
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

            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="help-circle" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  {t("transport.profile.guest.actions.help", {
                    defaultValue: "Ayuda y Soporte",
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

            <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="settings" size={24} color="#007AFF" />
                <Text className="text-lg font-semibold ml-4 text-gray-800">
                  {t("transport.profile.guest.actions.settings", {
                    defaultValue: "Configuración",
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

        {/* Enhanced Features Comparison */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.profile.guest.comparison.title", {
              defaultValue: "¿Qué obtienes con una cuenta?",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                feature: t("transport.profile.guest.comparison.search", {
                  defaultValue: "Buscar servicios",
                }),
                guest: true,
                user: true,
              },
              {
                feature: t("transport.profile.guest.comparison.reserve", {
                  defaultValue: "Hacer reservas",
                }),
                guest: false,
                user: true,
              },
              {
                feature: t("transport.profile.guest.comparison.history", {
                  defaultValue: "Ver historial",
                }),
                guest: false,
                user: true,
              },
              {
                feature: t("transport.profile.guest.comparison.ratings", {
                  defaultValue: "Calificar servicios",
                }),
                guest: false,
                user: true,
              },
              {
                feature: t("transport.profile.guest.comparison.favorites", {
                  defaultValue: "Guardar favoritos",
                }),
                guest: false,
                user: true,
              },
              {
                feature: t("transport.profile.guest.comparison.notifications", {
                  defaultValue: "Notificaciones",
                }),
                guest: false,
                user: true,
              },
            ].map((item, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-gray-800 font-medium flex-1">
                    {item.feature}
                  </Text>
                  <View className="flex-row space-x-4">
                    <View className="items-center">
                      <Text className="text-gray-500 text-xs mb-1">
                        {t("transport.profile.guest.comparison.guest", {
                          defaultValue: "Invitado",
                        })}
                      </Text>
                      <Ionicons
                        name={item.guest ? "checkmark-circle" : "close-circle"}
                        size={20}
                        color={item.guest ? "#34C759" : "#FF3B30"}
                      />
                    </View>
                    <View className="items-center">
                      <Text className="text-gray-500 text-xs mb-1">
                        {t("transport.profile.guest.comparison.user", {
                          defaultValue: "Usuario",
                        })}
                      </Text>
                      <Ionicons
                        name={item.user ? "checkmark-circle" : "close-circle"}
                        size={20}
                        color={item.user ? "#34C759" : "#FF3B30"}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Call to Action */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
          <Text className="text-white text-xl font-bold text-center mb-2">
            {t("transport.profile.guest.cta.title", {
              defaultValue: "¿Listo para desbloquear todo?",
            })}
          </Text>
          <Text className="text-blue-100 text-center mb-4">
            {t("transport.profile.guest.cta.subtitle", {
              defaultValue:
                "Únete a miles de usuarios que ya disfrutan de todas las funciones",
            })}
          </Text>
          <TouchableOpacity
            onPress={() => navigateTo("/register")}
            className="bg-white p-4 rounded-lg"
          >
            <Text className="text-blue-600 font-bold text-center text-lg">
              {t("transport.profile.guest.cta.button", {
                defaultValue: "Crear Cuenta Gratis",
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
