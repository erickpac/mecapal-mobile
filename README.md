# Mekapal App

<p align="center">
  <img src="https://reactnative.dev/img/tiny_logo.png" width="120" alt="React Native Logo" />
</p>

## Description

Mekapal App is a mobile application that connects users with available truck drivers in real-time. Built with React Native and Expo, it provides an intuitive interface for users to find and connect with transporters based on their location, service type, and vehicle availability. The app features a modern UI with smooth animations and real-time updates.

## Key Features

- **User Authentication**: Secure login and registration with JWT support
- **Location-Based Search**: Find nearby transporters using geolocation
- **Real-time Updates**: Track service status and transporter availability
- **WhatsApp Integration**: Direct communication with transporters
- **Service Tracking**: Monitor service progress from booking to delivery
- **Push Notifications**: Stay informed about service updates
- **Profile Management**: Manage user preferences and service history

## Tech Stack

- **Framework**: React Native 0.79 + Expo 53 (New Architecture)
- **Language**: TypeScript (strict mode)
- **State Management**: Zustand with AsyncStorage persistence
- **Styling**: NativeWind (TailwindCSS for React Native) + React Native Paper
- **Navigation**: Expo Router (file-based, typed routes)
- **API Client**: Axios with React Query
- **i18n**: i18next + react-i18next (ES/EN)
- **Icons**: @expo/vector-icons (MaterialCommunityIcons)
- **Package Manager**: pnpm

## Prerequisites

- Node.js (v18 or higher)
- pnpm
- Expo CLI
- EAS CLI (`pnpm add -g eas-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)

## Installation

```bash
# Clone the repository
$ git clone git@github.com:erickpac/mecapal-mobile.git

# Navigate into the project
$ cd mecapal-app

# Install dependencies
$ pnpm install

# Start the development server
$ pnpm start
```

## Running the Application

```bash
# Start the development server
$ pnpm start

# Run on iOS
$ pnpm ios

# Run on Android
$ pnpm android

# Run on Web
$ pnpm web

# Lint the code
$ pnpm lint
```

## Environment Setup

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_API_URL=https://your-api-url.com/api/
APP_ENV=staging
```

## EAS Build & Deploy

The app uses [EAS (Expo Application Services)](https://expo.dev/eas) for builds and deployments with three profiles:

| Profile       | Bundle ID                 | App Name          | Use                       |
| ------------- | ------------------------- | ----------------- | ------------------------- |
| `development` | `com.mekapal.app.staging` | Mekapal (Staging) | Local dev with dev client |
| `staging`     | `com.mekapal.app.staging` | Mekapal (Staging) | Internal testing          |
| `production`  | `com.mekapal.app`         | Mekapal           | App Store / Play Store    |

```bash
# Build for staging (internal testers)
$ eas build --profile staging --platform all

# Build for production (store release)
$ eas build --profile production --platform all

# Submit to stores
$ eas submit --platform ios
$ eas submit --platform android
```

## Project Structure

```
mekapal-app/
├── app/              # Screens & navigation (Expo Router file-based)
├── assets/           # Images, fonts, and other static files
├── components/       # Reusable UI components
├── consts/           # Colors, navigation constants
├── features/         # Feature modules (auth, user, transporter, onboarding, shared)
├── hooks/            # Custom React hooks
├── locales/          # i18n translation files (en.json, es.json)
├── services/api/     # Axios config, endpoints, API types
├── store/            # State management with Zustand
├── types/            # Global TypeScript types
└── utils/            # Utility functions and helpers
```

## Acknowledgments

- React Native team for the mobile framework
- Expo team for the development platform
- NativeWind team for the styling solution
- All contributors helping this project grow
