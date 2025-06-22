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
import { useErrorHandler } from "@/utils/error-handler";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuth();
  const { isAuthenticated } = useStore();
  const { t } = useTranslation();
  const { handleError } = useErrorHandler();

  const handleLogin = () => {
    login({ email, password });
  };

  useEffect(() => {
    if (!isLoading && !error && isAuthenticated) {
      router.replace("/home");
    }
  }, [isLoading, error, isAuthenticated]);

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white px-4"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
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
            {isLoading ? t("auth.login.loading") : t("auth.login.login")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/register")}
          className="mb-2"
        >
          <Text className="text-blue-600 text-center">
            {t("auth.login.noAccount")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text className="text-blue-600 text-center">
            {t("auth.login.forgotPassword")}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
