# Mecapal App

<p align="center">
  <img src="https://reactnative.dev/img/tiny_logo.png" width="120" alt="React Native Logo" />
</p>

## Description

Mecapal App is a mobile application that connects users with available truck drivers in real-time. Built with React Native and Expo, it provides an intuitive interface for users to find and connect with transporters based on their location, service type, and vehicle availability. The app features a modern UI with smooth animations and real-time updates.

## Key Features

- **User Authentication**: Secure login and registration with JWT support
- **Location-Based Search**: Find nearby transporters using geolocation
- **Real-time Updates**: Track service status and transporter availability
- **WhatsApp Integration**: Direct communication with transporters
- **Service Tracking**: Monitor service progress from booking to delivery
- **Push Notifications**: Stay informed about service updates
- **Profile Management**: Manage user preferences and service history

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Navigation**: Expo Router
- **API Client**: Axios with React Query
- **Storage**: AsyncStorage
- **Package Manager**: pnpm

## Prerequisites

- Node.js (v18 or higher)
- pnpm
- Expo CLI
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
```

### Development

```bash
# Lint the code
$ pnpm lint

# Reset project cache
$ pnpm reset-project
```

## Project Structure

```
mecapal-app/
├── app/              # Main application screens and navigation
├── assets/          # Images, fonts, and other static files
├── components/      # Reusable UI components
├── config/          # Configuration files
├── features/        # Feature-specific components and logic
├── hooks/           # Custom React hooks
├── services/        # API and third-party service integrations
├── store/           # State management with Zustand
└── utils/           # Utility functions and helpers
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
API_URL=your_api_url_here
```

## Acknowledgments

- React Native team for the mobile framework
- Expo team for the development platform
- NativeWind team for the styling solution
- All contributors helping this project grow
