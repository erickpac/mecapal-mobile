import { TabConfig } from "@/types/navigation";

// Active tabs for each role
export const TRANSPORTER_TABS: TabConfig[] = [
  {
    name: "home",
    titleKey: "navigation.tabs.dashboard",
    icon: "stats-chart",
  },
  {
    name: "orders",
    titleKey: "navigation.tabs.orders",
    icon: "list",
  },
  {
    name: "vehicles",
    titleKey: "navigation.tabs.vehicles",
    icon: "car",
  },
  {
    name: "profile",
    titleKey: "navigation.tabs.profile",
    icon: "person",
  },
];
export const USER_TABS: TabConfig[] = [
  {
    name: "home",
    titleKey: "navigation.tabs.home",
    icon: "home",
  },
  {
    name: "search",
    titleKey: "navigation.tabs.search",
    icon: "search",
  },
  {
    name: "history",
    titleKey: "navigation.tabs.history",
    icon: "time",
  },
  {
    name: "profile",
    titleKey: "navigation.tabs.profile",
    icon: "person",
  },
];

export const GUEST_TABS: TabConfig[] = [
  {
    name: "home",
    titleKey: "navigation.tabs.home",
    icon: "home",
  },
  {
    name: "search",
    titleKey: "navigation.tabs.search",
    icon: "search",
  },
  {
    name: "about",
    titleKey: "navigation.tabs.about",
    icon: "information-circle",
  },
  {
    name: "auth",
    titleKey: "navigation.tabs.auth",
    icon: "person-add",
  },
];

// Hidden routes for each role
export const TRANSPORTER_HIDDEN_ROUTES = [
  "search",
  "history",
  "settings",
  "earnings",
];
export const USER_HIDDEN_ROUTES = [
  "orders",
  "vehicles",
  "settings",
  "earnings",
  "about",
];

export const GUEST_HIDDEN_ROUTES = [
  "orders",
  "vehicles",
  "settings",
  "earnings",
  "history",
  "profile",
];

// Common tab screen options
export const TAB_SCREEN_OPTIONS = {
  headerShown: false,
  tabBarActiveTintColor: "#007AFF",
  tabBarInactiveTintColor: "#8E8E93",
  tabBarStyle: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
};
