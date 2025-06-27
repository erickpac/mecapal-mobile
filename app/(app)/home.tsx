import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserHomeScreen from "@/features/user/screens/home.screen";
import TransporterDashboardScreen from "@/features/transporter/screens/dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { user } = useStore();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* If transporter, show transporter dashboard */}
      {user?.role === UserRole.TRANSPORTER ? (
        <TransporterDashboardScreen />
      ) : (
        <UserHomeScreen />
      )}
    </SafeAreaView>
  );
}
