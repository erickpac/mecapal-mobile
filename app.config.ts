import { ExpoConfig, ConfigContext } from 'expo/config';

const IS_STAGING = process.env.APP_ENV !== 'production';

const getAppName = () => (IS_STAGING ? 'Mekapal (Staging)' : 'Mekapal');

const getBundleIdentifier = () =>
  IS_STAGING ? 'com.mekapal.app.staging' : 'com.mekapal.app';

const getAndroidPackage = () =>
  IS_STAGING ? 'com.mekapal.app.staging' : 'com.mekapal.app';

const getWebBaseUrl = () =>
  IS_STAGING ? 'https://staging.mekapal.com' : 'https://mekapal.com';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'mekapal-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'mekapalapp',
  userInterfaceStyle: 'light',
  ios: {
    supportsTablet: false,
    bundleIdentifier: getBundleIdentifier(),
    userInterfaceStyle: 'light',
    infoPlist: {
      NSLocationWhenInUseUsageDescription:
        'Mekapal necesita tu ubicación para seleccionar direcciones en el mapa.',
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ef6e30',
    },
    package: getAndroidPackage(),
    userInterfaceStyle: 'light',
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
        backgroundColor: '#ef6e30',
        ios: {
          image: './assets/images/splash-ios.png',
          resizeMode: 'cover',
          enableFullScreenImage_legacy: true,
        },
        android: {
          image: './assets/images/splash-android.png',
          resizeMode: 'contain',
          imageWidth: 300,
        },
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission:
          'Mekapal necesita acceso a tu galería para que puedas elegir tu foto de perfil.',
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
    webBaseUrl: getWebBaseUrl(),
  },
});
