import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";
import { View } from "react-native";
import "../global.css";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useTokenInitialization } from "@/hooks/useTokenInitialization";
import { API_CONFIG } from "@/services/api/config/constants";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";
import { useEffect } from "react";
import { useStatusBar } from "@/hooks/useStatusBar";

SplashScreen.preventAutoHideAsync();

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
  useStatusBar();

  const [loaded] = useFonts({
    MaterialSymbolsOutlined: require("../assets/fonts/MaterialSymbolsOutlined.ttf"),
    MaterialSymbolsRounded: require("../assets/fonts/MaterialSymbolsRounded.ttf"),
    MaterialSymbolsSharp: require("../assets/fonts/MaterialSymbolsSharp.ttf"),
    // Plus Jakarta Sans font family
    PlusJakartaSansRegular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansExtraLight: require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    PlusJakartaSansExtraLightItalic: require("../assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf"),
    PlusJakartaSansLight: require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    PlusJakartaSansLightItalic: require("../assets/fonts/PlusJakartaSans-LightItalic.ttf"),
    PlusJakartaSansItalic: require("../assets/fonts/PlusJakartaSans-Italic.ttf"),
    PlusJakartaSansMedium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSansMediumItalic: require("../assets/fonts/PlusJakartaSans-MediumItalic.ttf"),
    PlusJakartaSansSemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    PlusJakartaSansSemiBoldItalic: require("../assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf"),
    PlusJakartaSansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansBoldItalic: require("../assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
    PlusJakartaSansExtraBold: require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    PlusJakartaSansExtraBoldItalic: require("../assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <PaperProvider>
          <View className="flex-1 bg-white">
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "white" },
              }}
            />
          </View>
        </PaperProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
