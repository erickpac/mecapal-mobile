import TransporterVehiclesScreen from "@/features/transporter/screens/vehicles.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VehiclesIndex() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <TransporterVehiclesScreen />
    </SafeAreaView>
  );
}
