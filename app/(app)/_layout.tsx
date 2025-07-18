import { Tabs } from "expo-router";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { MaterialSymbol } from "@/components/material-symbol";
import {
  TRANSPORTER_HIDDEN_ROUTES,
  USER_HIDDEN_ROUTES,
  TAB_SCREEN_OPTIONS,
  GUEST_HIDDEN_ROUTES,
} from "@/consts/navigation";
import { useTabConfigurations } from "@/hooks/useTabConfigurations";

export default function AppLayout() {
  const { user, isAuthenticated } = useStore();
  const { TRANSPORTER_TABS, USER_TABS, GUEST_TABS } = useTabConfigurations();

  // Determine which tabs to show based on authentication and user role
  let activeTabs;
  let hiddenRoutes;

  if (!isAuthenticated) {
    // Guest mode - show basic tabs
    activeTabs = GUEST_TABS;
    hiddenRoutes = GUEST_HIDDEN_ROUTES;
  } else if (user?.role === UserRole.TRANSPORTER) {
    // Authenticated transporter
    activeTabs = TRANSPORTER_TABS;
    hiddenRoutes = TRANSPORTER_HIDDEN_ROUTES;
  } else {
    // Authenticated user
    activeTabs = USER_TABS;
    hiddenRoutes = USER_HIDDEN_ROUTES;
  }

  return (
    <Tabs screenOptions={TAB_SCREEN_OPTIONS}>
      {/* Render active tabs */}
      {activeTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused, size }) => (
              <MaterialSymbol
                name={tab.icon}
                size={size}
                color={focused ? "text-blue-500" : "text-gray-400"}
                variant="outlined"
              />
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
