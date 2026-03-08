import { UserRole } from '@/features/auth/types/user';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, Image } from 'react-native';

type Props = {
  name?: string | null;
  role?: UserRole | null;
  centerAlign?: boolean;
};

const WelcomeHero = ({
  name = '',
  role = UserRole.USER,
  centerAlign = false,
}: Props) => {
  const { t } = useTranslation();
  const pathUser = require('../assets/images/Hero-background.png');
  const pathTransporter = require('../assets/images/hero-background-transporter.png');

  return (
    <View className="h-40 rounded-b-2xl">
      <Image
        source={role === UserRole.USER ? pathUser : pathTransporter}
        className="absolute inset-0 h-full w-full rounded-b-2xl"
        resizeMode="cover"
      />

      {/* Overlay content */}
      <View
        className={`relative z-10 px-8 py-4 ${centerAlign ? 'h-full justify-center' : ''}`}
      >
        <Text className="font-plus-jakarta-bold text-2xl font-bold text-white">
          {t('home.greeting')} {name}
        </Text>
        <Text className="mt-2 text-lg font-normal text-white">
          {t('home.slogan')}
        </Text>
      </View>
    </View>
  );
};

export default WelcomeHero;

const styles = StyleSheet.create({});
