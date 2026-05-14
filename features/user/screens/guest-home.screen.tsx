import { Text, View, ScrollView, Image } from 'react-native';
import { NavigationHeader } from '@/components/navigation-header';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { UserRole } from '@/features/auth/types/user';
import { useStore } from '@/store/useStore';
import WelcomeHero from '@/components/welcome-hero';
import { Button } from '@/components/button';
import SubheaderText from '@/components/subheader-text';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { IMAGES } from '@/consts/images';
import { ServicesList } from '@/features/shared/components/services-list';
import { LoginHome } from '@/components/svg';

export default function GuestHomeScreen() {
  const { t } = useTranslation();
  const { selectedUserType } = useStore();
  const userType = selectedUserType ?? UserRole.CLIENT;
  const ctaColor =
    userType === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;
  const handleGoToAuth = () => {
    router.navigate('/(app)/auth' as any);
  };

  return (
    <>
      <NavigationHeader variant="logo" />
      <ScrollView
        className="flex-1 bg-background-100"
        contentContainerClassName="pb-0"
        bounces={false}
      >
        {/* Welcome Hero */}
        <WelcomeHero centerAlign />

        {/* About Section */}
        <View>
          <SubheaderText
            title={t('home.guest.aboutTitle')}
            onlyTitle
            className="mt-6"
          />
          <View className="px-4">
            <Text className="mt-4 text-center font-plus-jakarta-medium text-lg leading-tight">
              {t('home.guest.aboutDescription')}
            </Text>
          </View>
          <View className="mt-4 px-4">
            <Image
              source={IMAGES.guestTruck}
              className="h-48 w-full rounded-xl"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Services Section */}
        <View className="mt-10">
          <ServicesList />
        </View>

        {/* Mekapal is for everyone */}
        <View>
          <SubheaderText
            className="mb-4 mt-10 px-4"
            title={t('home.guest.forEveryoneTitle')}
            description={t('home.guest.forEveryoneDescription')}
            descriptionClassName="leading-[18px]"
          />
          <View className="my-4 flex-row gap-4 px-4">
            <View className="flex-1 rounded-xl border border-gray-300 bg-white p-6">
              <View className="items-center">
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={28}
                  color={COLORS.primary}
                />
                <Text className="mt-2 text-center font-plus-jakarta-bold text-lg">
                  {t('home.guest.clientTitle')}
                </Text>
              </View>
              <Text className="mt-4 text-center font-plus-jakarta text-xs">
                {t('home.guest.clientDescription')}
              </Text>
            </View>
            <View className="flex-1 rounded-xl border border-gray-300 bg-white p-6">
              <View className="items-center">
                <MaterialCommunityIcons
                  name="truck"
                  size={28}
                  color={COLORS.secondary}
                />
                <Text className="mt-2 text-center font-plus-jakarta-bold text-lg">
                  {t('home.guest.transporterTitle')}
                </Text>
              </View>
              <Text className="mt-4 text-center font-plus-jakarta text-xs">
                {t('home.guest.transporterDescription')}
              </Text>
            </View>
          </View>
        </View>

        {/* CTA */}
        <View className="mx-8 mt-6 items-center">
          <LoginHome color={ctaColor} />
          <Text className="text-center font-plus-jakarta-semibold text-xl">
            {t('home.ctaUser.title')}
          </Text>
          <View className="mt-4 w-72 gap-4">
            <Button
              title={t('home.ctaUser.action1')}
              onPress={handleGoToAuth}
              userType={userType}
            />
            <Button
              title={t('home.ctaUser.action2')}
              onPress={handleGoToAuth}
              userType={userType}
              variant="outlined"
            />
          </View>
        </View>

        <View className="h-8" />
      </ScrollView>
    </>
  );
}
