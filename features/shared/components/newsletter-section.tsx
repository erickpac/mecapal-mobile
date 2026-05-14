import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import { FormInput } from '@/components/form-input';
import {
  createNewsletterSchema,
  NewsletterFormData,
} from '@/features/shared/schemas/newsletter';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  const { control, handleSubmit, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(createNewsletterSchema(t)),
    defaultValues: { email: '' },
    mode: 'all',
  });

  const onSubmit = (_data: NewsletterFormData) => {
    // TODO: wire to newsletter subscription endpoint
    reset();
  };

  return (
    <View className="bg-primary-900 px-6 py-8">
      <Text className="text-center font-plus-jakarta-bold text-2xl text-white">
        {t('home.newsletter.title')}
      </Text>
      <Text className="font-plus-jakarta-regular mt-2 text-center text-sm text-white">
        {t('home.newsletter.subtitle')}
      </Text>
      <View className="mt-5">
        <FormInput
          control={control}
          name="email"
          label={t('home.newsletter.emailLabel')}
          type="email"
          returnKeyType="done"
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <Button
          title={t('home.newsletter.action1')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};
