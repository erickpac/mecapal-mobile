import { useStore } from "@/store/useStore";
import SecurityScreen from "@/features/user/screens/profile/security/security.screen";

export default function SecurityIndex() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <SecurityScreen />
            )}
        </>
    );
}