import { Text, View, ScrollView, Image } from 'react-native';
import { Header } from '@/components/header';
import { useTranslation } from 'react-i18next';
import { navigateTo } from '@/features/shared/routes';
import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import WelcomeHero from '@/components/welcome-hero';
import ListItem from '@/components/list-item';
import { Button } from '@/components/button';
import Amico from '@/components/svg/amico';
import MaterialIcon from '@/components/material-icon';
import SubheaderText from '@/components/subheader-text';
import TabComponent from '@/components/tab-component';
import { Input } from '@/components/input';
import { COLORS } from '@/consts/colors';

export default function GuestHomeScreen() {
  const { t } = useTranslation();
  const { setSelectedUserType } = useStore();

  const handleClickLogin = (role: UserRole) => {
    setSelectedUserType(role);
    navigateTo('/auth');
  };

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

  const renderClientHowItWorks = () => {
    return (
      <View className="mt-4 flex flex-col gap-3 px-4">
        <View className="flex flex-row justify-between gap-4">
          <View className="flex-1 rounded-xl bg-primary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  1
                </Text>
              </View>
              <MaterialIcon
                name="account-box-outline"
                size={28}
                color={COLORS.maroon}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Crea una cuenta
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
          <View className="flex-1 rounded-xl bg-primary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  2
                </Text>
              </View>
              <MaterialIcon
                name="account-details-outline"
                size={28}
                color={COLORS.maroon}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 rounded-xl bg-primary-50 p-4">
          <View className="flex-1 rounded-xl bg-primary-50 p-4">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  3
                </Text>
              </View>
              <MaterialIcon
                name="truck-outline"
                size={28}
                color={COLORS.maroon}
              />
              <Text className="ml-2 font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta text-sm">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderTransporterHowItWorks = () => {
    return (
      <View className="mt-4 flex flex-col gap-3 px-4">
        <View className="flex flex-row justify-between gap-4">
          <View className="flex-1 rounded-xl bg-secondary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-secondary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  1
                </Text>
              </View>
              <MaterialIcon
                name="account-box-outline"
                size={28}
                color={COLORS.darkSecondary}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Crea una cuenta
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
          <View className="flex-1 rounded-xl bg-secondary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-secondary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  2
                </Text>
              </View>
              <MaterialIcon
                name="account-details-outline"
                size={28}
                color={COLORS.darkSecondary}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 rounded-xl bg-secondary-50 p-4">
          <View className="flex-1 rounded-xl bg-secondary-50 p-4">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-secondary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  3
                </Text>
              </View>
              <MaterialIcon
                name="truck-outline"
                size={28}
                color={COLORS.darkSecondary}
              />
              <Text className="ml-2 font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta text-sm">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-[#fbf9f4] pb-8">
        <WelcomeHero centerAlign />
        <View>
          <SubheaderText
            title="Conoce más sobre nosotros"
            onlyTitle={true}
            className="mt-6"
          />
          <View className="mt-4 w-dvw px-4">
            <Image
              source={require('../../../assets/images/guest-truck.png')}
              className="h-48 w-full rounded-xl"
              resizeMethod="scale"
            />
          </View>
          <View className="px-4">
            <Text className="mt-4 font-plus-jakarta text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text className="mt-4 font-plus-jakarta text-sm font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </View>
        </View>
        <View className="mt-10">
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
        {/*mekapal is for all*/}
        <View>
          <SubheaderText
            className="mb-4 mt-10"
            title="¡Mekapal es para todos!"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <View className="my-4 flex flex-row justify-between gap-4 px-4">
            <View className="flex-1 rounded-xl border border-gray-300 bg-white p-6">
              <View className="flex flex-col items-center">
                <MaterialIcon
                  name="account-circle-outline"
                  size={28}
                  color={COLORS.primary}
                />
                <Text className="mt-2 text-center font-plus-jakarta-bold text-lg font-bold">
                  Cliente
                </Text>
              </View>
              <Text className="mt-4 text-center font-plus-jakarta-medium text-xs font-medium">
                Esta cuenta es para todos aquellos que necesitan mover sus
                chivas de un lugar a otro.
              </Text>
            </View>
            <View className="flex-1 rounded-lg border border-gray-300 bg-white p-6">
              <View className="flex flex-col items-center">
                <MaterialIcon name="truck" size={28} color={COLORS.secondary} />
                <Text className="mt-2 text-center font-plus-jakarta-bold text-lg font-bold">
                  Transportista
                </Text>
              </View>
              <Text className="mt-4 text-center font-plus-jakarta-medium text-xs font-medium">
                Esta cuenta es para todos aquellos que ofrezcan servicios de
                logística y cuentan con uno o más vehículos de carga.
              </Text>
            </View>
          </View>
        </View>
        {/*how it works*/}
        <SubheaderText
          className="mb-4 mt-10"
          title="¿Cómo funciona?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <View className="mb-4">
          <TabComponent
            tabs={[
              {
                title: 'Cliente',
                component: renderClientHowItWorks(),
                activeColor: COLORS.primary,
              },
              {
                title: 'Transportista',
                component: renderTransporterHowItWorks(),
                activeColor: COLORS.secondary,
              },
            ]}
            defaultActiveTab={0}
            contentStyle="w-"
          />
        </View>

        {/*CTA*/}
        <View className="mx-8 mt-6 items-center">
          <View className="py-4">
            <Amico />
          </View>
          <Text className="text-center font-plus-jakarta-semibold text-xl font-semibold">
            {t('home.ctaUser.title')}
          </Text>
          <View className="mt-4 flex w-72 flex-col items-center justify-center gap-5">
            <Button
              title={t('home.ctaUser.action1')}
              onPress={() => navigateTo('/auth/register')}
              userType={UserRole.USER}
            />
            <Button
              title={t('home.ctaUser.action2')}
              onPress={() => handleClickLogin(UserRole.USER)}
              userType={UserRole.USER}
              variant="outlined"
            />
          </View>

          <View className="h-12">{/**Just to blank space */}</View>
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
