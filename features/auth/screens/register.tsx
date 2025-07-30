import { useAuth } from "@/features/auth/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { usePathname, router } from "expo-router";
import { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { UserRole } from "@/features/auth/types/user";
import { replaceRoute, ROUTES } from "@/utils/navigation";
import { ContentContainer } from "@/components/content-container";
import { RegisterUser, RegisterTransporter } from "@/components/svg";
import { NavigationHeader } from "@/components/navigation-header";
import { IconButton } from "@/components/icon-button";
import { Button } from "@/components/button";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, isLoading, error, isSuccess } = useAuth();
  const { selectedUserType, setHasCompletedOnboarding } = useStore();
  const { t } = useTranslation();
  const pathname = usePathname();

  // Check if we're in modal mode (from onboarding)
  const isModalMode = pathname.includes("/onboarding/");

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
      role: selectedUserType ?? UserRole.USER,
    });
  };

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
                <RegisterUser width="100%" height="100%" />
              ) : (
                <RegisterTransporter width="100%" height="100%" />
              )}
            </View>
          </View>
          <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
            Registro
          </Text>

          <Button
            title="Regístrate"
            onPress={handleRegister}
            userType={selectedUserType}
          />

          <Button
            title="Ya tienes cuenta? Inicia sesión aquí"
            variant="text"
            className="mt-2"
            userType={selectedUserType}
            onPress={() => {
              if (isModalMode) {
                router.dismiss();
              } else {
                replaceRoute(ROUTES.ONBOARDING_LOGIN);
              }
            }}
          />
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
