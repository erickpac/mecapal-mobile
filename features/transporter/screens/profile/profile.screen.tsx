import { useStore } from '@/store/useStore';
import { Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import { MaterialSymbol } from '@/components/material-symbol';
import { NavigationHeader } from '@/components/navigation-header';
import MaterialIcon from '@/components/material-icon';
import { useTranslation } from 'react-i18next';
import Avatar from '@/components/avatar';
import { navigateToHelp, navigateToSecurity } from '@/features/user/routes';
import {
  navigateToTransporterInfo,
  navigateToEarnings,
} from '@/features/transporter/routes';
import StarsRating from '@/components/stars-rating';
import { COLORS } from '@/consts/colors';

export default function TransporterProfileScreen() {
  const { user, logout } = useStore();
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={false} borderBottom={false} />
      <View className="m-0 flex-1 bg-white">
        <View className="m-0 h-dvh flex-1 p-0">
          <View className="h-48 border-0 bg-blue-900">
            <Image
              source={require('../../../../assets/images/transporter_background.png')}
              className="absolute inset-0 h-full w-full"
              resizeMode="cover"
            />
          </View>
          {/* Profile Info */}
          <View className="-mt-20 mb-6 rounded-2xl border border-gray-100 bg-white p-4">
            <View className="items-center">
              <Avatar
                size={48}
                sizeEditButton={20}
                onPress={() => console.log('Edit avatar pressed')}
                className="-mt-20"
              />
              <View className="mt-4 items-center">
                <Text className="text-xl font-semibold text-gray-800">
                  {user?.name || 'Usuario'}
                </Text>
                <Text className="text-gray-600">{user?.email}</Text>
              </View>
            </View>
          </View>
          <View className="-mt-24 rounded-2xl bg-white p-4">
            <View className="items-center">
              <View className="items-center">
                <Text className="text-xl font-semibold text-gray-800">
                  {t('profile.title')}
                </Text>
                <Text className="text-gray-600">{user?.name || 'Jom Doe'}</Text>
                <View className="mt-2">
                  <StarsRating rating={4.5} />
                </View>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <ScrollView className="space-y-3 px-4">
            <TouchableOpacity
              onPress={() => {
                navigateToTransporterInfo();
              }}
              className="border-b border-gray-300 bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialIcon
                    name="account-circle-outline"
                    size={28}
                    color={COLORS.secondary}
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-lg font-semibold text-gray-800">
                    {t('profile.personalInfo.title')}
                  </Text>
                  <Text className="text-gray-600">
                    {t('profile.personalInfo.subtitle')}
                  </Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigateToEarnings();
              }}
              className="border-b border-gray-300 bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialIcon
                    name="cash-multiple"
                    size={28}
                    color={COLORS.secondary}
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-lg font-semibold text-gray-800">
                    {'Ganancias y Cuenta Bancaria'}
                  </Text>
                  <Text className="text-gray-600">
                    {'Revisa tus ganancias mensuales'}
                  </Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              className="border-b border-gray-300 bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialIcon
                    name="truck"
                    size={28}
                    color={COLORS.secondary}
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-lg font-semibold text-gray-800">
                    {'Mi Flota'}
                  </Text>
                  <Text className="text-gray-600">
                    {'Información de tus vehículos'}
                  </Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              className="border-b border-gray-300 bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialSymbol
                    name="location_on"
                    size={28}
                    color="text-secondary-500"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {'Areas de Cobertura'}
                  </Text>
                  <Text className="text-gray-600">
                    {'Ubicaciones Disponibles'}
                  </Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToSecurity()}
              className="border-b border-gray-300 bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialSymbol
                    name="lock"
                    size={28}
                    color="text-secondary-500"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {t('profile.security.title')}
                  </Text>
                  <Text className="text-gray-600">
                    {t('profile.security.subtitle')}
                  </Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateToHelp()}
              className="border-b border-gray-300 bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="mr-4 h-10 w-10 items-center justify-center">
                  <MaterialSymbol
                    name="help"
                    size={28}
                    color="text-secondary-500"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {t('profile.help.title')}
                  </Text>
                  <Text className="text-gray-600">
                    {t('profile.help.subtitle')}
                  </Text>
                </View>
                <MaterialIcon
                  name="chevron-right"
                  size={20}
                  color={COLORS.gray}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View className="absolute bottom-0 left-0 right-0 bg-white p-4">
            {/* Logout Button */}
            <TouchableOpacity
              onPress={logout}
              className="mt-6 flex flex-row items-center gap-2 p-4 align-middle"
            >
              <MaterialIcon name="logout" size={24} color={COLORS.secondary} />
              <Text className="text-left text-base font-semibold text-secondary-500">
                {t('profile.account.logout')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
