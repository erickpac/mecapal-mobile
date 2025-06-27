import UserEmergencyScreen from "@/features/user/screens/emergency.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Emergency() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <UserEmergencyScreen />
    </SafeAreaView>
  );
}
