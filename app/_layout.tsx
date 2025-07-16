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
  useStatusBar();
  useTokenInitialization();

  const [loaded] = useFonts({
    "Material Symbols Outlined Regular": require("../assets/fonts/material_symbols_outlined.ttf"),
    "Material Symbols Rounded Regular": require("../assets/fonts/material_symbols_rounded.ttf"),
    "Material Symbols Sharp Regular": require("../assets/fonts/material_symbols_sharp.ttf"),
    // Plus Jakarta Sans font family
    "Plus Jakarta Sans Regular": require("../assets/fonts/plus_jakarta_sans_regular.ttf"),
    "Plus Jakarta Sans Extra Light": require("../assets/fonts/plus_jakarta_sans_extra_light.ttf"),
    "Plus Jakarta Sans Extra Light Italic": require("../assets/fonts/plus_jakarta_sans_extra_light_italic.ttf"),
    "Plus Jakarta Sans Light": require("../assets/fonts/plus_jakarta_sans_light.ttf"),
    "Plus Jakarta Sans Light Italic": require("../assets/fonts/plus_jakarta_sans_light_italic.ttf"),
    "Plus Jakarta Sans Medium": require("../assets/fonts/plus_jakarta_sans_medium.ttf"),
    "Plus Jakarta Sans Medium Italic": require("../assets/fonts/plus_jakarta_sans_medium_italic.ttf"),
    "Plus Jakarta Sans Semi Bold": require("../assets/fonts/plus_jakarta_sans_semi_bold.ttf"),
    "Plus Jakarta Sans Semi Bold Italic": require("../assets/fonts/plus_jakarta_sans_semi_bold_italic.ttf"),
    "Plus Jakarta Sans Bold": require("../assets/fonts/plus_jakarta_sans_bold.ttf"),
    "Plus Jakarta Sans Bold Italic": require("../assets/fonts/plus_jakarta_sans_bold_italic.ttf"),
    "Plus Jakarta Sans ExtraBold": require("../assets/fonts/plus_jakarta_sans_extra_bold.ttf"),
    "Plus Jakarta Sans ExtraBold Italic": require("../assets/fonts/plus_jakarta_sans_extra_bold_italic.ttf"),
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
