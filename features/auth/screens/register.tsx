import { useAuth } from "@/features/auth/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { usePathname, router } from "expo-router";
import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { UserRole } from "@/features/auth/types/user";
import { replaceRoute } from "@/features/shared/routes";
import { USER_ROUTES } from "@/features/user/routes";
import { ONBOARDING_ROUTES } from "@/features/onboarding/routes";
import { AUTH_ROUTES } from "@/features/auth/routes";
import { ContentContainer } from "@/components/content-container";
import { RegisterUser, RegisterTransporter } from "@/components/svg";
import { NavigationHeader } from "@/components/navigation-header";
import { IconButton } from "@/components/icon-button";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SelectInput } from "@/components/SelectInput";
import { useRegisterValidation } from "../hooks/useRegisterValidation";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState(UserRole.USER);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, isLoading, error, isSuccess } = useAuth();
  const { selectedUserType, setHasCompletedOnboarding, setSelectedUserType } =
    useStore();
  const { t } = useTranslation();
  const pathname = usePathname();
  const { errors, validateForm } = useRegisterValidation({
    name,
    email,
    phone,
    userType,
    password,
    confirmPassword,
  });

  // Check if we're in modal mode (from onboarding)
  const isOnboardingFlow = pathname.includes("/onboarding/");

  // Handle successful registration
  useEffect(() => {
    if (isSuccess && !showSuccess) {
      setShowSuccess(true);
      // Complete onboarding and navigate to home after successful registration
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setHasCompletedOnboarding(true);
        replaceRoute(USER_ROUTES.HOME);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, showSuccess, setHasCompletedOnboarding]);

  const handleSelectUserType = (value: string) => {
    setSelectedUserType(value as UserRole);
    setUserType(value as UserRole);
  };

  const handleRegister = () => {
    // Validate form
    if (!validateForm()) {
      return;
    }

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
        showBackButton={!isOnboardingFlow}
        rightComponent={
          isOnboardingFlow ? (
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
          <ScrollView>
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
              {t("auth.register.title")}
            </Text>
            <View className="mb-2">
              <Input
                label={t("auth.register.name")}
                type="text"
                value={name}
                onChangeText={setName}
                error={errors.name}
                returnKeyType="next"
              />
              <Input
                label={t("auth.register.phone")}
                type="text"
                value={phone}
                onChangeText={setPhone}
                error={errors.phone}
                returnKeyType="next"
              />
              <Input
                label={t("auth.register.email")}
                type="text"
                value={email}
                onChangeText={setEmail}
                error={errors.email}
                returnKeyType="next"
              />
              <SelectInput
                label="Tipo de Usuario"
                value={userType}
                onValueChange={handleSelectUserType}
                options={[
                  { label: "Cliente", value: UserRole.USER },
                  { label: "Transportista", value: UserRole.TRANSPORTER },
                ]}
                error={""}
                placeholder="Selecciona un tipo de usuario"
              />
              <Input
                label={t("auth.register.password")}
                type="password"
                value={password}
                onChangeText={setPassword}
                error={errors.password}
                returnKeyType="next"
              />
              <Input
                label={t("auth.register.confirmPassword")}
                type="password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                error={errors.confirmPassword}
                returnKeyType="done"
              />
            </View>
            <Button
              title={t("auth.register.title")}
              onPress={handleRegister}
              userType={selectedUserType}
              loading={isLoading}
            />

            <Button
              title="Ya tienes cuenta? Inicia sesión aquí"
              variant="text"
              className="mt-2"
              userType={selectedUserType}
              onPress={() => {
                if (isOnboardingFlow) {
                  replaceRoute(ONBOARDING_ROUTES.ONBOARDING_LOGIN);
                  router.dismiss();
                } else {
                  replaceRoute(AUTH_ROUTES.AUTH);
                }
              }}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
