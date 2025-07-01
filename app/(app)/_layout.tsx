import { Tabs } from "expo-router";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Ionicons } from "@expo/vector-icons";
import {
  useTabConfigurations,
  TRANSPORTER_HIDDEN_ROUTES,
  USER_HIDDEN_ROUTES,
  TAB_SCREEN_OPTIONS,
} from "@/consts/navigation";

export default function AppLayout() {
  const { user } = useStore();
  const { TRANSPORTER_TABS, USER_TABS } = useTabConfigurations();

  // This layout only renders when user is authenticated (handled by index.tsx)
  // So we can safely assume user exists here
  const isTransporter = user?.role === UserRole.TRANSPORTER;
  const activeTabs = isTransporter ? TRANSPORTER_TABS : USER_TABS;
  const hiddenRoutes = isTransporter
    ? TRANSPORTER_HIDDEN_ROUTES
    : USER_HIDDEN_ROUTES;

  return (
    <Tabs screenOptions={TAB_SCREEN_OPTIONS}>
      {/* Render active tabs */}
      {activeTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} size={size} color={color} />
            ),
          }}
        />
      ))}

      {/* Render hidden routes */}
      {hiddenRoutes.map((route) => (
        <Tabs.Screen
          key={route}
          name={route}
          options={{
            href: null, // Hide from tabs
          }}
        />
      ))}
    </Tabs>
  );
}
