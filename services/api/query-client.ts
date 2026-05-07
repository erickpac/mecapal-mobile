import { QueryClient } from '@tanstack/react-query';
import { API_CONFIG } from './config/constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: API_CONFIG.RETRY_ATTEMPTS,
      staleTime: API_CONFIG.STALE_TIME,
    },
  },
});
