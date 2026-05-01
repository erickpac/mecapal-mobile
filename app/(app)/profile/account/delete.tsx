import { useStore } from '@/store/useStore';
import DeleteAccountConfirmScreen from '@/features/account/screens/delete-account-confirm.screen';

export default function DeleteAccount() {
  const { isAuthenticated } = useStore();

  return <>{isAuthenticated && <DeleteAccountConfirmScreen />}</>;
}
