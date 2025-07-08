import LoginScreen from "@/features/auth/screens/login";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <LoginScreen />
    </SafeAreaView>
  );
}
