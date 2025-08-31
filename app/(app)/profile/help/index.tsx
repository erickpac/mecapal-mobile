import { useStore } from "@/store/useStore";
import UserHelpScreen from "@/features/user/screens/profile/help/help.screen";


export default function ProfileIndex() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <UserHelpScreen />
            )}
        </>
    );
}
