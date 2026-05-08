import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '@/components/button';
import { navigateToUserTypeSelection } from '../routes';
import { CarRental, CheckCircle } from '@/components/svg';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { COLORS } from '@/consts/colors';
import { useTranslation } from 'react-i18next';

export default function OnboardingWelcomeScreen() {
  const { t } = useTranslation();
  const handleContinue = () => {
    navigateToUserTypeSelection();
  };

  return (
    <>
      <NavigationHeader
        showBackButton={false}
        backgroundColor={COLORS.primary}
      />

      <ContentContainer>
        <ScrollView
          className="flex-1"
          contentContainerClassName="grow px-4 pt-8"
          bounces={false}
        >
          <View className="mb-12 items-center">
            <Text className="mb-4 font-plus-jakarta-extrabold text-5xl leading-[64px] text-primary-500">
              Mekapal
            </Text>
            <View className="aspect-[252/135] w-full">
              <CarRental width="100%" height="100%" />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t('onboarding.welcome.title')}
            </Text>
            <Text className="font-plus-jakarta-regular text-center text-base text-text-active">
              {t('onboarding.welcome.subtitle')}
            </Text>
            <View className="gap-2">
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="font-plus-jakarta-regular ml-2 text-base text-text-active">
                  {t('onboarding.welcome.fast')}
                </Text>
              </View>
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="font-plus-jakarta-regular ml-2 text-base text-text-active">
                  {t('onboarding.welcome.securePayment')}
                </Text>
              </View>
              <View className="flex-row items-center">
                <CheckCircle width={24} height={24} />
                <Text className="font-plus-jakarta-regular ml-2 text-base text-text-active">
                  {t('onboarding.welcome.realtimeTracking')}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="px-4 pt-4">
          <Button
            title={t('onboarding.welcome.start')}
            onPress={handleContinue}
            fullWidth
            buttonColor={COLORS.primary}
          />
        </View>
      </ContentContainer>
    </>
  );
}
