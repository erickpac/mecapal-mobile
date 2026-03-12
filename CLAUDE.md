# Mekapal App - Project Guide

## Overview

Mekapal is a React Native/Expo mobile app for real-time truck driver booking with location-based search. Supports two user roles (Client/Transporter) and a guest mode.

## Tech Stack

- **Framework:** React Native 0.79 + Expo 53 (New Architecture enabled)
- **Language:** TypeScript (strict mode)
- **Navigation:** Expo Router (file-based, typed routes)
- **State:** Zustand with AsyncStorage persistence
- **Data fetching:** React Query + Axios
- **Styling:** NativeWind (Tailwind CSS for RN) + React Native Paper
- **i18n:** i18next + react-i18next (ES/EN, fallback: ES)
- **Package manager:** pnpm

## Project Structure

```
app/              # Screens & navigation (Expo Router file-based)
assets/           # Images, fonts, static files
components/       # Reusable UI components
consts/           # Colors, navigation constants
features/         # Feature modules (auth, user, transporter, onboarding, shared)
hooks/            # Global custom hooks
locales/          # i18n translation files (en.json, es.json)
services/api/     # Axios config, endpoints, API types
store/            # Zustand store (useStore.ts)
types/            # Global TypeScript types
utils/            # Utility functions
```

### Feature Module Pattern

```
features/<name>/
├── types/        # TypeScript interfaces
├── screens/      # Screen components
├── services/     # API/business logic
├── hooks/        # Feature-specific hooks
├── components/   # Feature-specific UI components
└── routes/       # Route constants & navigation helpers
```

## Path Alias

`@/*` maps to project root (configured in tsconfig.json and babel.config.js).

## Key Commands

```bash
pnpm start        # Dev server
pnpm ios          # Run on iOS
pnpm android      # Run on Android
pnpm web          # Run on web
pnpm lint         # ESLint
```

## Git Conventions

### Commits

- **Do NOT include Co-Authored-By signature** in commit messages
- Write concise commit messages in English
- Format: `<type>: <description>` (e.g., `feat: add login validation`, `fix: token refresh loop`)
- Types: feat, fix, refactor, chore, docs, style, test

### Branching

- `main` - production branch
- `develop` - development integration branch
- `feature/<name>` - new features (create from develop when instructed)
- When user says "new feature", create a `feature/<name>` branch from develop

### Merging

- **Always squash merge** feature branches into develop (`git merge --squash`)
- This keeps the develop history clean with one commit per feature

## Architecture Notes

### Authentication Flow

1. App launch → check `hasCompletedOnboarding`
2. Onboarding → user type selection → login/register
3. JWT tokens stored in Zustand (persisted) + TokenManager (in-memory)
4. Axios interceptor handles Bearer token injection and 401 refresh

### Roles

- `UserRole.CLIENT` - Customer requesting transport
- `UserRole.TRANSPORTER` - Driver providing transport
- Guest mode - limited access without auth

### Navigation

- Tab navigator with role-based tab visibility
- Nested Stack navigators within tabs
- Hidden tabs for search, settings, auth (guest)

## Environment & Deployment

- **Config:** `app.config.ts` (dynamic, replaces `app.json`) — switches app name, bundle ID per environment
- **EAS Build:** `eas.json` with `development`, `staging`, and `production` profiles
- **Env vars:** `EXPO_PUBLIC_` prefix for public vars, `APP_ENV` controls environment
- **Key vars:** `EXPO_PUBLIC_API_URL`, `APP_ENV` (`staging` | `production`)
- **Bundle IDs:** `com.mekapal.app` (production), `com.mekapal.app.staging` (staging)

### EAS Commands

```bash
eas build --profile development --platform ios    # Dev build (simulator)
eas build --profile staging --platform all        # Staging (internal testers)
eas build --profile production --platform all     # Production (store release)
eas submit --platform ios                         # Submit to App Store
eas submit --platform android                     # Submit to Play Store
```

## Styling

- Use NativeWind/Tailwind classes (className prop)
- Custom color palette defined in tailwind.config.js (primary=orange, secondary=teal, tertiary=brown)
- Font: Plus Jakarta Sans (multiple weights)
- Icons: `@expo/vector-icons` (MaterialCommunityIcons) + custom SVG components

## Code Conventions

- Functional components with hooks
- Spanish is the primary language for UI content
- Prefer existing component patterns when creating new ones
- Keep feature logic inside the corresponding feature module
- **Avoid using `any` type** — always use proper TypeScript types throughout the codebase
