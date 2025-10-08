import { useStore } from '@/store/useStore';
import { Text, View, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { navigateTo } from '@/features/shared/routes';
import { Header } from '@/components/header';
import WelcomeHero from '@/components/welcome-hero';
import Card from '@/components/card';
import Truck from '@/components/svg/truck';
import Shuttle from '@/components/svg/shuttle';
import Motorcycle from '@/components/svg/motorcycle';
import { Button } from '@/components/button';
import { UserRole } from '@/features/auth/types/user';
import ListItem from '@/components/list-item';
import { Input } from '@/components/input';

export default function UserHomeScreen() {
  const { user } = useStore();
  const { t } = useTranslation();

  const listItemData = [
    {
      id: 1,
      imageSource: require('../../../assets/images/home/motorcycle.png'),
      title: 'Envíos Express',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore mque. Conoce más ',
      linkText: 'Conoce más',
      onPress: () => {},
    },
    {
      id: 2,
      imageSource: require('../../../assets/images/home/mid-truck.png'),
      title: 'Carga Liviana',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore mque. Conoce más ',
      linkText: 'Conoce más',
      onPress: () => {},
    },
    {
      id: 3,
      imageSource: require('../../../assets/images/home/big-truck.png'),
      title: 'Carga Pesada',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore mque. Conoce más ',
      linkText: 'Conoce más',
      onPress: () => {},
    },
  ];

  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-[#fbf9f4]">
        <WelcomeHero name={user?.name} />
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
          <View className="items-center">
            <Text className="font-plus-jakarta-bold text-2xl font-bold">
              Nuestros Servicios
            </Text>
          </View>
          <View className="mt-4 bg-white">
            {listItemData.map((el) => (
              <ListItem key={el.id} {...el} />
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
        {/*newsletter*/}
        <View className="bg-[#642E14] p-4">
          <View className="mt-6 items-center pb-6">
            <View className="gap-3">
              <Text className="text-center font-plus-jakarta-bold text-3xl font-bold text-white">
                {t('home.newsletter.title')}
              </Text>
              <Text className="text-center font-plus-jakarta-medium text-[16px] font-medium text-white">
                {t('home.newsletter.subtitle')}
              </Text>
            </View>

            <View className="mt-5 w-full">
              <Input
                label={''}
                type="text"
                value={''}
                onChangeText={() => {}}
                autoCapitalize="none"
              />
              <Button
                title={t('home.newsletter.action1')}
                onPress={() => {}}
                userType={UserRole.USER}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
