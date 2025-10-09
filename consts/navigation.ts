import { TabConfig } from '@/types/navigation';

// Active tabs for each role
export const TRANSPORTER_TABS: TabConfig[] = [
  {
    name: 'home',
    titleKey: 'navigation.tabs.dashboard',
    icon: 'home',
  },
  {
    name: 'orders',
    titleKey: 'navigation.tabs.orders',
    icon: 'search',
  },
  {
    name: 'vehicles',
    titleKey: 'navigation.tabs.vehicles',
    icon: 'history',
  },
  {
    name: 'profile',
    titleKey: 'navigation.tabs.profile',
    icon: 'person',
  },
];
export const USER_TABS: TabConfig[] = [
  {
    name: 'home',
    titleKey: 'navigation.tabs.home',
    icon: 'home',
  },
  {
    name: 'history',
    titleKey: 'navigation.tabs.history',
    icon: 'schedule',
  },
  {
    name: 'profile',
    titleKey: 'navigation.tabs.profile',
    icon: 'person',
  },
];

export const GUEST_TABS: TabConfig[] = [
  {
    name: 'home',
    titleKey: 'navigation.tabs.home',
    icon: 'home',
  },
  {
    name: 'about',
    titleKey: 'navigation.tabs.about',
    icon: 'help',
  },
  {
    name: 'auth',
    titleKey: 'navigation.tabs.auth',
    icon: 'person',
  },
];

// Hidden routes for each role
export const TRANSPORTER_HIDDEN_ROUTES = [
  'search',
  'history',
  'settings',
  'earnings',
  'auth',
  'about',
  'search',
];
export const USER_HIDDEN_ROUTES = [
  'orders',
  'vehicles',
  'settings',
  'earnings',
  'about',
  'auth',
  'search',
];

export const GUEST_HIDDEN_ROUTES = [
  'orders',
  'vehicles',
  'settings',
  'earnings',
  'history',
  'profile',
  'search',
];

// Common tab screen options
export const TAB_SCREEN_OPTIONS = {
  headerShown: false,
  tabBarActiveTintColor: '#007AFF',
  tabBarInactiveTintColor: '#8E8E93',
  tabBarStyle: {
    backgroundColor: '#ffffff',
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
};
