import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { navigateTo } from "@/utils/navigation";

export default function GuestAboutScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">
          {t("transport.about.title", {
            defaultValue: "Acerca de Mecapal",
          })}
        </Text>
        <Text className="text-gray-600 mt-1">
          {t("transport.about.subtitle", {
            defaultValue: "Conectamos usuarios con transportistas confiables",
          })}
        </Text>
      </View>

      {/* Login Banner */}
      <View className="bg-blue-50 p-4 border-b border-blue-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-blue-800 font-semibold">
              {t("transport.about.guest.loginPrompt", {
                defaultValue: "¿Listo para empezar?",
              })}
            </Text>
            <Text className="text-blue-600 text-sm mt-1">
              {t("transport.about.guest.loginSubtitle", {
                defaultValue:
                  "Crea una cuenta para acceder a todos los servicios",
              })}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigateTo("/register")}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            <Text className="text-white font-semibold">
              {t("transport.about.guest.register", {
                defaultValue: "Crear Cuenta",
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4">
        {/* What is Mecapal */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.about.whatIs.title", {
              defaultValue: "¿Qué es Mecapal?",
            })}
          </Text>
          <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-gray-700 leading-6">
              {t("transport.about.whatIs.description", {
                defaultValue:
                  "Mecapal es una plataforma que conecta usuarios que necesitan servicios de transporte con transportistas profesionales y confiables. Ofrecemos una solución segura, rápida y eficiente para todas tus necesidades de transporte.",
              })}
            </Text>
          </View>
        </View>

        {/* How it works */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.about.howItWorks.title", {
              defaultValue: "¿Cómo funciona?",
            })}
          </Text>
          <View className="space-y-4">
            {[
              {
                step: "1",
                title: t("transport.about.howItWorks.step1.title", {
                  defaultValue: "Busca tu servicio",
                }),
                description: t("transport.about.howItWorks.step1.description", {
                  defaultValue:
                    "Describe lo que necesitas transportar y desde dónde hasta dónde",
                }),
                icon: "search",
                color: "bg-blue-500",
              },
              {
                step: "2",
                title: t("transport.about.howItWorks.step2.title", {
                  defaultValue: "Compara opciones",
                }),
                description: t("transport.about.howItWorks.step2.description", {
                  defaultValue:
                    "Revisa precios, calificaciones y disponibilidad de transportistas",
                }),
                icon: "list",
                color: "bg-green-500",
              },
              {
                step: "3",
                title: t("transport.about.howItWorks.step3.title", {
                  defaultValue: "Reserva y paga",
                }),
                description: t("transport.about.howItWorks.step3.description", {
                  defaultValue:
                    "Selecciona tu transportista preferido y realiza el pago seguro",
                }),
                icon: "card",
                color: "bg-orange-500",
              },
              {
                step: "4",
                title: t("transport.about.howItWorks.step4.title", {
                  defaultValue: "¡Disfruta el servicio!",
                }),
                description: t("transport.about.howItWorks.step4.description", {
                  defaultValue:
                    "Tu transportista llegará en el momento acordado",
                }),
                icon: "checkmark-circle",
                color: "bg-purple-500",
              },
            ].map((item) => (
              <View
                key={item.step}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-start">
                  <View
                    className={`w-12 h-12 ${item.color} rounded-lg items-center justify-center mr-4`}
                  >
                    <Ionicons name={item.icon as any} size={24} color="white" />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center mb-2">
                      <View className="w-6 h-6 bg-gray-200 rounded-full items-center justify-center mr-2">
                        <Text className="text-gray-700 font-bold text-xs">
                          {item.step}
                        </Text>
                      </View>
                      <Text className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </Text>
                    </View>
                    <Text className="text-gray-600">{item.description}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Services */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.about.services.title", {
              defaultValue: "Nuestros Servicios",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                name: t("transport.about.services.mudanzas.name", {
                  defaultValue: "Mudanzas Residenciales",
                }),
                description: t(
                  "transport.about.services.mudanzas.description",
                  {
                    defaultValue: "Mudanzas completas para hogares y oficinas",
                  }
                ),
                icon: "home",
                color: "bg-blue-500",
              },
              {
                name: t("transport.about.services.carga.name", {
                  defaultValue: "Transporte de Carga",
                }),
                description: t("transport.about.services.carga.description", {
                  defaultValue: "Transporte seguro de mercancías y productos",
                }),
                icon: "cube",
                color: "bg-green-500",
              },
              {
                name: t("transport.about.services.construccion.name", {
                  defaultValue: "Materiales de Construcción",
                }),
                description: t(
                  "transport.about.services.construccion.description",
                  {
                    defaultValue: "Entrega de materiales para construcción",
                  }
                ),
                icon: "construct",
                color: "bg-orange-500",
              },
              {
                name: t("transport.about.services.urgente.name", {
                  defaultValue: "Entrega Urgente",
                }),
                description: t("transport.about.services.urgente.description", {
                  defaultValue: "Servicios de entrega rápida y urgente",
                }),
                icon: "flash",
                color: "bg-red-500",
              },
            ].map((service, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <View className="flex-row items-center">
                  <View
                    className={`w-12 h-12 ${service.color} rounded-lg items-center justify-center mr-4`}
                  >
                    <Ionicons
                      name={service.icon as any}
                      size={24}
                      color="white"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      {service.name}
                    </Text>
                    <Text className="text-gray-600">{service.description}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Benefits */}
        <View className="mb-6">
          <Text className="text-xl font-semibold mb-4 text-gray-800">
            {t("transport.about.benefits.title", {
              defaultValue: "¿Por qué elegir Mecapal?",
            })}
          </Text>
          <View className="space-y-3">
            {[
              {
                title: t("transport.about.benefits.secure.title", {
                  defaultValue: "Seguro y Confiable",
                }),
                description: t("transport.about.benefits.secure.description", {
                  defaultValue:
                    "Todos nuestros transportistas están verificados y asegurados",
                }),
                icon: "shield-checkmark",
                color: "text-green-600",
              },
              {
                title: t("transport.about.benefits.fast.title", {
                  defaultValue: "Rápido y Eficiente",
                }),
                description: t("transport.about.benefits.fast.description", {
                  defaultValue:
                    "Encuentra transportistas disponibles en minutos",
                }),
                icon: "flash",
                color: "text-blue-600",
              },
              {
                title: t("transport.about.benefits.transparent.title", {
                  defaultValue: "Precios Transparentes",
                }),
                description: t(
                  "transport.about.benefits.transparent.description",
                  {
                    defaultValue:
                      "Sin sorpresas, precios claros desde el inicio",
                  }
                ),
                icon: "card",
                color: "text-orange-600",
              },
              {
                title: t("transport.about.benefits.support.title", {
                  defaultValue: "Soporte 24/7",
                }),
                description: t("transport.about.benefits.support.description", {
                  defaultValue:
                    "Estamos aquí para ayudarte en cualquier momento",
                }),
                icon: "headset",
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

        {/* CTA Section */}
        <View className="bg-blue-600 p-6 rounded-lg mb-6">
          <Text className="text-white text-xl font-bold text-center">
            {t("transport.about.cta.title", {
              defaultValue: "¿Listo para empezar?",
            })}
          </Text>
          <Text className="text-blue-100 text-center mb-4">
            {t("transport.about.cta.subtitle", {
              defaultValue:
                "Únete a miles de usuarios que ya confían en Mecapal",
            })}
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigateTo("/register")}
              className="flex-1 bg-white p-3 rounded-lg"
            >
              <Text className="text-blue-600 font-semibold text-center">
                {t("transport.about.cta.register", {
                  defaultValue: "Crear Cuenta",
                })}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateTo("/login")}
              className="flex-1 bg-transparent border border-white p-3 rounded-lg"
            >
              <Text className="text-white font-semibold text-center">
                {t("transport.about.cta.login", {
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
