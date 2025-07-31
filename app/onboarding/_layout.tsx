import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="user-type-selection" />
      <Stack.Screen name="auth-options" />

      {/* Auth Modal Stack */}
      <Stack.Screen
        name="auth"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
}
