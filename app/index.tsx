import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";

export default function Index() {
  const { isAuthenticated, isGuestMode } = useStore();

  useEffect(() => {
    const navigate = async () => {
      try {
        if (isAuthenticated) {
          router.replace("/home");
        } else if (isGuestMode) {
          router.replace("/home");
        } else {
          // Si no está autenticado y no está en modo invitado, entrar como invitado
          router.replace("/home");
        }
      } catch (error) {
        console.error("Navigation error:", error);
      }
    };

    navigate();
  }, [isAuthenticated, isGuestMode]);

  return <LoadingScreen />;
}
