import { View, Text, ScrollView } from 'react-native';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { useTranslation } from 'react-i18next';

const ContactScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ContentContainer>
        <ScrollView contentContainerClassName="px-4">
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.contact.title')}
            </Text>
            <Text className="mt-4 font-plus-jakarta text-base font-normal text-gray-800">
              {t('profile.help.contact.subtitle')}
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.contact.email')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              hola@mekapal.com
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.contact.phone')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              1234-5678
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.contact.website')}
            </Text>
            <Text className="mt-2 font-plus-jakarta text-base font-normal text-gray-800">
              mekapal.app
            </Text>
          </View>
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.contact.socialMedia')}
            </Text>
          </View>
        </ScrollView>
      </ContentContainer>
    </>
  );
};

export default ContactScreen;
