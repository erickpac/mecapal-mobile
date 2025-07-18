import { useAuth } from "@/features/auth/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { router, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useLocalizedError } from "@/hooks/useLocalizedError";
import {
  navigateToForgotPassword,
  replaceRoute,
  ROUTES,
} from "@/utils/navigation";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { IconButton } from "@/components/icon-button";
import { Button } from "@/components/button";
import { LoginUser, LoginTransporter } from "@/components/svg";
import { Input } from "@/components/input";
import { useLoginValidation } from "@/features/auth/hooks/useLoginValidation";
import { UserRole } from "@/features/auth/types/user";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error, isSuccess } = useAuth();
  const { setHasCompletedOnboarding, selectedUserType } = useStore();
  const { t } = useTranslation();
  const { handleError } = useLocalizedError();
  const pathname = usePathname();
  const isModalMode = pathname.includes("/onboarding/");

  const { emailError, passwordError, isValid } = useLoginValidation(
    email,
    password,
  );

  const handleLogin = () => {
    if (!isValid) return;
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      setHasCompletedOnboarding(true);
      replaceRoute(ROUTES.HOME);
    }
  }, [isSuccess, setHasCompletedOnboarding]);

  return (
    <>
      <NavigationHeader
        showBackButton={!isModalMode}
        rightComponent={
          isModalMode ? (
            <IconButton
              icon="close"
              color="text-white"
              onPress={() => router.dismiss()}
            />
          ) : undefined
        }
      />
      <ContentContainer className="flex-1 px-4">
        <KeyboardAvoidingView
          className="flex-1 pt-8"
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View className="mb-6 mt-2 items-center">
            <View className="aspect-[287/206] w-64 max-w-full">
              {selectedUserType === UserRole.USER ? (
                <LoginUser width="100%" height="100%" />
              ) : (
                <LoginTransporter width="100%" height="100%" />
              )}
            </View>
          </View>
          <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
            Inicio de Sesión
          </Text>
          <View className="mb-2 gap-2">
            <Input
              label="Correo Electrónico*"
              type="email"
              value={email}
              onChangeText={setEmail}
              error={emailError}
              returnKeyType="next"
            />
            <View>
              <Input
                label="Contraseña*"
                type="password"
                value={password}
                onChangeText={setPassword}
                error={
                  passwordError || (error ? handleError(error) : undefined)
                }
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />
              <Text
                className="font-plus-jakarta-regular mb-2 mt-1 text-right text-[13px] text-orange-500"
                onPress={navigateToForgotPassword}
              >
                ¿Olvidaste tu contraseña?
              </Text>
            </View>
          </View>

          <Button
            title="Iniciar Sesión"
            onPress={handleLogin}
            disabled={!isValid || isLoading}
            loading={isLoading}
          />

          <Text className="font-plus-jakarta-regular mt-4 text-center text-orange-500">
            ¿No tienes cuenta?{" "}
            <Text
              className="font-bold"
              onPress={() => replaceRoute(ROUTES.ONBOARDING_REGISTER)}
            >
              Regístrate aquí
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
