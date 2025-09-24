import { useStore } from '@/store/useStore';
import TransporterEarningsScreen from '@/features/transporter/screens/earnings.screen';
import { UserRole } from '@/features/auth/types/user';

export default function EarningsIndex() {
  const { isAuthenticated } = useStore();
  return (
    <>
      {isAuthenticated && UserRole.TRANSPORTER && <TransporterEarningsScreen />}
    </>
  );
}
