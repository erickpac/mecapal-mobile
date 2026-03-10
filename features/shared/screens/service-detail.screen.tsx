import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { SERVICES } from '@/features/shared/data/services';
import { COLORS } from '@/consts/colors';

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) return null;

  const specLabels = [
    { key: 'maxWeight', value: t(`home.services.${id}.maxWeight`) },
    { key: 'maxSize', value: t(`home.services.${id}.maxSize`) },
    { key: 'vehicleType', value: t(`home.services.${id}.vehicleType`) },
  ];

  const considerations = [
    t(`home.services.${id}.consideration1`),
    t(`home.services.${id}.consideration2`),
    t(`home.services.${id}.consideration3`),
  ];

  return (
    <>
      <NavigationHeader showBackButton />
      <ContentContainer className="flex-1">
        <ScrollView contentContainerClassName="px-4 pb-8">
          <Text className="mb-4 mt-2 font-plus-jakarta-bold text-2xl">
            {t(`home.services.${id}.title`)}
          </Text>

          <View
            className="mb-4 items-center overflow-hidden rounded-xl py-6"
            style={{ backgroundColor: COLORS.primary + '15' }}
          >
            <service.icon width={150} height={150} />
          </View>

          <Text className="mb-6 font-plus-jakarta text-base leading-6 text-gray-700">
            {t(`home.services.${id}.detailDescription`)}
          </Text>

          <View className="mb-6">
            {specLabels.map((spec) => (
              <View key={spec.key} className="mb-2">
                <Text className="font-plus-jakarta-bold text-base">
                  {t(`home.services.detail.${spec.key}`)}:{' '}
                  <Text className="font-plus-jakarta font-normal">
                    {spec.value}
                  </Text>
                </Text>
              </View>
            ))}
          </View>

          <View className="mb-6">
            <Text className="mb-2 font-plus-jakarta-bold text-base">
              {t('home.services.detail.considerations')}
            </Text>
            {considerations.map((item, index) => (
              <View key={index} className="mb-1 flex-row pl-2">
                <Text className="mr-2 font-plus-jakarta text-base">•</Text>
                <Text className="flex-1 font-plus-jakarta text-base leading-6 text-gray-700">
                  {item}
                </Text>
              </View>
            ))}
          </View>

          <View className="rounded-xl bg-gray-50 p-4">
            <Text className="mb-2 font-plus-jakarta-bold text-base">
              {t('home.services.detail.exampleTitle')}
            </Text>
            <Text className="font-plus-jakarta text-base leading-6 text-gray-700">
              {t(`home.services.${id}.example`)}
            </Text>
          </View>
        </ScrollView>
      </ContentContainer>
    </>
  );
}
