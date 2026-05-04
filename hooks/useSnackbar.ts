import { useContext, useMemo } from 'react';
import {
  SnackbarContext,
  SnackbarContextValue,
} from '@/components/snackbar-provider';

interface UseSnackbarReturn extends SnackbarContextValue {
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
}

export const useSnackbar = (): UseSnackbarReturn => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error(
      'useSnackbar must be used within a SnackbarProvider. Wrap your app with <SnackbarProvider>.',
    );
  }

  const { showSnackbar, hideSnackbar } = context;

  return useMemo<UseSnackbarReturn>(
    () => ({
      showSnackbar,
      hideSnackbar,
      showSuccess: (message, duration) =>
        showSnackbar({ message, variant: 'success', duration }),
      showError: (message, duration) =>
        showSnackbar({ message, variant: 'error', duration }),
      showInfo: (message, duration) =>
        showSnackbar({ message, variant: 'info', duration }),
    }),
    [showSnackbar, hideSnackbar],
  );
};
