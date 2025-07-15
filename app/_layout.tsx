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
    MaterialSymbolsOutlined: require("../assets/fonts/material_symbols_outlined.ttf"),
    MaterialSymbolsRounded: require("../assets/fonts/material_symbols_rounded.ttf"),
    MaterialSymbolsSharp: require("../assets/fonts/material_symbols_sharp.ttf"),
    // Plus Jakarta Sans font family
    PlusJakartaSansRegular: require("../assets/fonts/plus_jakarta_sans_regular.ttf"),
    PlusJakartaSansExtraLight: require("../assets/fonts/plus_jakarta_sans_extra_light.ttf"),
    PlusJakartaSansExtraLightItalic: require("../assets/fonts/plus_jakarta_sans_extra_light_italic.ttf"),
    PlusJakartaSansLight: require("../assets/fonts/plus_jakarta_sans_light.ttf"),
    PlusJakartaSansLightItalic: require("../assets/fonts/plus_jakarta_sans_light_italic.ttf"),
    PlusJakartaSansItalic: require("../assets/fonts/plus_jakarta_sans_italic.ttf"),
    PlusJakartaSansMedium: require("../assets/fonts/plus_jakarta_sans_medium.ttf"),
    PlusJakartaSansMediumItalic: require("../assets/fonts/plus_jakarta_sans_medium_italic.ttf"),
    PlusJakartaSansSemiBold: require("../assets/fonts/plus_jakarta_sans_semi_bold.ttf"),
    PlusJakartaSansSemiBoldItalic: require("../assets/fonts/plus_jakarta_sans_semi_bold_italic.ttf"),
    PlusJakartaSansBold: require("../assets/fonts/plus_jakarta_sans_bold.ttf"),
    PlusJakartaSansBoldItalic: require("../assets/fonts/plus_jakarta_sans_bold_italic.ttf"),
    PlusJakartaSansExtraBold: require("../assets/fonts/plus_jakarta_sans_extra_bold.ttf"),
    PlusJakartaSansExtraBoldItalic: require("../assets/fonts/plus_jakarta_sans_extra_bold_italic.ttf"),
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
