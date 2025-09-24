import { useStore } from "@/store/useStore";
import { AddressScreen } from "@/features/user/screens/profile/addresses";

export default function EditAddress() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <AddressScreen />
            )}
        </>
    );
}