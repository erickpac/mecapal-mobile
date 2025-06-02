import { useStore } from "@/store/useStore";
import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const { logout } = useStore();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(false);

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1">
        <Text className="text-2xl font-bold mb-8">Ajustes</Text>

        <View className="space-y-6">
          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-4">Preferencias</Text>

            <View className="space-y-4">
              <View className="flex-row justify-between items-center">
                <Text>Notificaciones</Text>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={notifications ? "#007AFF" : "#f4f3f4"}
                />
              </View>

              <View className="flex-row justify-between items-center">
                <Text>Modo Oscuro</Text>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={darkMode ? "#007AFF" : "#f4f3f4"}
                />
              </View>

              <View className="flex-row justify-between items-center">
                <Text>Autenticación Biométrica</Text>
                <Switch
                  value={biometric}
                  onValueChange={setBiometric}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={biometric ? "#007AFF" : "#f4f3f4"}
                />
              </View>
            </View>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-4">Cuenta</Text>

            <View className="space-y-4">
              <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
                <Text className="text-white text-center font-semibold">
                  Cambiar Contraseña
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-gray-500 p-4 rounded-lg">
                <Text className="text-white text-center font-semibold">
                  Exportar Datos
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={logout}
                className="bg-red-500 p-4 rounded-lg"
              >
                <Text className="text-white text-center font-semibold">
                  Cerrar Sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-4">Acerca de</Text>

            <View className="space-y-2">
              <Text className="text-gray-600">Versión 1.0.0</Text>
              <TouchableOpacity>
                <Text className="text-blue-500">Términos y Condiciones</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-blue-500">Política de Privacidad</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
