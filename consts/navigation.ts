import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

// Type for Ionicons icon names
export type IconName = keyof typeof Ionicons.glyphMap;

// Tab configuration interface
export interface TabConfig {
  name: string;
  titleKey: string;
  icon: IconName;
}

// Hook to get tab configurations with translations
export const useTabConfigurations = () => {
  const { t } = useTranslation();

  const TRANSPORTER_TABS: TabConfig[] = [
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
      name: "earnings",
      titleKey: "navigation.tabs.earnings",
      icon: "cash",
    },
    {
      name: "profile",
      titleKey: "navigation.tabs.profile",
      icon: "person",
    },
  ];

  const USER_TABS: TabConfig[] = [
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

  return {
    TRANSPORTER_TABS: TRANSPORTER_TABS.map((tab) => ({
      ...tab,
      title: t(tab.titleKey),
    })),
    USER_TABS: USER_TABS.map((tab) => ({
      ...tab,
      title: t(tab.titleKey),
    })),
  };
};

// Hidden routes for each role
export const TRANSPORTER_HIDDEN_ROUTES = ["search", "history", "settings"];
export const USER_HIDDEN_ROUTES = [
  "orders",
  "vehicles",
  "earnings",
  "settings",
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
