import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";

export default function GuestHistoryScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">
          {t("transport.history.title", {
            defaultValue: "Historial de Servicios",
          })}
        </Text>
        <Text className="text-gray-600 mt-1">
          {t("transport.history.subtitle", {
            defaultValue: "Revisa tus servicios anteriores",
          })}
        </Text>
      </View>

      {/* Login Banner */}
      <View className="bg-blue-50 p-4 border-b border-blue-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-blue-800 font-semibold">
              {t("transport.history.guest.loginPrompt", {
                defaultValue: "Inicia sesión para ver tu historial",
              })}
            </Text>
            <Text className="text-blue-600 text-sm mt-1">
              {t("transport.history.guest.loginSubtitle", {
                defaultValue: "Tu historial personal estará disponible aquí",
              })}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigateTo("/login")}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            <Text className="text-white font-semibold">
              {t("transport.history.guest.login", {
                defaultValue: "Iniciar Sesión",
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4">
        {/* Sample History */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.history.guest.sampleTitle", {
              defaultValue: "Ejemplo de Historial",
            })}
          </Text>
          <Text className="text-gray-600 mb-4 text-center">
            {t("transport.history.guest.sampleSubtitle", {
              defaultValue: "Así se verá tu historial cuando tengas una cuenta",
            })}
          </Text>

          <View className="space-y-3">
            {[
              {
                id: "1",
                service: "Mudanza Residencial",
                date: "15 Mar 2024",
                transporter: "Transportes Rápidos S.A.",
                price: "$450",
                rating: 5,
                status: "Completado",
                from: "San José Centro",
                to: "Heredia Centro",
              },
              {
                id: "2",
                service: "Transporte de Carga",
                date: "10 Mar 2024",
                transporter: "Cargo Express",
                price: "$280",
                rating: 4,
                status: "Completado",
                from: "Alajuela",
                to: "Cartago",
              },
              {
                id: "3",
                service: "Entrega Urgente",
                date: "5 Mar 2024",
                transporter: "Flash Delivery",
                price: "$120",
                rating: 5,
                status: "Completado",
                from: "San José",
                to: "Escazú",
              },
            ].map((item) => (
              <View
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 opacity-60"
              >
                <View className="flex-row justify-between items-start mb-3">
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {item.service}
                    </Text>
                    <Text className="text-gray-600">
                      {t("transport.history.transporter")}: {item.transporter}
                    </Text>
                    <Text className="text-gray-500 text-sm">{item.date}</Text>
                    <View className="flex-row items-center mt-1">
                      <Ionicons name="location" size={14} color="#6B7280" />
                      <Text className="text-gray-500 text-sm ml-1">
                        {item.from} → {item.to}
                      </Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="text-lg font-bold text-green-600">
                      {item.price}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      {[...Array(5)].map((_, index) => (
                        <Ionicons
                          key={index}
                          name={index < item.rating ? "star" : "star-outline"}
                          size={16}
                          color={index < item.rating ? "#FFD700" : "#D1D5DB"}
                        />
                      ))}
                    </View>
                  </View>
                </View>

                <View className="flex-row justify-between items-center">
                  <View className="bg-green-100 px-3 py-1 rounded-full">
                    <Text className="text-green-600 text-sm font-medium">
                      {item.status}
                    </Text>
                  </View>
                  <View className="flex-row space-x-2">
                    <TouchableOpacity
                      onPress={() => navigateTo("/login")}
                      className="bg-blue-500 px-3 py-1 rounded-lg"
                    >
                      <Text className="text-white text-sm font-medium">
                        {t("transport.history.actions.details")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigateTo("/login")}
                      className="bg-gray-500 px-3 py-1 rounded-lg"
                    >
                      <Text className="text-white text-sm font-medium">
                        {t("transport.history.actions.repeat")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Sample Statistics */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.history.guest.sampleStatsTitle", {
              defaultValue: "Estadísticas de Ejemplo",
            })}
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm opacity-60">
              <View className="items-center">
                <Ionicons name="car" size={32} color="#007AFF" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  12
                </Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.totalServices")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm opacity-60">
              <View className="items-center">
                <Ionicons name="star" size={32} color="#FFD700" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  4.7
                </Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.averageRating")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm opacity-60">
              <View className="items-center">
                <Ionicons name="cash" size={32} color="#34C759" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">
                  $1,200
                </Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.totalSpent")}
                </Text>
              </View>
            </View>

            <View className="bg-white p-4 rounded-lg w-[48%] mb-4 shadow-sm opacity-60">
              <View className="items-center">
                <Ionicons name="calendar" size={32} color="#FF9500" />
                <Text className="text-2xl font-bold text-gray-800 mt-2">4</Text>
                <Text className="text-gray-600">
                  {t("transport.history.statistics.thisMonth")}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Benefits of Having Account */}
        <View className="mb-6">
          <Text className="text-lg font-semibold mb-4 text-gray-800">
            {t("transport.history.guest.benefits.title", {
              defaultValue: "Beneficios de tener una cuenta",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                icon: "time",
                title: t("transport.history.guest.benefits.history.title", {
                  defaultValue: "Historial completo",
                }),
                description: t(
                  "transport.history.guest.benefits.history.description",
                  { defaultValue: "Accede a todos tus servicios anteriores" }
                ),
              },
              {
                icon: "star",
                title: t("transport.history.guest.benefits.ratings.title", {
                  defaultValue: "Calificaciones",
                }),
                description: t(
                  "transport.history.guest.benefits.ratings.description",
                  { defaultValue: "Califica y revisa tus experiencias" }
                ),
              },
              {
                icon: "repeat",
                title: t("transport.history.guest.benefits.repeat.title", {
                  defaultValue: "Repetir servicios",
                }),
                description: t(
                  "transport.history.guest.benefits.repeat.description",
                  {
                    defaultValue:
                      "Repite servicios con transportistas confiables",
                  }
                ),
              },
              {
                icon: "analytics",
                title: t("transport.history.guest.benefits.analytics.title", {
                  defaultValue: "Estadísticas detalladas",
                }),
                description: t(
                  "transport.history.guest.benefits.analytics.description",
                  { defaultValue: "Analiza tus patrones de uso" }
                ),
              },
            ].map((benefit, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-4">
                    <Ionicons
                      name={benefit.icon as any}
                      size={20}
                      color="#007AFF"
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
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
          <Text className="text-white text-xl font-bold text-center mb-2">
            {t("transport.history.guest.cta.title", {
              defaultValue: "¿Quieres ver tu historial real?",
            })}
          </Text>
          <Text className="text-blue-100 text-center mb-4">
            {t("transport.history.guest.cta.subtitle", {
              defaultValue:
                "Crea tu cuenta y comienza a construir tu historial de servicios",
            })}
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/register")}
              className="flex-1 bg-white p-4 rounded-lg"
            >
              <Text className="text-blue-600 font-bold text-center">
                {t("transport.history.guest.cta.register", {
                  defaultValue: "Crear Cuenta",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="flex-1 bg-transparent border border-white p-4 rounded-lg"
            >
              <Text className="text-white font-bold text-center">
                {t("transport.history.guest.cta.login", {
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
