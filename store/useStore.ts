import { User, UserRole } from "@/features/auth/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import TokenManager from "@/features/auth/services/token-manager";

interface AppState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isGuestMode: boolean;
  hasCompletedOnboarding: boolean;
  selectedUserType: UserRole | null;
  setUser: (user: User | null) => void;
  setAccessToken: (accessToken: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setHasCompletedOnboarding: (completed: boolean) => void;
  setSelectedUserType: (userType: UserRole | null) => void;
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
      selectedUserType: null,
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
      setHasCompletedOnboarding: (completed) =>
        set({ hasCompletedOnboarding: completed }),
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
        router.replace("/home");
      },
      enterGuestMode: () => {
        set({
          isGuestMode: true,
          isAuthenticated: false,
          user: null,
          accessToken: null,
          refreshToken: null,
        });
        router.replace("/home");
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
