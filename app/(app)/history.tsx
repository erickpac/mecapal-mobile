import { useStore } from "@/store/useStore";
import UserHistoryScreen from "@/features/user/screens/history.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryIndex() {
  const { isAuthenticated } = useStore();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <UserHistoryScreen />
    </SafeAreaView>
  );
}
