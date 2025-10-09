import { useStore } from '@/store/useStore';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import { NavigationHeader } from '@/components/navigation-header';
import MaterialIcon from '@/components/material-icon';
import { COLORS } from '@/consts/colors';
import { useTranslation } from 'react-i18next';
import {
  navigateToHelp,
  navigateToInfo,
  navigateToAddresses,
  navigateToSecurity,
} from '../../routes';
import Avatar from '@/components/avatar';

const listProfileOptions = [
  {
    icon: 'account-circle-outline',
    title: 'profile.personalInfo.title',
    subTitle: 'profile.personalInfo.subtitle',
    onPress: navigateToInfo,
  },
  {
    icon: 'domain',
    title: 'profile.address.title',
    subTitle: 'profile.address.subtitle',
    onPress: navigateToAddresses,
  },
  {
    icon: 'lock-outline',
    title: 'profile.security.title',
    subTitle: 'profile.security.subtitle',
    onPress: navigateToSecurity,
  },
  {
    icon: 'help-circle-outline',
    title: 'profile.help.title',
    subTitle: 'profile.help.subtitle',
    onPress: navigateToHelp,
  },
];

export default function UserProfileScreen() {
  const { user, logout } = useStore();
  const { t } = useTranslation();

  const handleLogout = () => {
    Alert.alert(
      `${t('profile.account.logout')}`,
      '¿Estás seguro que deseas cerrar sesión?',
      [
        {
          text: 'Sí, cerrar sesión',
          onPress: logout,
        },
        {
          text: 'Regresar',
          style: 'cancel',
        },
      ],
    );
  };

  const renderListItem = ({
    icon,
    title,
    subTitle,
    onPress,
  }: {
    icon: string;
    title: string;
    subTitle: string;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        className="border-b border-gray-300 bg-white p-4"
      >
        <View className="flex-row items-center">
          <View className="mr-4 h-10 w-10 items-center justify-center">
            <MaterialIcon name={icon} size={28} color={COLORS.primary} />
          </View>
          <View className="flex-1">
            <Text className="font-plus-jakarta-semibold text-lg font-semibold text-gray-800">
              {t(`${title}`)}
            </Text>
            <Text className="font-plus-jakarta-light text-gray-600">
              {t(`${subTitle}`)}
            </Text>
          </View>
          <MaterialIcon name="chevron-right" size={20} color={COLORS.gray} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <NavigationHeader title="" showBackButton={false} borderBottom={false} />
      <View className="m-0 flex-1 bg-white">
        <View className="m-0 flex-1 p-0">
          <View className="h-48 border-0 bg-blue-900">
            <Image
              source={require('../../../../assets/images/profile-background.png')}
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
                <Text className="font-plus-jakarta-semibold text-xl font-semibold text-gray-800">
                  {t('profile.title')}
                </Text>
                <Text className="text-gray-600">{user?.name || 'Jom Doe'}</Text>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <View className="space-y-3 px-4">
            <FlatList
              data={listProfileOptions}
              renderItem={({ item }) => renderListItem(item)}
              keyExtractor={(item) => item.icon.split('_').join('').toString()}
            />
          </View>
          <View className="absolute bottom-0 left-0 right-0 bg-white p-4">
            {/* Logout Button */}
            <TouchableOpacity
              onPress={handleLogout}
              className="mt-6 flex flex-row items-center gap-2 p-4 align-middle"
            >
              <MaterialIcon name="logout" size={24} color="#7C2F19" />
              <Text className="text-left font-plus-jakarta-semibold text-base font-semibold text-[#7C2F19] underline">
                {t('profile.account.logout')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
