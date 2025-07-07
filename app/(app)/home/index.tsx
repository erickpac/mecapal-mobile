import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserHomeScreen from "@/features/user/screens/home.screen";
import GuestHomeScreen from "@/features/user/screens/guest-home.screen";
import TransporterDashboardScreen from "@/features/transporter/screens/dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeIndex() {
  const { user, isAuthenticated } = useStore();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* If not authenticated, show guest home */}
      {!isAuthenticated ? (
        <GuestHomeScreen />
      ) : /* If transporter, show transporter dashboard */
      user?.role === UserRole.TRANSPORTER ? (
        <TransporterDashboardScreen />
      ) : (
        <UserHomeScreen />
      )}
    </SafeAreaView>
  );
}
