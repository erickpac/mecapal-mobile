import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isAuthenticated, hasCompletedOnboarding } = useStore();

  useEffect(() => {
    const navigate = async () => {
      try {
        if (!hasCompletedOnboarding) {
          router.replace("/onboarding");
        } else if (!isAuthenticated) {
          router.replace("/login");
        } else {
          router.replace("/dashboard");
        }
      } catch (error) {
        console.error("Error en la navegación:", error);
      }
    };

    navigate();
  }, [isAuthenticated, hasCompletedOnboarding]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
