import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const { user, logout } = useStore();

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1">
        <Text className="text-2xl font-bold mb-8">Mi Perfil</Text>

        <View className="bg-gray-100 p-6 rounded-lg mb-6">
          <View className="items-center mb-6">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-3xl">
                {user?.name.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text className="text-xl font-semibold">{user?.name}</Text>
            <Text className="text-gray-600">{user?.email}</Text>
          </View>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center border-b border-gray-200 pb-4">
              <Text className="text-gray-600">Rol</Text>
              <Text className="font-semibold capitalize">{user?.role}</Text>
            </View>

            <View className="flex-row justify-between items-center border-b border-gray-200 pb-4">
              <Text className="text-gray-600">Miembro desde</Text>
              <Text className="font-semibold">
                {new Date(user?.createdAt || "").toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        <View className="space-y-4">
          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
            <Text className="text-white text-center font-semibold">
              Editar Perfil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-500 p-4 rounded-lg">
            <Text className="text-white text-center font-semibold">
              Cambiar Contraseña
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={logout}
            className="bg-red-500 p-4 rounded-lg mt-auto"
          >
            <Text className="text-white text-center font-semibold">
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
