import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isAuthenticated, hasCompletedOnboarding } = useStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log("Iniciando aplicación...");
    const timer = setTimeout(() => {
      console.log("Aplicación lista para navegar");
      setReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;

    console.log("Estado actual:", { isAuthenticated, hasCompletedOnboarding });

    const navigate = async () => {
      try {
        if (!hasCompletedOnboarding) {
          console.log("Navegando a onboarding...");
          await router.replace("/onboarding");
        } else if (!isAuthenticated) {
          console.log("Navegando a login...");
          await router.replace("/login");
        } else {
          console.log("Navegando a dashboard...");
          await router.replace("/dashboard");
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
