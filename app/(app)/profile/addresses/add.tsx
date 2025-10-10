import { useStore } from '@/store/useStore';
import { AddAddressScreen } from '@/features/user/screens/profile/addresses';

export default function AddAddress() {
  const { isAuthenticated } = useStore();

  return <>{isAuthenticated && <AddAddressScreen />}</>;
}
