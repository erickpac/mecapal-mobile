import { useStore } from "@/store/useStore";
import InfoScreen from "@/features/user/screens/profile/info.screen";


export default function ProfileIndex() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <InfoScreen />
            )}
        </>
    );
}
