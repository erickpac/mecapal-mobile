import { View, Text } from 'react-native';
import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import UserProfileScreen from '@/features/user/screens/profile/profile.screen';
import TransporterProfileScreen from '@/features/transporter/screens/profile/profile.screen';

export default function ProfileIndex() {
  const { user, isAuthenticated } = useStore();

  if (!isAuthenticated) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="font-plus-jakarta-semibold text-lg">Profile</Text>
      </View>
    );
  }

  return user?.role === UserRole.TRANSPORTER ? (
    <TransporterProfileScreen />
  ) : (
    <UserProfileScreen />
  );
}
