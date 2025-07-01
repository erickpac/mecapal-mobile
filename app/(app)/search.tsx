import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

export default function SearchIndex() {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-semibold text-gray-800">
          {t("transport.search.title")}
        </Text>
        <Text className="text-gray-600 mt-2 text-center px-4">
          {t("transport.search.subtitle")}
        </Text>
      </View>
    </SafeAreaView>
  );
}
