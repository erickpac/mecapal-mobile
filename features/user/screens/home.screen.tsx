import { useStore } from '@/store/useStore';
import { View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { navigateTo } from '@/features/shared/routes';
import { NavigationHeader } from '@/components/navigation-header';
import WelcomeHero from '@/components/welcome-hero';
import Card from '@/components/card';
import { Truck, Shuttle, Motorcycle } from '@/components/svg';
import { ServicesList } from '@/features/shared/components/services-list';
import { NewsletterSection } from '@/features/shared/components/newsletter-section';

export default function UserHomeScreen() {
  const { user } = useStore();
  const { t } = useTranslation();

  return (
    <>
      <NavigationHeader variant="logo" />
      <ScrollView
        className="flex-1 bg-background-100"
        contentContainerClassName="pb-0"
        bounces={false}
      >
        <WelcomeHero name={user ? `${user.firstName} ${user.lastName}` : ''} />
        <View className="-mt-16 w-full flex-row items-center gap-3 px-3">
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
          <ServicesList />
        </View>
        <NewsletterSection />
      </ScrollView>
    </>
  );
}
