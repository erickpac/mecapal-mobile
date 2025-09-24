import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import UserProfileScreen from "@/features/user/screens/profile/profile.screen";
import TransporterProfileScreen from "@/features/transporter/screens/profile/profile.screen";
import GuestAuthScreen from "@/features/user/screens/guest-auth.screen";

export default function ProfileIndex() {
    const { user, isAuthenticated } = useStore();

    return (
        <>
            {!isAuthenticated ? (
                <GuestAuthScreen />
            ) : /* If transporter, show transporter profile */
                user?.role === UserRole.TRANSPORTER ? (
                    <TransporterProfileScreen />
                ) : (
                    <UserProfileScreen />
                )
            }
        </>
    );
}
