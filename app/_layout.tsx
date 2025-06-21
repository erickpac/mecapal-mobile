import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { View } from "react-native";
import "../global.css";
import { useTokenInitialization } from "@/hooks/useTokenInitialization";
import { API_CONFIG } from "@/services/api/config/constants";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: API_CONFIG.RETRY_ATTEMPTS,
      staleTime: API_CONFIG.STALE_TIME,
    },
  },
});

export default function RootLayout() {
  // Initialize TokenManager with persisted token
  useTokenInitialization();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <View className="flex-1 bg-white">
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "fade",
              contentStyle: { backgroundColor: "white" },
            }}
          />
        </View>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
