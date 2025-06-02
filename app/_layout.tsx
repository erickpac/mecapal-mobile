import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import "../global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function RootLayout() {
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
