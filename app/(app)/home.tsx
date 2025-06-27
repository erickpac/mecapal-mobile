import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserHomeScreen from "@/features/user/screens/home.screen";
import TransporterDashboardScreen from "@/features/transporter/screens/dashboard.screen";

export default function Home() {
  const { user } = useStore();

  // If transporter, show transporter dashboard
  if (user?.role === UserRole.TRANSPORTER) {
    return <TransporterDashboardScreen />;
  }

  // If regular user, show user home
  return <UserHomeScreen />;
}
