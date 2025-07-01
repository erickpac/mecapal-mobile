import { Ionicons } from "@expo/vector-icons";

// Type for Ionicons icon names
export type IconName = keyof typeof Ionicons.glyphMap;

// Tab configuration interface
export interface TabConfig {
  name: string;
  title: string;
  icon: IconName;
}

// Tab configurations for each role
export const TRANSPORTER_TABS: TabConfig[] = [
  {
    name: "home",
    title: "Dashboard",
    icon: "stats-chart",
  },
  {
    name: "orders",
    title: "Órdenes",
    icon: "list",
  },
  {
    name: "vehicles",
    title: "Vehículos",
    icon: "car",
  },
  {
    name: "earnings",
    title: "Ganancias",
    icon: "cash",
  },
  {
    name: "profile",
    title: "Perfil",
    icon: "person",
  },
];

export const USER_TABS: TabConfig[] = [
  {
    name: "home",
    title: "Inicio",
    icon: "home",
  },
  {
    name: "search",
    title: "Buscar",
    icon: "search",
  },
  {
    name: "history",
    title: "Historial",
    icon: "time",
  },
  {
    name: "profile",
    title: "Perfil",
    icon: "person",
  },
];

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
