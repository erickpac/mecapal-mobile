import OnboardingScreen from "@/features/onboarding/onboarding.screen";
import { useEffect } from "react";

export default function Onboarding() {
  useEffect(() => {
    console.log("Onboarding screen mounted");
  }, []);

  return <OnboardingScreen />;
}
