import TransporterEarningsScreen from "@/features/transporter/screens/earnings.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Earnings() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <TransporterEarningsScreen />
    </SafeAreaView>
  );
}
