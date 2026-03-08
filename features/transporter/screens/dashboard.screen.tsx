import { useStore } from '@/store/useStore';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialSymbol } from '@/components/material-symbol';
import { useTranslation } from 'react-i18next';
import { navigateTo } from '@/features/shared/routes';
import WelcomeHero from '@/components/welcome-hero';
import Card from '@/components/card';
import Truck from '@/components/svg/truck';
import Shuttle from '@/components/svg/shuttle';
import Motorcycle from '@/components/svg/motorcycle';
import { Header } from '@/components/header';

export default function TransporterDashboardScreen() {
  const { user } = useStore();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-gray-50">
        <WelcomeHero name={user?.name} role={user?.role} />
        <View className="-mt-16 w-full flex-row items-center justify-between px-3">
          <Card
            icon={<Motorcycle />}
            title={t('home.actions.heavyLoad')}
            onPress={() => navigateTo('/search')}
          />
          <Card
            icon={<Truck />}
            title={t('home.actions.express')}
            onPress={() => navigateTo('/search')}
          />
          <Card
            icon={<Shuttle />}
            title={t('home.actions.lightLoad')}
            onPress={() => navigateTo('/search')}
          />
        </View>
      </ScrollView>
    </>
  );
}
