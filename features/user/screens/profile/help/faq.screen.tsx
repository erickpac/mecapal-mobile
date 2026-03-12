import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { useTranslation } from 'react-i18next';

const FaqScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ContentContainer>
        <ScrollView contentContainerClassName="px-4">
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.faq.title')}
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.faq.question1')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.help.faq.answer1')}
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.faq.question1')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.help.faq.answer1')}
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.faq.question1')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.help.faq.answer1')}
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.faq.question1')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.help.faq.answer1')}
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.faq.question1')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.help.faq.answer1')}
            </Text>
          </View>
        </ScrollView>
      </ContentContainer>
    </>
  );
};

export default FaqScreen;
