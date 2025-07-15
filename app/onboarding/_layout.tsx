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

      {/* Auth Modal Stack */}
      <Stack.Screen
        name="auth"
        options={{
          presentation: "fullScreenModal",
          gestureEnabled: true,
          headerShown: false,
        }}
      />
    </Stack>
  );
}
