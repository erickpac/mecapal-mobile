import { useStore } from '@/store/useStore';
import TransporterHelpScreen from '@/features/transporter/screens/profile/help/help.screen';

export default function TransporterHelpIndex() {
  const { isAuthenticated } = useStore();

  return <>{isAuthenticated && <TransporterHelpScreen />}</>;
}
