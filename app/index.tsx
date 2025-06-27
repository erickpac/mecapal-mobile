import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";

export default function Index() {
  const { isAuthenticated } = useStore();

  useEffect(() => {
    const navigate = async () => {
      try {
        if (!isAuthenticated) {
          router.replace("/login");
        } else {
          router.replace("/home");
        }
      } catch (error) {
        console.error("Navigation error:", error);
      }
    };

    navigate();
  }, [isAuthenticated]);

  return <LoadingScreen />;
}
