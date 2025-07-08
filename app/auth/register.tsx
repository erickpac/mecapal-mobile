import RegisterScreen from "@/features/auth/screens/register";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <RegisterScreen />
    </SafeAreaView>
  );
}
