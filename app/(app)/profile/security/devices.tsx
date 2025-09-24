import { useStore } from "@/store/useStore";
import { SecurityScreen } from "@/features/user/screens/profile/security";

export default function Devices() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <SecurityScreen />
            )}
        </>
    );
}