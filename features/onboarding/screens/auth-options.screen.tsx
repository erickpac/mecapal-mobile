import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Text, View } from "react-native";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { navigateTo, ROUTES, replaceRoute } from "@/utils/navigation";
import { CarAccesories, FreeShipping } from "@/components/svg";
import { Button } from "@/components/button";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function AuthOptionsScreen() {
  const { selectedUserType } = useStore();
  const { t } = useTranslation();
  const isUser = selectedUserType === UserRole.USER;
  const content = useMemo(() => {
    return {
      illustration: isUser ? (
        <CarAccesories width="100%" height="100%" />
      ) : (
        <FreeShipping width="100%" height="100%" />
      ),
      title: isUser
        ? t("onboarding.authOptions.titleUser")
        : t("onboarding.authOptions.titleTransporter"),
      description: isUser
        ? t("onboarding.authOptions.descUser")
        : t("onboarding.authOptions.descTransporter"),
      aspectRatio: isUser ? "aspect-[342/227]" : "aspect-[287/206]",
    };
  }, [isUser, t]);

  return (
    <>
      <NavigationHeader showBackButton={true} />
      <ContentContainer className="justify-between px-4">
        <View className="flex-1 pt-8">
          <View className="mb-2 items-center">
            <Text className="mb-4 font-plus-jakarta-extrabold text-5xl leading-[64px] text-primary-500">
              Mekapal
            </Text>
          </View>
          <View className="mb-6 items-center">
            <View className={`w-full ${content.aspectRatio}`}>
              {content.illustration}
            </View>
          </View>

          <View className="items-center text-center">
            <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {content.title}
            </Text>
            <Text className="font-plus-jakarta-regular text-center text-base text-text-active">
              {content.description}
            </Text>
          </View>
        </View>

        <View className="gap-4">
          <Button
            title={t("onboarding.authOptions.createAccount")}
            onPress={() => navigateTo(ROUTES.ONBOARDING_REGISTER)}
            userType={selectedUserType}
          />
          <Button
            title={t("onboarding.authOptions.haveAccount")}
            variant="outlined"
            onPress={() => navigateTo(ROUTES.ONBOARDING_LOGIN)}
            userType={selectedUserType}
          />
          <Button
            title={t("onboarding.authOptions.skip")}
            variant="text"
            onPress={() => replaceRoute(ROUTES.HOME)}
            userType={selectedUserType}
          />
        </View>
      </ContentContainer>
    </>
  );
}
