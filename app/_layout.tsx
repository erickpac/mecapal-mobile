import { QueryClientProvider } from '@tanstack/react-query';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import '../global.css';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useTokenInitialization } from '@/hooks/useTokenInitialization';
import { queryClient } from '@/services/api/query-client';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/locales/i18n';
import { useEffect } from 'react';
import { useStatusBar } from '@/hooks/useStatusBar';
import { PendingDeletionModal } from '@/features/account/components/pending-deletion-modal';
import { SnackbarProvider } from '@/components/snackbar-provider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useStatusBar();
  useTokenInitialization();

  const [loaded] = useFonts({
    // Plus Jakarta Sans font family
    'Plus Jakarta Sans Regular': require('../assets/fonts/plus_jakarta_sans_regular.ttf'),
    'Plus Jakarta Sans Extra Light': require('../assets/fonts/plus_jakarta_sans_extra_light.ttf'),
    'Plus Jakarta Sans Extra Light Italic': require('../assets/fonts/plus_jakarta_sans_extra_light_italic.ttf'),
    'Plus Jakarta Sans Light': require('../assets/fonts/plus_jakarta_sans_light.ttf'),
    'Plus Jakarta Sans Light Italic': require('../assets/fonts/plus_jakarta_sans_light_italic.ttf'),
    'Plus Jakarta Sans Medium': require('../assets/fonts/plus_jakarta_sans_medium.ttf'),
    'Plus Jakarta Sans Medium Italic': require('../assets/fonts/plus_jakarta_sans_medium_italic.ttf'),
    'Plus Jakarta Sans Semi Bold': require('../assets/fonts/plus_jakarta_sans_semi_bold.ttf'),
    'Plus Jakarta Sans Semi Bold Italic': require('../assets/fonts/plus_jakarta_sans_semi_bold_italic.ttf'),
    'Plus Jakarta Sans Bold': require('../assets/fonts/plus_jakarta_sans_bold.ttf'),
    'Plus Jakarta Sans Bold Italic': require('../assets/fonts/plus_jakarta_sans_bold_italic.ttf'),
    'Plus Jakarta Sans ExtraBold': require('../assets/fonts/plus_jakarta_sans_extra_bold.ttf'),
    'Plus Jakarta Sans ExtraBold Italic': require('../assets/fonts/plus_jakarta_sans_extra_bold_italic.ttf'),
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
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <PaperProvider theme={MD3LightTheme}>
          <SnackbarProvider>
            <View className="flex-1 bg-white">
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: 'white' },
                }}
              >
                <Stack.Screen name="index" options={{ animation: 'none' }} />
                <Stack.Screen name="(app)" options={{ animation: 'none' }} />
                <Stack.Screen
                  name="onboarding"
                  options={{ animation: 'none' }}
                />
              </Stack>
              <PendingDeletionModal />
            </View>
          </SnackbarProvider>
        </PaperProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
