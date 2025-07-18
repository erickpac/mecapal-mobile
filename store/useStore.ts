import { User, UserRole } from "@/features/auth/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import TokenManager from "@/features/auth/services/token-manager";
import { ROUTES, replaceRoute } from "@/utils/navigation";

interface AppState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isGuestMode: boolean;
  hasCompletedOnboarding: boolean;
  selectedUserType: UserRole | undefined;
  setUser: (user: User | null) => void;
  setAccessToken: (accessToken: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setHasCompletedOnboarding: (completed: boolean) => void;
  setSelectedUserType: (userType: UserRole | undefined) => void;
  setGuestMode: (isGuest: boolean) => void;
  logout: () => void;
  enterGuestMode: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isGuestMode: false,
      hasCompletedOnboarding: false,
      selectedUserType: undefined,
      setUser: (user) =>
        set({ user, isAuthenticated: !!user, isGuestMode: false }),
      setAccessToken: (accessToken: string | null) => {
        if (accessToken) {
          TokenManager.setToken(accessToken);
        } else {
          TokenManager.clearToken();
        }
        set({ accessToken });
      },
      setRefreshToken: (refreshToken: string | null) => set({ refreshToken }),
      setHasCompletedOnboarding: (completed) => {
        set({ hasCompletedOnboarding: completed });
        replaceRoute(ROUTES.HOME);
      },
      setSelectedUserType: (userType) => set({ selectedUserType: userType }),
      setGuestMode: (isGuest) => set({ isGuestMode: isGuest }),
      logout: () => {
        TokenManager.clearToken();
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          isGuestMode: false,
        });
        replaceRoute(ROUTES.HOME);
      },
      enterGuestMode: () => {
        set({
          isGuestMode: true,
          isAuthenticated: false,
          user: null,
          accessToken: null,
          refreshToken: null,
        });
        replaceRoute(ROUTES.HOME);
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
