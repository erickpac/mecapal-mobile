import { User, UserRole } from '@/features/auth/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import TokenManager from '@/features/auth/services/token-manager';
import { queryClient } from '@/services/api/query-client';

interface AppState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  idToken: string | null;
  isAuthenticated: boolean;
  isGuestMode: boolean;
  hasCompletedOnboarding: boolean;
  selectedUserType: UserRole | undefined;
  pendingDeletionModal: {
    visible: boolean;
    scheduledFor: string | null;
  };
  setUser: (user: User | null) => void;
  setAccessToken: (accessToken: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setIdToken: (idToken: string | null) => void;
  setHasCompletedOnboarding: (completed: boolean) => void;
  setSelectedUserType: (userType: UserRole | undefined) => void;
  setGuestMode: (isGuest: boolean) => void;
  setDeletionScheduledFor: (scheduledFor: string | null) => void;
  showPendingDeletionModal: (scheduledFor: string) => void;
  hidePendingDeletionModal: () => void;
  logout: () => void;
  enterGuestMode: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      idToken: null,
      isAuthenticated: false,
      isGuestMode: false,
      hasCompletedOnboarding: false,
      selectedUserType: undefined,
      pendingDeletionModal: { visible: false, scheduledFor: null },
      setUser: (user) =>
        set({ user, isAuthenticated: !!user, isGuestMode: false }),
      setDeletionScheduledFor: (scheduledFor) =>
        set((state) =>
          state.user
            ? { user: { ...state.user, deletionScheduledFor: scheduledFor } }
            : {},
        ),
      showPendingDeletionModal: (scheduledFor) =>
        set((state) => ({
          pendingDeletionModal: { visible: true, scheduledFor },
          user: state.user
            ? { ...state.user, deletionScheduledFor: scheduledFor }
            : state.user,
        })),
      hidePendingDeletionModal: () =>
        set({ pendingDeletionModal: { visible: false, scheduledFor: null } }),
      setAccessToken: (accessToken: string | null) => {
        if (accessToken) {
          TokenManager.setToken(accessToken);
        } else {
          TokenManager.clearToken();
        }
        set({ accessToken });
      },
      setRefreshToken: (refreshToken: string | null) => set({ refreshToken }),
      setIdToken: (idToken: string | null) => set({ idToken }),
      setHasCompletedOnboarding: (completed) => {
        set({ hasCompletedOnboarding: completed });
      },
      setSelectedUserType: (userType) => set({ selectedUserType: userType }),
      setGuestMode: (isGuest) => set({ isGuestMode: isGuest }),
      logout: () => {
        import('@/features/auth/services/auth').then(({ authService }) =>
          authService.signOut().catch(() => {}),
        );
        TokenManager.clearToken();
        queryClient.clear();
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          idToken: null,
          isAuthenticated: false,
          isGuestMode: false,
          selectedUserType: undefined,
        });
      },
      enterGuestMode: () => {
        set({
          isGuestMode: true,
          isAuthenticated: false,
          user: null,
          accessToken: null,
          refreshToken: null,
          idToken: null,
        });
      },
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
