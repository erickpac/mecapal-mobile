import { useStore } from '@/store/useStore';
import MapPickerScreen from '@/features/user/screens/profile/addresses/map-picker.screen';

export default function MapPicker() {
  const { isAuthenticated } = useStore();

  return <>{isAuthenticated && <MapPickerScreen />}</>;
}
