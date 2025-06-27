import TransporterScheduleScreen from "@/features/transporter/screens/schedule.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Schedule() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <TransporterScheduleScreen />
    </SafeAreaView>
  );
}
