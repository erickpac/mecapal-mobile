import { useStore } from '@/store/useStore';
import { Text, View, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { navigateTo } from '@/features/shared/routes';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { UserRole } from '@/features/auth/types/user';
import WelcomeHero from '@/components/welcome-hero';
import Card from '@/components/card';
import { Truck, Shuttle, Motorcycle } from '@/components/svg';
import ListItem from '@/components/list-item';
import SubheaderText from '@/components/subheader-text';
import { SERVICES } from '@/features/shared/data/services';

export default function UserHomeScreen() {
  const { user } = useStore();
  const { t } = useTranslation();

  const handleServicePress = (serviceId: string) => {
    navigateTo(`/home/service-detail?id=${serviceId}`);
  };

  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-[#fbf9f4]">
        <WelcomeHero name={user ? `${user.firstName} ${user.lastName}` : ''} />
        <View className="-mt-16 w-full flex-row items-center justify-between px-3">
          <Card
            icon={<Motorcycle />}
            title={t('home.actions.express')}
            onPress={() => navigateTo('/search')}
          />
          <Card
            icon={<Shuttle />}
            title={t('home.actions.lightLoad')}
            onPress={() => navigateTo('/search')}
          />
          <Card
            icon={<Truck />}
            title={t('home.actions.heavyLoad')}
            onPress={() => navigateTo('/search')}
          />
        </View>

        <View className="pt-4">
          <SubheaderText title={t('home.guest.servicesTitle')} onlyTitle />
          <View className="mt-4 bg-white">
            {SERVICES.map((service) => (
              <ListItem
                key={service.id}
                icon={<service.icon width={75} height={75} />}
                title={t(`home.services.${service.id}.title`)}
                description={t(`home.services.${service.id}.listDescription`)}
                linkText={t('home.guest.learnMore')}
                onPress={() => handleServicePress(service.id)}
              />
            ))}
          </View>
        </View>
        <View className="bg-[#EAF6F3] p-6">
          <View className="mt-4 w-dvw">
            <Image
              source={require('../../../assets/images/truck-2-home.png')}
              className="h-48 w-full rounded-xl"
              resizeMethod="scale"
            />
          </View>
          <View className="mx-8 mt-6 items-center px-6 pb-6">
            <Text className="font-plus-jakarta-bold text-xl font-bold text-black">
              {t('home.ctaTransporter.title')}
            </Text>
            <Text className="mt-2 font-plus-jakarta-medium text-[16px] font-medium text-black">
              {t('home.ctaTransporter.subtitle')}
            </Text>
            <View className="mt-5">
              <Button
                title={t('home.ctaTransporter.action1')}
                onPress={() => {}}
                userType={UserRole.TRANSPORTER}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
