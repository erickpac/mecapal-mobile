import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import "../global.css";
import { useTokenInitialization } from "@/hooks/useTokenInitialization";
import { API_CONFIG } from "@/services/api/constants";

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

  useEffect(() => {
    console.log("Root layout mounted");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 bg-white">
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
            contentStyle: { backgroundColor: "white" },
          }}
        />
      </View>
    </QueryClientProvider>
  );
}
