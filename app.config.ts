import { ExpoConfig, ConfigContext } from 'expo/config';

const IS_STAGING = process.env.APP_ENV !== 'production';

const getAppName = () => (IS_STAGING ? 'Mekapal (Staging)' : 'Mekapal');

const getBundleIdentifier = () =>
  IS_STAGING ? 'com.mekapal.app.staging' : 'com.mekapal.app';

const getAndroidPackage = () =>
  IS_STAGING ? 'com.mekapal.app.staging' : 'com.mekapal.app';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'mekapal-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'mekapalapp',
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: false,
    bundleIdentifier: getBundleIdentifier(),
    infoPlist: {
      NSLocationWhenInUseUsageDescription:
        'Mekapal necesita tu ubicación para seleccionar direcciones en el mapa.',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ef6e30',
    },
    package: getAndroidPackage(),
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
      },
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    'expo-localization',
    'expo-font',
    'expo-image',
    'expo-web-browser',
    [
      'expo-location',
      {
        locationWhenInUsePermission:
          'Mekapal necesita tu ubicación para seleccionar direcciones en el mapa.',
      },
    ],
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        resizeMode: 'cover',
        backgroundColor: '#ef6e30',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: '1d16d3e8-455a-4388-a90b-02af9c1b7de6',
    },
  },
});
