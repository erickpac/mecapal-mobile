import { Stack } from "expo-router";

export default function SecurityLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="change-password" />
            <Stack.Screen name="two-factor" />
            <Stack.Screen name="devices" />
        </Stack>
    );
}