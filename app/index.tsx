import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { replaceRoute } from "@/features/shared/routes";
import { ONBOARDING_ROUTES } from "@/features/onboarding/routes";
import { USER_ROUTES } from "@/features/user/routes";

export default function Index() {
  const { isAuthenticated, isGuestMode, hasCompletedOnboarding } = useStore();

  useEffect(() => {
    const navigate = async () => {
      try {
        // If user hasn't completed onboarding, show onboarding
        if (hasCompletedOnboarding) {
          replaceRoute(ONBOARDING_ROUTES.ONBOARDING);
          return;
        }

        // If user has completed onboarding, go to home
        replaceRoute(USER_ROUTES.HOME);
      } catch (error) {
        console.error("Navigation error:", error);
      }
    };

    navigate();
  }, [isAuthenticated, isGuestMode, hasCompletedOnboarding]);

  return <LoadingScreen />;
}
