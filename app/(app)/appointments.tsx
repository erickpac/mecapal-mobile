import UserAppointmentsScreen from "@/features/user/screens/appointments.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Appointments() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <UserAppointmentsScreen />
    </SafeAreaView>
  );
}
