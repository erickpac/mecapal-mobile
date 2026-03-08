import { useStore } from '@/store/useStore';
import SecurityScreen from '@/features/user/screens/profile/security/security.screen';

export default function Devices() {
  const { isAuthenticated } = useStore();

  return <>{isAuthenticated && <SecurityScreen />}</>;
}
