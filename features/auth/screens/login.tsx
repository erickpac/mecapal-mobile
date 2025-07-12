import { useAuth } from "@/features/auth/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useLocalizedError } from "@/hooks/useLocalizedError";
import { NavigationHeader } from "@/components/navigation-header";
import {
  navigateToRegister,
  navigateToOnboardingRegister,
  navigateToForgotPassword,
  replaceRoute,
  ROUTES,
} from "@/utils/navigation";
import { usePathname } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error, isSuccess } = useAuth();
  const { setHasCompletedOnboarding } = useStore();
  const { t } = useTranslation();
  const { handleError } = useLocalizedError();
  const pathname = usePathname();

  // Check if we're in modal mode (from onboarding)
  const isModalMode = pathname.includes("/onboarding/");

  const handleLogin = () => {
    login({ email, password });
  };

  // Navigate to home after successful login and complete onboarding
  useEffect(() => {
    if (isSuccess) {
      setHasCompletedOnboarding(true);
      replaceRoute(ROUTES.HOME);
    }
  }, [isSuccess, setHasCompletedOnboarding]);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <NavigationHeader
        title={t("auth.login.title", { defaultValue: "Login" })}
      />
      <View className="flex-1 justify-center items-center px-4">
        <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow">
          <Text className="text-3xl font-bold mb-6 text-center">
            {t("auth.login.title")}
          </Text>

          {error && (
            <Text className="text-red-500 text-center mb-4">
              {handleError(error)}
            </Text>
          )}

          <TextInput
            className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
            placeholder={t("auth.login.email")}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-gray-50 text-base"
            placeholder={t("auth.login.password")}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={handleLogin}
            disabled={isLoading}
            className={`py-4 rounded-lg mb-4 ${
              isLoading ? "bg-blue-300" : "bg-blue-600"
            }`}
          >
            <Text className="text-white text-center font-semibold text-lg">
              {isLoading ? t("common.loading") : t("auth.login.login")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToForgotPassword()}>
            <Text className="text-blue-600 text-center">
              {t("auth.login.forgotPassword")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              isModalMode
                ? navigateToOnboardingRegister()
                : navigateToRegister()
            }
            className="mt-4"
          >
            <Text className="text-gray-600 text-center">
              {t("auth.login.noAccount", {
                defaultValue: "¿No tienes cuenta?",
              })}{" "}
              <Text className="text-blue-600 font-medium">
                {t("auth.login.signUp", { defaultValue: "Regístrate" })}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
