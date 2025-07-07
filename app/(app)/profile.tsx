import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserProfileScreen from "@/features/user/screens/profile.screen";
import GuestProfileScreen from "@/features/user/screens/guest-profile.screen";
import TransporterProfileScreen from "@/features/transporter/screens/profile.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileIndex() {
  const { user, isAuthenticated } = useStore();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {!isAuthenticated ? (
        <GuestProfileScreen />
      ) : /* If transporter, show transporter profile */
      user?.role === UserRole.TRANSPORTER ? (
        <TransporterProfileScreen />
      ) : (
        <UserProfileScreen />
      )}
    </SafeAreaView>
  );
}
