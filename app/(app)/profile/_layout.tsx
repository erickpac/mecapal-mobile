import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="info" />
            <Stack.Screen name="payment" />
            <Stack.Screen name="addresses/index" />
            <Stack.Screen name="security/index" />
            <Stack.Screen name="help/index" />
        </Stack>
    );
}