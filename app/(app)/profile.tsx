import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserProfileScreen from "@/features/user/screens/profile.screen";
import TransporterProfileScreen from "@/features/transporter/screens/profile.screen";

export default function Profile() {
  const { user } = useStore();

  // If transporter, show transporter profile
  if (user?.role === UserRole.TRANSPORTER) {
    return <TransporterProfileScreen />;
  }

  // If regular user, show user profile
  return <UserProfileScreen />;
}
