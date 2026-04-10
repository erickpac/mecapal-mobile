import { useStore } from '@/store/useStore';
import { EditAddressScreen } from '@/features/user/screens/profile/addresses';

export default function EditAddress() {
  const { isAuthenticated } = useStore();

  return <>{isAuthenticated && <EditAddressScreen />}</>;
}
