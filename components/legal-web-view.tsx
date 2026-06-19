import { useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationHeader } from '@/components/navigation-header';
import { getWebBaseUrl } from '@/consts/config';
import { COLORS } from '@/consts/colors';

interface LegalWebViewProps {
  slug: string;
}

export const LegalWebView = ({ slug }: LegalWebViewProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const uri = `${getWebBaseUrl()}/${slug}?app=1`;

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <View className="flex-1">
        {error ? (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-center font-plus-jakarta text-base text-gray-700">
              No se pudo cargar el documento. Verifica tu conexión e inténtalo de
              nuevo.
            </Text>
          </View>
        ) : (
          <>
            <WebView
              source={{ uri }}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
              onError={() => {
                setError(true);
                setLoading(false);
              }}
              style={{ flex: 1 }}
            />
            {loading && (
              <View className="absolute inset-0 items-center justify-center bg-white">
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
            )}
          </>
        )}
      </View>
    </>
  );
};
