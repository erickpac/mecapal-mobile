import { useAuth } from "@/hooks/useAuth";
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

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const { forgotPassword, isLoading, error } = useAuth();

  const handleSubmit = () => {
    forgotPassword(email);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white px-4"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow">
        <Text className="text-3xl font-bold mb-6 text-center">
          Recuperar Contraseña
        </Text>

        <Text className="text-gray-600 text-center mb-6">
          Ingresa tu correo electrónico y te enviaremos las instrucciones para
          recuperar tu contraseña
        </Text>

        {error && (
          <Text className="text-red-500 text-center mb-4">
            {error instanceof Error
              ? error.message
              : "Error al procesar la solicitud"}
          </Text>
        )}

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-6 bg-gray-50 text-base"
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={isLoading}
          className={`py-4 rounded-lg mb-4 ${
            isLoading ? "bg-blue-300" : "bg-blue-600"
          }`}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {isLoading ? "Enviando..." : "Enviar instrucciones"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/login")}
          className="mb-2"
        >
          <Text className="text-blue-600 text-center">
            Volver al inicio de sesión
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
