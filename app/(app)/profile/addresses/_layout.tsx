import { Stack } from "expo-router";

export default function AddressesLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="add" />
            <Stack.Screen name="edit" />
        </Stack>
    );
}