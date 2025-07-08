import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";

export default function ForgotPasswordScreen() {
  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white px-4"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow">
        <Text className="text-3xl font-bold mb-6 text-center">
          {t("auth.forgotPassword.title")}
        </Text>

        <Text className="text-gray-600 text-center mb-6">
          {t("auth.forgotPassword.description", {
            defaultValue:
              "Esta funcionalidad estará disponible próximamente. Por favor, contacta al soporte técnico si necesitas recuperar tu contraseña.",
          })}
        </Text>

        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Text className="text-blue-600 text-center font-medium">
            {t("auth.forgotPassword.backToLogin")}
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">o</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
