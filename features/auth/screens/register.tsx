import { useAuth } from "@/features/auth/hooks/useAuth";
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

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, isLoading, error } = useAuth();

  const handleRegister = () => {
    register({ name, email, password, confirmPassword });
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white px-4"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow">
        <Text className="text-3xl font-bold mb-6 text-center">
          Crear Cuenta
        </Text>

        {error && (
          <Text className="text-red-500 text-center mb-4">
            {error instanceof Error ? error.message : "Error al registrarse"}
          </Text>
        )}

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
          placeholder="Nombre completo"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 text-base"
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-6 bg-gray-50 text-base"
          placeholder="Confirmar contraseña"
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
            {isLoading ? "Registrando..." : "Registrarse"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} className="mb-2">
          <Text className="text-blue-600 text-center">
            ¿Ya tienes cuenta? Inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
