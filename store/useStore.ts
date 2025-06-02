import { User } from "@/services/api/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setHasCompletedOnboarding: (completed: boolean) => void;
  logout: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      hasCompletedOnboarding: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => set({ token }),
      setHasCompletedOnboarding: (completed) =>
        set({ hasCompletedOnboarding: completed }),
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        router.replace("/login");
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
