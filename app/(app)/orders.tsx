import TransporterOrdersScreen from "@/features/transporter/screens/orders.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Orders() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <TransporterOrdersScreen />
    </SafeAreaView>
  );
}
