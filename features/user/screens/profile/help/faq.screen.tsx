import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NavigationHeader } from '@/components/navigation-header';
import { useTranslation } from 'react-i18next';
type Props = {}

const FaqScreen = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.faq.title")}</Text>
        </View>
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.faq.question1")}</Text>
          <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">{t("profile.help.faq.answer1")}</Text>
        </View>
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.faq.question1")}</Text>
          <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">{t("profile.help.faq.answer1")}</Text>
        </View>
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.faq.question1")}</Text>
          <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">{t("profile.help.faq.answer1")}</Text>
        </View>
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.faq.question1")}</Text>
          <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">{t("profile.help.faq.answer1")}</Text>
        </View>
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.faq.question1")}</Text>
          <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-2">{t("profile.help.faq.answer1")}</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default FaqScreen