import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NavigationHeader } from '@/components/navigation-header';
import { useTranslation } from 'react-i18next';

type Props = {}

const TermsConditionScreen = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="px-8 py-4">
          <Text className="text-2xl font-bold text-gray-800">{t("profile.help.terms.title")}</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default TermsConditionScreen