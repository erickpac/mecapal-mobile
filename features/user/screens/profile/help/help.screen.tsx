import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import {
  navigateToHelpFaq,
  navigateToHelpPrivacyPolicy,
  navigateToHelpTermsCondition,
  navigateToHelpContact,
} from '@/features/user/routes';

const UserHelpScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ContentContainer>
        <ScrollView contentContainerClassName="px-4">
          <View className="space-y-3">
            <View className="py-4">
              <Text className="text-2xl font-bold text-gray-800">
                {t('profile.help.title')}
              </Text>
              <Text className="mt-4 font-plus-jakarta text-base font-normal text-gray-800">
                {t('profile.help.subtitle2')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigateToHelpPrivacyPolicy()}
              className="rounded-lg border-b border-gray-300 bg-white py-4"
            >
              <View className="flex-row items-center">
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                    {t('profile.help.option1')}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={COLORS.lightGray[700]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToHelpTermsCondition()}
              className="rounded-lg border-b border-gray-300 bg-white py-4"
            >
              <View className="flex-row items-center">
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                    {t('profile.help.option2')}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={COLORS.lightGray[700]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToHelpFaq()}
              className="rounded-lg border-b border-gray-300 bg-white py-4"
            >
              <View className="flex-row items-center">
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                    {t('profile.help.option3')}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={COLORS.lightGray[700]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToHelpContact()}
              className="rounded-lg border-b border-gray-300 bg-white py-4"
            >
              <View className="flex-row items-center">
                <View className="flex-1">
                  <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                    {t('profile.help.option4')}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={COLORS.lightGray[700]}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ContentContainer>
    </>
  );
};

export default UserHelpScreen;
