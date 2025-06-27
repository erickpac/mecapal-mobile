import SharedSettingsScreen from "@/features/shared/screens/settings.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <SharedSettingsScreen />
    </SafeAreaView>
  );
}
