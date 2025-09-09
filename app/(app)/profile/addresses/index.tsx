import { useStore } from "@/store/useStore";
import { AddressScreen } from "@/features/user/screens/profile/addresses";

export default function AddressesIndex() {
    const { isAuthenticated } = useStore();

    return (
        <>
            {isAuthenticated && (
                <AddressScreen />
            )}
        </>
    );
}