import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { replaceRoute, ROUTES } from "@/utils/navigation";

export default function Index() {
  const { isAuthenticated, isGuestMode, hasCompletedOnboarding } = useStore();

  useEffect(() => {
    const navigate = async () => {
      try {
        // If user hasn't completed onboarding, show onboarding
        if (true) {
          replaceRoute(ROUTES.ONBOARDING);
          return;
        }

        // If user has completed onboarding, go to home
        replaceRoute(ROUTES.HOME);
      } catch (error) {
        console.error("Navigation error:", error);
      }
    };

    navigate();
  }, [isAuthenticated, isGuestMode, hasCompletedOnboarding]);

  return <LoadingScreen />;
}
