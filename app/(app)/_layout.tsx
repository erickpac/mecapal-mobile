import { Tabs, router } from "expo-router";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
  const { user } = useStore();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }
  }, [user]);

  // If no user, don't render anything
  if (!user) {
    return null;
  }

  // If transporter, show transporter tabs
  if (user.role === UserRole.TRANSPORTER) {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 1,
            borderTopColor: "#e5e5e5",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Pedidos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="vehicles"
          options={{
            title: "Vehículos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="car" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="earnings"
          options={{
            title: "Ganancias",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cash" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            title: "Horario",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            href: null, // Hide from tabs
          }}
        />
        <Tabs.Screen
          name="appointments"
          options={{
            href: null, // Hide from tabs
          }}
        />
        <Tabs.Screen
          name="emergency"
          options={{
            href: null, // Hide from tabs
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            href: null, // Hide from tabs
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            href: null, // Hide from tabs
          }}
        />
      </Tabs>
    );
  }

  // If regular user, show user tabs
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Servicios",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Citas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          href: null, // Hide from tabs
        }}
      />
      <Tabs.Screen
        name="vehicles"
        options={{
          href: null, // Hide from tabs
        }}
      />
      <Tabs.Screen
        name="earnings"
        options={{
          href: null, // Hide from tabs
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          href: null, // Hide from tabs
        }}
      />
      <Tabs.Screen
        name="emergency"
        options={{
          href: null, // Hide from tabs
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          href: null, // Hide from tabs
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null, // Hide from tabs
        }}
      />
    </Tabs>
  );
}
