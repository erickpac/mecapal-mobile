import UserHistoryScreen from "@/features/user/screens/history.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <UserHistoryScreen />
    </SafeAreaView>
  );
}
