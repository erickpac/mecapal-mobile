import { useRegister } from '@/features/auth/hooks/useRegister';
import { useStore } from '@/store/useStore';
import { router } from 'expo-router';
import { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { UserRole } from '@/features/auth/types/user';
import { ContentContainer } from '@/components/content-container';
import { RegisterUser, RegisterTransporter } from '@/components/svg';
import { NavigationHeader } from '@/components/navigation-header';
import { IconButton } from '@/components/icon-button';
import { Button } from '@/components/button';
import { FormInput } from '@/components/form-input';
import { COLORS } from '@/consts/colors';
import { useAuthFlow } from '@/features/auth/hooks/useAuthFlow';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createRegisterSchema,
  RegisterFormData,
} from '@/features/auth/schemas/register';

const ROLE_COLORS = {
  [UserRole.CLIENT]: COLORS.primary,
  [UserRole.TRANSPORTER]: COLORS.secondary,
};

export default function RegisterScreen() {
  const { mutate: register, isPending, error, isSuccess } = useRegister();
  const { selectedUserType, setSelectedUserType } = useStore();
  const { t } = useTranslation();
  const { getErrorMessage } = useLocalizedError();
  const { isOnboarding, navigateToLogin, navigateToEmailVerification } =
    useAuthFlow();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isValid },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(createRegisterSchema(t)),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  });

  const email = watch('email');
  const userType = selectedUserType ?? UserRole.CLIENT;
  const activeColor = ROLE_COLORS[userType];

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigateToEmailVerification(email);
    }
  }, [isSuccess, email, reset, navigateToEmailVerification]);

  const handleSelectUserType = (value: string) => {
    setSelectedUserType(value as UserRole);
  };

  const onSubmit = (data: RegisterFormData) => {
    register({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: userType,
    });
  };

  return (
    <>
      <NavigationHeader
        showBackButton={!isOnboarding}
        rightComponent={
          isOnboarding ? (
            <IconButton
              icon="close"
              color={COLORS.white}
              onPress={() => router.dismiss()}
            />
          ) : undefined
        }
      />
      <ContentContainer>
        <KeyboardAvoidingView
          className="flex-1 pt-8"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerClassName="px-4" bounces={false}>
            <View className="mb-6 mt-2 items-center">
              <View className="aspect-[287/206] w-48 max-w-full">
                {selectedUserType === UserRole.CLIENT ? (
                  <RegisterUser width="100%" height="100%" />
                ) : (
                  <RegisterTransporter width="100%" height="100%" />
                )}
              </View>
            </View>
            <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
              {t('auth.register.title')}
            </Text>

            <View className="mb-4">
              <Text className="mb-2 font-plus-jakarta-semibold text-sm text-text-active">
                {t('auth.register.accountType')}
              </Text>
              <SegmentedButtons
                value={userType}
                onValueChange={handleSelectUserType}
                buttons={[
                  {
                    value: UserRole.CLIENT,
                    label: t('auth.register.userRole'),
                    checkedColor: COLORS.white,
                    uncheckedColor: COLORS.darkGray[500],
                    style: {
                      backgroundColor:
                        userType === UserRole.CLIENT
                          ? ROLE_COLORS[UserRole.CLIENT]
                          : 'transparent',
                      borderColor: activeColor,
                    },
                  },
                  {
                    value: UserRole.TRANSPORTER,
                    label: t('auth.register.transporterRole'),
                    checkedColor: COLORS.white,
                    uncheckedColor: COLORS.darkGray[500],
                    style: {
                      backgroundColor:
                        userType === UserRole.TRANSPORTER
                          ? ROLE_COLORS[UserRole.TRANSPORTER]
                          : 'transparent',
                      borderColor: activeColor,
                    },
                  },
                ]}
              />
            </View>

            <View className="mb-2">
              <View className="flex-row gap-2">
                <View className="flex-1">
                  <FormInput
                    control={control}
                    name="firstName"
                    label={t('auth.register.firstName')}
                    type="text"
                    returnKeyType="next"
                  />
                </View>
                <View className="flex-1">
                  <FormInput
                    control={control}
                    name="lastName"
                    label={t('auth.register.lastName')}
                    type="text"
                    returnKeyType="next"
                  />
                </View>
              </View>
              <FormInput
                control={control}
                name="email"
                label={t('auth.register.email')}
                type="email"
                returnKeyType="next"
              />
              <FormInput
                control={control}
                name="phone"
                label={t('auth.register.phone')}
                type="phone"
                returnKeyType="next"
              />
              <FormInput
                control={control}
                name="password"
                label={t('auth.register.password')}
                type="password"
                returnKeyType="next"
              />
              <FormInput
                control={control}
                name="confirmPassword"
                label={t('auth.register.confirmPassword')}
                type="password"
                returnKeyType="done"
              />
            </View>

            {error && (
              <Text className="mb-4 text-center font-plus-jakarta text-sm text-red-500">
                {getErrorMessage(error)}
              </Text>
            )}

            <Button
              title={t('auth.register.title')}
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid || isPending}
              userType={selectedUserType}
              loading={isPending}
            />

            {isOnboarding && (
              <Button
                title={t('auth.register.hasAccount')}
                variant="text"
                className="mt-2"
                userType={selectedUserType}
                onPress={navigateToLogin}
              />
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
}
