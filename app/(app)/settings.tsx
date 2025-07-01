import SettingsScreen from "@/features/shared/screens/settings.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsIndex() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <SettingsScreen />
    </SafeAreaView>
  );
}
