import { useAuth } from "@/features/auth/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useState, useEffect } from "react";
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
import { NavigationHeader } from "@/components/navigation-header";
import { navigateToAuth, replaceRoute, ROUTES } from "@/utils/navigation";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, isLoading, error, isSuccess } = useAuth();
  const { selectedUserType, setHasCompletedOnboarding } = useStore();
  const { t } = useTranslation();

  // Use selectedUserType from store, fallback to USER if not set
  const selectedRole = selectedUserType || UserRole.USER;

  // Handle successful registration
  useEffect(() => {
    if (isSuccess && !showSuccess) {
      setShowSuccess(true);
      // Complete onboarding and navigate to home after successful registration
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setHasCompletedOnboarding(true);
        replaceRoute(ROUTES.HOME);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, showSuccess, setHasCompletedOnboarding]);

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
      role: selectedRole,
    });
  };

  // Show success message if registration was successful
  if (showSuccess) {
    return (
      <View className="flex-1 bg-white">
        <NavigationHeader
          title={t("auth.register.title", { defaultValue: "Crear Cuenta" })}
          showBackButton={false}
        />
        <View className="flex-1 justify-center items-center px-4">
          <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow items-center">
            <Text className="text-3xl font-bold mb-4 text-center text-green-600">
              {t("auth.register.success", {
                defaultValue: "¡Registro exitoso!",
              })}
            </Text>
            <Text className="text-gray-600 text-center mb-4">
              {t("auth.register.redirecting", {
                defaultValue: "Redirigiendo al login...",
              })}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <NavigationHeader
        title={t("auth.register.title", { defaultValue: "Crear Cuenta" })}
      />
      <KeyboardAvoidingView
        className="flex-1 justify-center items-center px-4"
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

          {/* Role Display */}
          <View className="mb-6">
            <Text className="text-gray-700 font-medium mb-3">
              {t("auth.register.accountType", {
                defaultValue: "Tipo de cuenta",
              })}
            </Text>
            <View className="py-3 px-4 rounded-lg border-2 border-blue-600 bg-blue-50">
              <Text className="text-center font-medium text-blue-600">
                {selectedRole === UserRole.USER
                  ? t("auth.register.userRole", { defaultValue: "Usuario" })
                  : t("auth.register.transporterRole", {
                      defaultValue: "Transportista",
                    })}
              </Text>
            </View>
          </View>

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

          <TouchableOpacity onPress={() => navigateToAuth()} className="mt-4">
            <Text className="text-gray-600 text-center">
              {t("auth.register.hasAccount", {
                defaultValue: "¿Ya tienes cuenta?",
              })}{" "}
              <Text className="text-blue-600 font-medium">
                {t("auth.register.signIn", { defaultValue: "Iniciar sesión" })}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
