import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import { Text, View } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import SubheaderText from '@/components/subheader-text';
import TabComponent from '@/components/tab-component';
import { Button } from '@/components/button';
import { LoginHome } from '@/components/svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { IconName } from '@/types/navigation';

interface StepCardProps {
  step: number;
  icon: IconName;
  title: string;
  descriptionI18nKey: string;
  items?: string[];
  bgClass: string;
  badgeClass: string;
  iconColor: string;
}

const StepCard = ({
  step,
  icon,
  title,
  descriptionI18nKey,
  items,
  bgClass,
  badgeClass,
  iconColor,
}: StepCardProps) => (
  <View className={`rounded-xl ${bgClass} p-4`}>
    <View className="mb-3 flex-row items-center">
      <View
        className={`mr-2 h-8 w-8 items-center justify-center rounded-full ${badgeClass}`}
      >
        <Text className="font-plus-jakarta-bold text-sm text-white">
          {step}
        </Text>
      </View>
      <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
      <Text className="ml-2 font-plus-jakarta-semibold text-base">{title}</Text>
    </View>
    <Text className="font-plus-jakarta text-sm">
      <Trans
        i18nKey={descriptionI18nKey}
        components={{ b: <Text className="font-plus-jakarta-bold" /> }}
      />
    </Text>
    {items && items.length > 0 && (
      <View className="ml-2 mt-2">
        {items.map((item) => (
          <View key={item} className="flex-row">
            <Text className="font-plus-jakarta text-sm">{'•  '}</Text>
            <Text className="font-plus-jakarta text-sm">{item}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

const HowItWorks = () => {
  const { selectedUserType, setSelectedUserType } = useStore();
  const { t } = useTranslation();

  const handleGoToAuth = (userType: UserRole) => {
    setSelectedUserType(userType);
    router.navigate('/(app)/auth' as never);
  };

  const renderSteps = (role: 'client' | 'transporter') => {
    const isClient = role === 'client';
    const userType = isClient ? UserRole.CLIENT : UserRole.TRANSPORTER;
    const bgClass = isClient ? 'bg-primary-50' : 'bg-secondary-50';
    const badgeClass = isClient ? 'bg-primary-600' : 'bg-secondary-600';
    const iconColor = isClient ? COLORS.tertiary700 : COLORS.secondary900;
    const ctaColor = isClient ? COLORS.primary : COLORS.secondary;

    const step2Items = isClient
      ? (t('home.howItWorks.client.step2Items', {
          returnObjects: true,
          defaultValue: [],
        }) as string[])
      : undefined;

    return (
      <View>
        <View className="mt-4 gap-3 px-4">
          <StepCard
            step={1}
            icon="account-box-outline"
            title={t(`home.howItWorks.${role}.step1Title`)}
            descriptionI18nKey={`home.howItWorks.${role}.step1Description`}
            bgClass={bgClass}
            badgeClass={badgeClass}
            iconColor={iconColor}
          />
          <StepCard
            step={2}
            icon="account-details-outline"
            title={t(`home.howItWorks.${role}.step2Title`)}
            descriptionI18nKey={`home.howItWorks.${role}.step2Description`}
            items={step2Items}
            bgClass={bgClass}
            badgeClass={badgeClass}
            iconColor={iconColor}
          />
          <StepCard
            step={3}
            icon="truck-outline"
            title={t(`home.howItWorks.${role}.step3Title`)}
            descriptionI18nKey={`home.howItWorks.${role}.step3Description`}
            bgClass={bgClass}
            badgeClass={badgeClass}
            iconColor={iconColor}
          />
        </View>

        <View className="mx-8 mt-6 items-center">
          <LoginHome color={ctaColor} />
          <Text className="text-center font-plus-jakarta-semibold text-xl">
            {t('home.ctaUser.title')}
          </Text>
          <View className="mt-4 w-72 gap-4">
            <Button
              title={t('home.ctaUser.action1')}
              onPress={() => handleGoToAuth(userType)}
              userType={userType}
            />
            <Button
              title={t('home.ctaUser.action2')}
              onPress={() => handleGoToAuth(userType)}
              userType={userType}
              variant="outlined"
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <SubheaderText
        className="mb-4 mt-10 px-4"
        title={t('home.howItWorks.title')}
        description={t('home.howItWorks.description')}
      />
      <View className="mb-4">
        <TabComponent
          tabs={[
            {
              title: t('home.howItWorks.clientTab'),
              component: renderSteps('client'),
              activeColor: COLORS.primary,
            },
            {
              title: t('home.howItWorks.transporterTab'),
              component: renderSteps('transporter'),
              activeColor: COLORS.secondary,
            },
          ]}
          defaultActiveTab={selectedUserType === UserRole.TRANSPORTER ? 1 : 0}
        />
      </View>
    </View>
  );
};

export default HowItWorks;
