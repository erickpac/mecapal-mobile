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
import { ActionLink } from "@/components/action-link";

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
          <View className="mb-2">
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
              <ActionLink
                className="mb-4 mt-1 text-right text-[13px]"
                onPress={navigateToForgotPassword}
                title="¿Olvidaste tu contraseña?"
                userType={selectedUserType}
              />
            </View>
          </View>

          <Button
            title="Iniciar Sesión"
            onPress={handleLogin}
            disabled={!isValid || isLoading}
            loading={isLoading}
          />

          <Button
            title="¿No tienes cuenta? Regístrate aquí"
            variant="text"
            className="mt-2"
            onPress={() => replaceRoute(ROUTES.ONBOARDING_REGISTER)}
          />
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
