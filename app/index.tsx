import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isAuthenticated, hasCompletedOnboarding } = useStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    console.log("Estado actual:", { isAuthenticated, hasCompletedOnboarding });

    const navigate = async () => {
      try {
        if (!hasCompletedOnboarding) {
          router.replace("/onboarding");
        } else if (!isAuthenticated) {
          router.replace("/login");
        } else {
          console.log("Navegando a home...");
          router.replace("/home");
        }
      } catch (error) {
        console.error("Error en la navegación:", error);
      }
    };

    navigate();
  }, [isAuthenticated, hasCompletedOnboarding, ready]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
