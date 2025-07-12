import { Stack, router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function OnboardingAuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: { backgroundColor: "white" },
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Hide header for index since it redirects
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          headerLeft: () => null, // Remove back button for initial modal screen
          headerRight: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Text style={{ color: "#007AFF", fontSize: 17 }}>Close</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          headerRight: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Text style={{ color: "#007AFF", fontSize: 17 }}>Close</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
