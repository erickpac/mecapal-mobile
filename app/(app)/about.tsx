import GuestAboutScreen from "@/features/user/screens/guest-about.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <GuestAboutScreen />
    </SafeAreaView>
  );
}
