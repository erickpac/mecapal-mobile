import { useAuth } from "@/features/auth/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { UserRole } from "@/features/auth/types/user";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, isLoading, error } = useAuth();
  const { enterGuestMode } = useStore();
  const { t } = useTranslation();

  const handleRegister = () => {
    // Validate passwords match
    if (password !== confirmPassword) {
      // Handle password mismatch error
      return;
    }

    register({
      name,
      email,
      password,
      role: UserRole.USER, // Default role for new registrations
    });
  };

  const handleContinueAsGuest = () => {
    enterGuestMode();
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white px-4"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow">
        <Text className="text-3xl font-bold mb-6 text-center">
          {t("auth.register.title", { defaultValue: "Crear Cuenta" })}
        </Text>

        {error && (
          <Text className="text-red-500 text-center mb-4">
            {error instanceof Error
              ? error.message
              : t("auth.errors.registerError", {
                  defaultValue: "Error al registrarse",
                })}
          </Text>
        )}

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
          placeholder={t("auth.register.name", {
            defaultValue: "Nombre completo",
          })}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
          placeholder={t("auth.register.email")}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
          placeholder={t("auth.register.password")}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-6 bg-gray-50 text-base"
          placeholder={t("auth.register.confirmPassword")}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          onPress={handleRegister}
          disabled={isLoading}
          className={`py-4 rounded-lg mb-4 ${
            isLoading ? "bg-blue-300" : "bg-blue-600"
          }`}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {isLoading ? t("common.loading") : t("auth.register.register")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} className="mb-2">
          <Text className="text-blue-600 text-center">
            {t("auth.register.hasAccount")}
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">o</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Continue as Guest Button */}
        <TouchableOpacity
          onPress={handleContinueAsGuest}
          className="py-3 rounded-lg border border-gray-300"
        >
          <Text className="text-gray-700 text-center font-medium">
            {t("auth.register.continueAsGuest", {
              defaultValue: "Continuar como invitado",
            })}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
