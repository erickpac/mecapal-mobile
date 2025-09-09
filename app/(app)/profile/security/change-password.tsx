import { useStore } from "@/store/useStore";
import { SecurityScreen } from "@/features/user/screens/profile/security";

export default function ChangePassword() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <SecurityScreen />
            )}
        </>
    );
}