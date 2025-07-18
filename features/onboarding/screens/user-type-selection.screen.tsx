import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Text, View } from "react-native";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { navigateToAuthOptions } from "@/utils/navigation";
import { UserRisingHand, Car } from "@/components/svg";
import { COLORS } from "@/consts/colors";
import { useState } from "react";
import { UserTypeOption } from "@/features/onboarding/components/user-type-option";
import { useTranslation } from "react-i18next";

export default function UserTypeSelectionScreen() {
  const { setSelectedUserType } = useStore();
  const [pressedOption, setPressedOption] = useState<UserRole | null>(null);
  const { t } = useTranslation();

  const handleUserTypeSelect = (userType: UserRole) => {
    setSelectedUserType(userType);
    navigateToAuthOptions();
  };

  const userTypeOptions = [
    {
      userType: UserRole.USER,
      title: t("onboarding.userType.optionUser.title"),
      description: t("onboarding.userType.optionUser.description"),
      icon: <UserRisingHand width="100%" height="100%" />,
    },
    {
      userType: UserRole.TRANSPORTER,
      title: t("onboarding.userType.optionTransporter.title"),
      description: t("onboarding.userType.optionTransporter.description"),
      icon: <Car width="100%" height="100%" />,
    },
  ];

  return (
    <>
      <NavigationHeader
        showBackButton={true}
        backgroundColor={COLORS.primary}
      />

      <ContentContainer className="justify-between px-4">
        <View className="flex-1 pt-8">
          <View className="mb-6">
            <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t("onboarding.userType.title")}
            </Text>
            <Text className="font-plus-jakarta-regular text-center text-base text-text-active">
              {t("onboarding.userType.subtitle")}
            </Text>
          </View>

          <View className="flex flex-col gap-4">
            {userTypeOptions.map((option) => (
              <UserTypeOption
                key={option.userType}
                userType={option.userType}
                title={option.title}
                description={option.description}
                icon={option.icon}
                isPressed={pressedOption === option.userType}
                onPressIn={() => setPressedOption(option.userType)}
                onPressOut={() => setPressedOption(null)}
                onPress={() => handleUserTypeSelect(option.userType)}
              />
            ))}
          </View>
        </View>

        <View className="flex-row items-center justify-center gap-2 pb-4">
          <View className="h-2 w-8 rounded-full bg-gray-300" />
          <View className="h-2 w-8 rounded-full bg-primary-500" />
          <View className="h-2 w-8 rounded-full bg-gray-300" />
        </View>
      </ContentContainer>
    </>
  );
}
