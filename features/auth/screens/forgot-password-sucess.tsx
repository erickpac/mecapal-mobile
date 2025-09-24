import { router, usePathname } from "expo-router";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

import { useTranslation } from "react-i18next";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { CheckYourEmail } from "@/components/svg";
import { IconButton } from "@/components/icon-button";
import { Button } from "@/components/button";
import { resetToAuth } from "../routes";

export default function ForgotPasswordScreen() {
  const { t } = useTranslation();
  const pathname = usePathname();

  // Check if we're in modal mode (from onboarding)
  const isModalMode = pathname.includes("/onboarding/");

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
          className="flex-1 gap-6 pt-8"
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View className="mb-6 mt-2 items-center">
            <View className="max-w-full">
              <CheckYourEmail />
            </View>
          </View>
          <View className="mt-6">
            <Text className="mb-6 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t("auth.forgotPassword.successTitle")}
            </Text>
            <Text className="mx-6 text-center font-plus-jakarta text-base text-text-active">
              {t("auth.forgotPassword.successDescription")}
            </Text>
          </View>
          <View className="gap-2">
            <Button
              title={t("auth.login.title")}
              onPress={() => {
                resetToAuth();
              }}
              // userType={selectedUserType}
            />
          </View>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
