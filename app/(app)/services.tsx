import UserServicesScreen from "@/features/user/screens/services.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Services() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <UserServicesScreen />
    </SafeAreaView>
  );
}
