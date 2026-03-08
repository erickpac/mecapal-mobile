import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialSymbol } from '@/components/material-symbol';
import { ScreenHeader } from '@/components/screen-header';

export default function SettingsScreen() {
  const { user, logout } = useStore();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <ScreenHeader
        title="Configuración"
        subtitle="Gestiona tus preferencias"
      />

      <View className="p-4">
        {/* Profile Info */}
        <View className="mb-6 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
          <View className="mb-4 flex-row items-center">
            <View className="mr-4 h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <MaterialSymbol name="person" size={24} color="text-blue-500" />
            </View>
            <View className="flex-1">
              <Text className="text-xl font-semibold text-gray-800">
                {user?.name || 'Usuario'}
              </Text>
              <Text className="text-gray-600">{user?.email}</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="space-y-3">
          <TouchableOpacity className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <MaterialSymbol name="person" size={24} color="text-blue-500" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  Información Personal
                </Text>
                <Text className="text-gray-600">Edita tu perfil</Text>
              </View>
              <MaterialSymbol
                name="chevron_right"
                size={20}
                color="text-gray-400"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <MaterialSymbol name="lock" size={24} color="text-green-500" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  Seguridad
                </Text>
                <Text className="text-gray-600">Cambia tu contraseña</Text>
              </View>
              <MaterialSymbol
                name="chevron_right"
                size={20}
                color="text-gray-400"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <MaterialSymbol
                  name="notifications"
                  size={24}
                  color="text-purple-500"
                />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  Notificaciones
                </Text>
                <Text className="text-gray-600">Configura alertas</Text>
              </View>
              <MaterialSymbol
                name="chevron_right"
                size={20}
                color="text-gray-400"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <View className="flex-row items-center">
              <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                <MaterialSymbol name="help" size={24} color="text-yellow-500" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  Ayuda y Soporte
                </Text>
                <Text className="text-gray-600">Contacta soporte</Text>
              </View>
              <MaterialSymbol
                name="chevron_right"
                size={20}
                color="text-gray-400"
              />
            </View>
          </TouchableOpacity>

          {user?.role === UserRole.TRANSPORTER && (
            <>
              <TouchableOpacity className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <View className="flex-row items-center">
                  <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <MaterialSymbol
                      name="directions_car"
                      size={24}
                      color="text-orange-500"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      Mis Vehículos
                    </Text>
                    <Text className="text-gray-600">Gestiona tu flota</Text>
                  </View>
                  <MaterialSymbol
                    name="chevron_right"
                    size={20}
                    color="text-gray-400"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <View className="flex-row items-center">
                  <View className="mr-4 h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <MaterialSymbol
                      name="account_balance_wallet"
                      size={24}
                      color="text-green-500"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-800">
                      Ganancias
                    </Text>
                    <Text className="text-gray-600">Revisa tus ingresos</Text>
                  </View>
                  <MaterialSymbol
                    name="chevron_right"
                    size={20}
                    color="text-gray-400"
                  />
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={logout}
          className="mt-6 items-center rounded-lg bg-red-500 p-4"
        >
          <MaterialSymbol name="logout" size={24} color="text-white" />
          <Text className="mt-2 font-semibold text-white">Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
