import UserEmergencyScreen from "@/features/user/screens/emergency.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationHeader } from "@/components/navigation-header";

export default function Emergency() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <NavigationHeader title="Emergencia" />
      <UserEmergencyScreen />
    </SafeAreaView>
  );
}
