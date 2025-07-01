import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-semibold text-gray-800">
          {t("navigation.tabs.profile")}
        </Text>
        <Text className="text-gray-600 mt-2 text-center px-4">
          {t("profile.personalInfo.title")}
        </Text>
      </View>
    </SafeAreaView>
  );
}
