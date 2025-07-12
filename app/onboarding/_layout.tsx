import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
        }}
      />
      <Stack.Screen
        name="user-type-selection"
        options={{
          title: "Select User Type",
        }}
      />
      <Stack.Screen
        name="auth-options"
        options={{
          title: "Get Started",
        }}
      />

      {/* Auth Modal Screens */}
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          presentation: "modal",
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          presentation: "modal",
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}
