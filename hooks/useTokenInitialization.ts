import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import TokenManager from "@/features/auth/services/token-manager";

// Hook to initialize the token manager
export const useTokenInitialization = () => {
  const { accessToken } = useStore();

  useEffect(() => {
    // Initialize TokenManager with the persisted token
    if (accessToken) {
      TokenManager.setToken(accessToken);
    } else {
      TokenManager.clearToken();
    }
  }, [accessToken]);
};
