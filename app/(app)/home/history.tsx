import UserHistoryScreen from "@/features/user/screens/history.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationHeader } from "@/components/navigation-header";

export default function History() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <NavigationHeader title="Historial" />
      <UserHistoryScreen />
    </SafeAreaView>
  );
}
