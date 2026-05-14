import { useStore } from '@/store/useStore';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { NavigationHeader } from '@/components/navigation-header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { IMAGES } from '@/consts/images';
import { useTranslation } from 'react-i18next';
import {
  navigateToHelp,
  navigateToInfo,
  navigateToAddresses,
  navigateToSecurity,
} from '../../routes';
import Avatar from '@/components/avatar';
import { IconName } from '@/types/navigation';
import { replaceRoute } from '@/features/shared/routes';
import { navigateToDeleteAccount } from '@/features/account/routes';

const listProfileOptions: {
  icon: IconName;
  title: string;
  subTitle: string;
  onPress: () => void;
}[] = [
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
      t('profile.account.logout'),
      t('profile.account.logoutConfirm'),
      [
        {
          text: t('profile.account.logoutYes'),
          style: 'destructive',
          onPress: () => {
            logout();
            replaceRoute('/(app)/home');
          },
        },
        {
          text: t('profile.account.logoutCancel'),
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
    icon: IconName;
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
            <MaterialCommunityIcons
              name={icon}
              size={28}
              color={COLORS.primary}
            />
          </View>
          <View className="flex-1">
            <Text className="font-plus-jakarta-semibold text-lg font-semibold text-gray-800">
              {t(`${title}`)}
            </Text>
            <Text className="font-plus-jakarta-light text-gray-600">
              {t(`${subTitle}`)}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={COLORS.lightGray[700]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <NavigationHeader
        variant="logo"
        showBackButton={false}
        borderBottom={false}
      />
      <View className="flex-1 bg-white">
        <ScrollView
          className="flex-1"
          contentContainerClassName="grow pb-4"
          bounces={false}
        >
          <View className="h-48 border-0 bg-blue-900">
            <Image
              source={IMAGES.backgrounds.profileClient}
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
                uri={user?.profilePhotoUrl}
                className="-mt-20"
              />
              <View className="mt-4 items-center">
                <Text className="text-xl font-semibold text-gray-800">
                  {user ? `${user.firstName} ${user.lastName}` : 'Usuario'}
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
                <Text className="text-gray-600">
                  {user ? `${user.firstName} ${user.lastName}` : 'John Doe'}
                </Text>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <View className="px-4">
            {listProfileOptions.map((item) => (
              <View key={item.icon.split('_').join('').toString()}>
                {renderListItem(item)}
              </View>
            ))}
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            onPress={handleLogout}
            className="mt-6 flex flex-row items-center gap-2 p-4 align-middle"
          >
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={COLORS.tertiary700}
            />
            <Text className="text-left font-plus-jakarta-semibold text-base font-semibold text-[#7C2F19] underline">
              {t('profile.account.logout')}
            </Text>
          </TouchableOpacity>
          {/* Delete Account Button */}
          <TouchableOpacity
            onPress={navigateToDeleteAccount}
            className="flex flex-row items-center gap-2 px-4 align-middle"
          >
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={24}
              color={COLORS.error}
            />
            <Text className="text-left font-plus-jakarta-semibold text-base font-semibold text-red-600 underline">
              {t('profile.account.deleteAccount')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}
