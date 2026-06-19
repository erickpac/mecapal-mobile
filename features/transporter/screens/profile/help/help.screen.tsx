import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { navigateToLegal, type LegalDoc } from '@/consts/legal';

const ITEMS: { doc: LegalDoc; labelKey: string }[] = [
  { doc: 'privacy', labelKey: 'profile.help.option1' },
  { doc: 'terms', labelKey: 'profile.help.option2' },
  { doc: 'data-deletion', labelKey: 'profile.help.option5' },
];

const TransporterHelpScreen = () => {
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
            {ITEMS.map(({ doc, labelKey }) => (
              <TouchableOpacity
                key={doc}
                onPress={() => navigateToLegal(doc)}
                className="h-14 justify-center rounded-lg border-b border-gray-300 bg-background-100"
              >
                <View className="flex-row items-center">
                  <View className="flex-1">
                    <Text className="font-plus-jakarta-bold text-base font-bold text-gray-800">
                      {t(labelKey)}
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color={COLORS.lightGray[700]}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ContentContainer>
    </>
  );
};

export default TransporterHelpScreen;
