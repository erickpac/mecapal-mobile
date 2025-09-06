import { useStore } from "@/store/useStore";
import UserPaymentScreen from "@/features/user/screens/profile/payment/payment.screen";


export default function ProfileIndex() {
  const { isAuthenticated } = useStore();

  return (
    <>
      {isAuthenticated && (
        <UserPaymentScreen />
      )}
    </>
  );
}
