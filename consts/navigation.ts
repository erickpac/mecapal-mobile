import { TabConfig } from '@/types/navigation';
import { COLORS } from '@/consts/colors';

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
    icon: 'magnify',
  },
  {
    name: 'vehicles',
    titleKey: 'navigation.tabs.vehicles',
    icon: 'history',
  },
  {
    name: 'profile',
    titleKey: 'navigation.tabs.profile',
    icon: 'account',
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
    icon: 'clock-outline',
  },
  {
    name: 'profile',
    titleKey: 'navigation.tabs.profile',
    icon: 'account',
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
    icon: 'help-circle-outline',
  },
  {
    name: 'auth',
    titleKey: 'navigation.tabs.auth',
    icon: 'account',
  },
];

// Hidden routes for each role
export const TRANSPORTER_HIDDEN_ROUTES = [
  'search',
  'history',
  'settings',
  'auth',
  'about',
];
export const USER_HIDDEN_ROUTES = [
  'orders',
  'vehicles',
  'settings',
  'about',
  'auth',
  'search',
];

export const GUEST_HIDDEN_ROUTES = [
  'orders',
  'vehicles',
  'settings',
  'history',
  'profile',
  'search',
];

// Common tab screen options
export const TAB_SCREEN_OPTIONS = {
  headerShown: false,
  tabBarActiveTintColor: COLORS.info,
  tabBarInactiveTintColor: COLORS.lightGray[700],
  tabBarStyle: {
    backgroundColor: COLORS.white,
    elevation: 10, // Android shadow
    shadowColor: COLORS.black, // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
};
