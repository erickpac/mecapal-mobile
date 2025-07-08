import GuestAuthScreen from "@/features/user/screens/guest-auth.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <GuestAuthScreen />
    </SafeAreaView>
  );
}
