import { useEffect } from "react";
import { router } from "expo-router";

export default function AuthIndex() {
  useEffect(() => {
    // Redirect to login as the default auth screen
    router.replace("/onboarding/auth/login");
  }, []);

  return null;
}
