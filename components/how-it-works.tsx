import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import SubheaderText from '@/components/subheader-text';
import TabComponent from '@/components/tab-component';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';
import { IconName } from '@/types/navigation';

interface StepCardProps {
  step: number;
  icon: IconName;
  title: string;
  description: string;
  bgClass: string;
  badgeClass: string;
  iconColor: string;
}

const StepCard = ({
  step,
  icon,
  title,
  description,
  bgClass,
  badgeClass,
  iconColor,
}: StepCardProps) => (
  <View className={`flex-1 rounded-xl ${bgClass} p-6`}>
    <View className="mb-4 flex-row items-center">
      <View
        className={`mr-2 h-8 w-8 items-center justify-center rounded-full ${badgeClass}`}
      >
        <Text className="font-plus-jakarta-bold text-sm text-white">
          {step}
        </Text>
      </View>
      <MaterialCommunityIcons name={icon} size={28} color={iconColor} />
    </View>
    <View className="gap-2">
      <Text className="font-plus-jakarta-semibold text-base">{title}</Text>
      <Text className="font-plus-jakarta text-sm">{description}</Text>
    </View>
  </View>
);

interface Step3CardProps {
  step: number;
  icon: IconName;
  title: string;
  description: string;
  bgClass: string;
  badgeClass: string;
  iconColor: string;
}

const Step3Card = ({
  step,
  icon,
  title,
  description,
  bgClass,
  badgeClass,
  iconColor,
}: Step3CardProps) => (
  <View className={`rounded-xl ${bgClass} p-4`}>
    <View className={`rounded-xl ${bgClass} p-4`}>
      <View className="mb-4 flex-row items-center">
        <View
          className={`mr-2 h-8 w-8 items-center justify-center rounded-full ${badgeClass}`}
        >
          <Text className="font-plus-jakarta-bold text-sm text-white">
            {step}
          </Text>
        </View>
        <MaterialCommunityIcons name={icon} size={28} color={iconColor} />
        <Text className="ml-2 font-plus-jakarta-semibold text-base">
          {title}
        </Text>
      </View>
      <Text className="font-plus-jakarta text-sm">{description}</Text>
    </View>
  </View>
);

const HowItWorks = () => {
  const { selectedUserType } = useStore();
  const { t } = useTranslation();

  const renderSteps = (role: 'client' | 'transporter') => {
    const isClient = role === 'client';
    const bgClass = isClient ? 'bg-primary-50' : 'bg-secondary-50';
    const badgeClass = isClient ? 'bg-primary-600' : 'bg-secondary-600';
    const iconColor = isClient ? COLORS.tertiary700 : COLORS.secondary900;

    return (
      <View className="mt-4 gap-3 px-4">
        <View className="flex-row gap-4">
          <StepCard
            step={1}
            icon="account-box-outline"
            title={t(`home.howItWorks.${role}.step1Title`)}
            description={t(`home.howItWorks.${role}.step1Description`)}
            bgClass={bgClass}
            badgeClass={badgeClass}
            iconColor={iconColor}
          />
          <StepCard
            step={2}
            icon="account-details-outline"
            title={t(`home.howItWorks.${role}.step2Title`)}
            description={t(`home.howItWorks.${role}.step2Description`)}
            bgClass={bgClass}
            badgeClass={badgeClass}
            iconColor={iconColor}
          />
        </View>
        <Step3Card
          step={3}
          icon="truck-outline"
          title={t(`home.howItWorks.${role}.step3Title`)}
          description={t(`home.howItWorks.${role}.step3Description`)}
          bgClass={bgClass}
          badgeClass={badgeClass}
          iconColor={iconColor}
        />
      </View>
    );
  };

  return (
    <View>
      <SubheaderText
        className="mb-4 mt-10"
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
