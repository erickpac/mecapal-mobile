import { View, Text, ScrollView } from 'react-native';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationHeader title="" showBackButton={true} borderBottom={false} />
      <ContentContainer>
        <ScrollView contentContainerClassName="px-4">
          <View className="py-4">
            <Text className="text-2xl font-bold text-gray-800">
              {t('profile.help.privacy.title')}
            </Text>
          </View>
        </ScrollView>
      </ContentContainer>
    </>
  );
};

export default PrivacyPolicyScreen;
