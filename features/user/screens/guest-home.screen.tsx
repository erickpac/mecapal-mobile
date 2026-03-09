import { Text, View, ScrollView, Image, TextInput } from 'react-native';
import { useState } from 'react';
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
  const [newsletterEmail, setNewsletterEmail] = useState('');

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
            title="Conoce más sobre nosotros"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text className="mt-4 font-plus-jakarta text-sm leading-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </View>
        </View>

        {/* Services Section */}
        <View className="mt-10">
          <SubheaderText title="Nuestros servicios" onlyTitle />
          <View className="mt-4 bg-white">
            {SERVICES.map((service) => (
              <ListItem
                key={service.id}
                imageSource={service.image}
                title={service.title}
                description={service.listDescription}
                linkText="Conoce más"
                onPress={() => handleServicePress(service.id)}
              />
            ))}
          </View>
        </View>

        {/* Mekapal is for everyone */}
        <View>
          <SubheaderText
            className="mb-4 mt-10"
            title="¡Mekapal es para todos!"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
                  Cliente
                </Text>
              </View>
              <Text className="mt-4 text-center font-plus-jakarta text-xs">
                Esta cuenta es para todos aquellos que necesitan mover sus chivas
                de un lugar a otro.
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
                  Transportista
                </Text>
              </View>
              <Text className="mt-4 text-center font-plus-jakarta text-xs">
                Esta cuenta es para todos aquellos que ofrezcan servicios de
                logística y cuentan con uno o más vehículos de carga.
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

        {/* Newsletter */}
        <View className="mt-8 bg-gray-800 px-6 py-8">
          <Text className="text-center font-plus-jakarta-bold text-xl text-white">
            {t('home.newsletter.title')}
          </Text>
          <Text className="mt-2 text-center font-plus-jakarta text-sm text-gray-300">
            {t('home.newsletter.subtitle')}
          </Text>
          <View className="mt-4">
            <TextInput
              className="rounded-lg border border-gray-600 bg-white px-4 py-3 font-plus-jakarta text-base"
              placeholder="Ingresa tu correo electrónico"
              placeholderTextColor={COLORS.lightGray[700]}
              value={newsletterEmail}
              onChangeText={setNewsletterEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Button
              title={t('home.newsletter.action1')}
              onPress={() => {}}
              userType={UserRole.CLIENT}
              className="mt-3"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
