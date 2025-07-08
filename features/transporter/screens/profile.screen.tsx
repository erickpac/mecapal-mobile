import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenHeader from "@/components/screen-header";

export default function TransporterProfileScreen() {
  const { user, logout } = useStore();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Mi Perfil"
        subtitle="Gestiona tu información personal"
      />

      <View className="p-4">
        {/* Información del Usuario */}
        <View className="bg-white p-6 rounded-lg mb-6 shadow-sm">
          <View className="items-center mb-6">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-3xl">
                {user?.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text className="text-xl font-semibold">{user?.name}</Text>
            <Text className="text-gray-600">{user?.email}</Text>
            <Text className="text-gray-500 text-sm mt-1">Transportador</Text>
          </View>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center border-b border-gray-200 pb-4">
              <Text className="text-gray-600">Teléfono</Text>
              <Text className="font-semibold">
                {user?.phone || "No especificado"}
              </Text>
            </View>

            <View className="flex-row justify-between items-center border-b border-gray-200 pb-4">
              <Text className="text-gray-600">Miembro desde</Text>
              <Text className="font-semibold">
                {new Date(user?.createdAt || "").toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        {/* Acciones */}
        <View className="space-y-3">
          <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <View className="flex-row items-center">
              <Ionicons name="person" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-4 text-gray-800">
                Editar Perfil
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
              <Ionicons name="lock-closed" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-4 text-gray-800">
                Cambiar Contraseña
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
              <Ionicons name="car" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-4 text-gray-800">
                Documentos de Vehículos
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
              <Ionicons name="notifications" size={24} color="#007AFF" />
              <Text className="text-lg font-semibold ml-4 text-gray-800">
                Notificaciones
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
                Ayuda y Soporte
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
            onPress={logout}
            className="bg-red-500 p-4 rounded-lg mt-6"
          >
            <View className="flex-row items-center justify-center">
              <Ionicons name="log-out" size={24} color="white" />
              <Text className="text-white text-center font-semibold text-lg ml-2">
                Cerrar Sesión
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
