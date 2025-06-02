import { useStore } from "@/store/useStore";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { user, logout } = useStore();

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1">
        <Text className="text-2xl font-bold mb-4">Dashboard</Text>

        <View className="bg-gray-100 p-4 rounded-lg mb-4">
          <Text className="text-lg mb-2">Bienvenido, {user?.name}</Text>
          <Text className="text-gray-600">{user?.email}</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg w-[48%] mb-4">
            <Text className="text-white font-semibold">Mecánicas</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-500 p-4 rounded-lg w-[48%] mb-4">
            <Text className="text-white font-semibold">Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-purple-500 p-4 rounded-lg w-[48%] mb-4">
            <Text className="text-white font-semibold">Servicios</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-orange-500 p-4 rounded-lg w-[48%] mb-4">
            <Text className="text-white font-semibold">Reportes</Text>
          </TouchableOpacity>
        </View>

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
  );
}
