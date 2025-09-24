import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useTranslation } from "react-i18next";
import { NavigationHeader } from '@/components/navigation-header';
import MaterialIcon from '@/components/material-icon';
import { COLORS } from '@/consts/colors';
import { navigateToHelpFaq, navigateToHelpPrivacyPolicy, navigateToHelpTermsCondition, navigateToHelpContact } from '@/features/user/routes';

type Props = {}

const UserHelpScreen = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ScrollView className="flex-1 bg-white">
        <View className="space-y-3">
          <View className="px-8 py-4">

            <Text className="text-2xl font-bold text-gray-800">
              {t("profile.help.title")}
            </Text>
            <Text className="text-base font-plus-jakarta font-normal text-gray-800 mt-4">{t("profile.help.subtitle2")}</Text>
          </View>
          <TouchableOpacity onPress={() => navigateToHelpPrivacyPolicy()} className="rounded-lg border-b border-gray-300 bg-white py-4 px-8 ">
            <View className="flex-row items-center">
              <View className="flex-1">
                <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                  {t("profile.help.option1")}
                </Text>

              </View>
              <MaterialIcon
                name="chevron-right"
                size={20}
                color={COLORS.gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToHelpTermsCondition()} className="rounded-lg border-b border-gray-300 bg-white py-4 px-8 ">
            <View className="flex-row items-center">
              <View className="flex-1">
                <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                  {t("profile.help.option2")}
                </Text>

              </View>
              <MaterialIcon
                name="chevron-right"
                size={20}
                color={COLORS.gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToHelpFaq()} className="rounded-lg border-b border-gray-300 bg-white py-4 px-8 ">
            <View className="flex-row items-center">
              <View className="flex-1">
                <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                  {t("profile.help.option3")}
                </Text>

              </View>
              <MaterialIcon
                name="chevron-right"
                size={20}
                color={COLORS.gray}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToHelpContact()} className="rounded-lg border-b border-gray-300 bg-white py-4 px-8 ">
            <View className="flex-row items-center">
              <View className="flex-1">
                <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                  {t("profile.help.option4")}
                </Text>

              </View>
              <MaterialIcon
                name="chevron-right"
                size={20}
                color={COLORS.gray}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default UserHelpScreen