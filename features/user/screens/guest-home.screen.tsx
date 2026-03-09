import { Text, View, ScrollView, Image } from 'react-native';
import { Header } from '@/components/header';
import { useTranslation } from 'react-i18next';
import { navigateTo } from '@/features/shared/routes';
import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import WelcomeHero from '@/components/welcome-hero';
import ListItem from '@/components/list-item';
import { Button } from '@/components/button';
import SubheaderText from '@/components/subheader-text';
import HowItWorks from '@/components/how-it-works';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { SERVICES } from '@/features/shared/data/services';

export default function GuestHomeScreen() {
  const { t } = useTranslation();
  const { setSelectedUserType } = useStore();

  const handleClickLogin = (role: UserRole) => {
    setSelectedUserType(role);
    navigateTo('/auth');
  };

  const handleServicePress = (serviceId: string) => {
    navigateTo(`/home/service-detail?id=${serviceId}`);
  };

  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-background" contentContainerClassName="pb-0">
        {/* Welcome Hero */}
        <WelcomeHero centerAlign />

        {/* About Section */}
        <View>
          <SubheaderText
            title={t('home.guest.aboutTitle')}
            onlyTitle
            className="mt-6"
          />
          <View className="mt-4 px-4">
            <Image
              source={require('../../../assets/images/guest-truck.png')}
              className="h-48 w-full rounded-xl"
              resizeMode="cover"
            />
          </View>
          <View className="px-4">
            <Text className="mt-4 font-plus-jakarta text-sm leading-5">
              {t('home.guest.aboutDescription1')}
            </Text>
            <Text className="mt-4 font-plus-jakarta text-sm leading-5">
              {t('home.guest.aboutDescription2')}
            </Text>
          </View>
        </View>

        {/* Services Section */}
        <View className="mt-10">
          <SubheaderText title={t('home.guest.servicesTitle')} onlyTitle />
          <View className="mt-4 bg-white">
            {SERVICES.map((service) => (
              <ListItem
                key={service.id}
                imageSource={service.image}
                title={t(`home.services.${service.id}.title`)}
                description={t(`home.services.${service.id}.listDescription`)}
                linkText={t('home.guest.learnMore')}
                onPress={() => handleServicePress(service.id)}
              />
            ))}
          </View>
        </View>

        {/* Mekapal is for everyone */}
        <View>
          <SubheaderText
            className="mb-4 mt-10"
            title={t('home.guest.forEveryoneTitle')}
            description={t('home.guest.forEveryoneDescription')}
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

        {/* How it works */}
        <HowItWorks />

        {/* CTA */}
        <View className="mx-8 mt-6 items-center">
          <View className="py-4">
            <Image
              source={require('../../../assets/images/guest-truck.png')}
              className="h-40 w-64 rounded-xl"
              resizeMode="cover"
            />
          </View>
          <Text className="text-center font-plus-jakarta-semibold text-xl">
            {t('home.ctaUser.title')}
          </Text>
          <View className="mt-4 w-72 gap-4">
            <Button
              title={t('home.ctaUser.action1')}
              onPress={() => navigateTo('/auth/register')}
              userType={UserRole.CLIENT}
            />
            <Button
              title={t('home.ctaUser.action2')}
              onPress={() => handleClickLogin(UserRole.CLIENT)}
              userType={UserRole.CLIENT}
              variant="outlined"
            />
          </View>
        </View>

        <View className="h-8" />
      </ScrollView>
    </>
  );
}
