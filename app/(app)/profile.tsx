import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserProfileScreen from "@/features/user/screens/profile.screen";
import TransporterProfileScreen from "@/features/transporter/screens/profile.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileIndex() {
  const { user } = useStore();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* If transporter, show transporter profile */}
      {user?.role === UserRole.TRANSPORTER ? (
        <TransporterProfileScreen />
      ) : (
        <UserProfileScreen />
      )}
    </SafeAreaView>
  );
}
