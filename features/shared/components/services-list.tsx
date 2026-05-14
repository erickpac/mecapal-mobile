import { View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import ListItem from '@/components/list-item';
import SubheaderText from '@/components/subheader-text';
import { SERVICES } from '@/features/shared/data/services';
import { navigateTo } from '@/features/shared/routes';

export const ServicesList = () => {
  const { t } = useTranslation();

  const handleServicePress = (serviceId: string) => {
    navigateTo(`/home/service-detail?id=${serviceId}`);
  };

  return (
    <>
      <SubheaderText title={t('home.guest.servicesTitle')} onlyTitle />
      <View className="mt-4 bg-white">
        {SERVICES.map((service) => (
          <ListItem
            key={service.id}
            icon={
              <Image
                source={service.icon}
                className="h-[75px] w-[75px]"
                resizeMode="contain"
              />
            }
            title={t(`home.services.${service.id}.title`)}
            onPress={() => handleServicePress(service.id)}
          />
        ))}
      </View>
    </>
  );
};
