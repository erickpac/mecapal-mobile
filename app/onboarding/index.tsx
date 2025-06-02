import OnboardingScreen from "@/features/onboarding/OnboardingScreen";
import { useEffect } from "react";

export default function Onboarding() {
  useEffect(() => {
    console.log("Onboarding screen mounted");
  }, []);

  return <OnboardingScreen />;
}
