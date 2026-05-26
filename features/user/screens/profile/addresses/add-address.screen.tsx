import { useMemo, useState, useCallback } from 'react';
import { useStore } from '@/store/useStore';
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, useFocusEffect } from 'expo-router';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { FormInput } from '@/components/form-input';
import { FormSelectInput } from '@/components/form-select-input';
import { Button } from '@/components/button';
import { COLORS } from '@/consts/colors';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useCreateAddress } from '@/features/user/hooks/useCreateAddress';
import {
  useDepartments,
  useMunicipalities,
  useZones,
} from '@/features/user/hooks/useLocations';
import { DEFAULT_COUNTRY_CODE } from '@/consts/location';
import {
  createAddressSchema,
  AddressFormData,
} from '@/features/user/schemas/address';
import { navigateToMapPicker } from '@/features/user/routes';
import { consumeMapSelection } from '@/features/user/services/map-selection';

const AddAddressScreen = () => {
  const { user } = useStore();
  const { t } = useTranslation();
  const { getErrorMessage } = useLocalizedError();
  const { showSuccess, showError } = useSnackbar();
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useFocusEffect(
    useCallback(() => {
      const selection = consumeMapSelection();
      if (selection) {
        setCoords(selection);
      }
    }, []),
  );

  const { mutate: createAddress, isPending } = useCreateAddress();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<AddressFormData>({
    resolver: zodResolver(createAddressSchema(t)),
    defaultValues: {
      alias: '',
      stateId: '',
      cityId: '',
      zoneId: '',
      street: '',
      isDefault: false,
    },
    mode: 'all',
  });

  const isDefault = watch('isDefault');
  const selectedStateId = watch('stateId');
  const selectedCityId = watch('cityId');

  const { data: departments } = useDepartments({
    countryCode: user?.countryCode ?? DEFAULT_COUNTRY_CODE,
  });
  const { data: municipalities } = useMunicipalities(
    selectedStateId || undefined,
  );
  const { data: zones } = useZones(selectedCityId || undefined);

  // Map to select options
  const departmentOptions = useMemo(
    () => (departments ?? []).map((d) => ({ label: d.name, value: d.id })),
    [departments],
  );

  const municipalityOptions = useMemo(
    () => (municipalities ?? []).map((m) => ({ label: m.name, value: m.id })),
    [municipalities],
  );

  const zoneOptions = useMemo(
    () => (zones ?? []).map((z) => ({ label: z.name, value: z.id })),
    [zones],
  );

  const handleStateChange = (value: string) => {
    setValue('stateId', value, { shouldValidate: true });
    setValue('cityId', '', { shouldValidate: true });
    setValue('zoneId', '');
  };

  const handleCityChange = (value: string) => {
    setValue('cityId', value, { shouldValidate: true });
    setValue('zoneId', '');
  };

  const onSubmit = (data: AddressFormData) => {
    const selectedZone = zones?.find((z) => z.id === data.zoneId);

    createAddress(
      {
        alias: data.alias,
        street: data.street,
        latitude: coords?.latitude ?? selectedZone?.latitude ?? null,
        longitude: coords?.longitude ?? selectedZone?.longitude ?? null,
        isDefault: data.isDefault,
        stateId: data.stateId,
        municipalityId: data.cityId,
        zoneId: data.zoneId || undefined,
      },
      {
        onSuccess: () => {
          showSuccess(t('profile.address.createSuccess'));
          // Snackbar is rendered by the app-level provider, so it remains visible
          // after navigating back. A small delay lets the user register the action
          // before the screen transitions away.
          setTimeout(() => {
            router.back();
          }, 400);
        },
        onError: (mutationError) => {
          showError(getErrorMessage(mutationError));
        },
      },
    );
  };

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <ContentContainer>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerClassName="px-4" bounces={false}>
            <View className="pt-4">
              <Text className="font-plus-jakarta-bold text-2xl text-gray-900">
                {t('profile.address.formTitle')}
              </Text>
              <Text className="mt-4 font-plus-jakarta text-base">
                {t('profile.address.formSubtitle')}
              </Text>
            </View>

            <View className="mt-8 pb-4">
              <FormInput
                control={control}
                name="alias"
                label={`${t('profile.address.alias')}*`}
                type="text"
                placeholder={t('profile.address.aliasPlaceholder')}
                returnKeyType="next"
              />

              <FormSelectInput
                control={control}
                name="stateId"
                label={`${t('profile.address.state')}*`}
                options={departmentOptions}
                placeholder={t('common.select')}
                onValueChange={handleStateChange}
              />

              <FormSelectInput
                control={control}
                name="cityId"
                label={`${t('profile.address.city')}*`}
                options={municipalityOptions}
                placeholder={t('common.select')}
                onValueChange={handleCityChange}
              />

              {zoneOptions.length > 0 && (
                <FormSelectInput
                  control={control}
                  name="zoneId"
                  label={t('profile.address.zone')}
                  options={zoneOptions}
                  placeholder={t('common.select')}
                />
              )}

              <FormInput
                control={control}
                name="street"
                label={`${t('profile.address.street')}*`}
                type="text"
                returnKeyType="done"
              />
            </View>

            <TouchableOpacity
              onPress={() =>
                navigateToMapPicker(coords?.latitude, coords?.longitude)
              }
              className="mb-4 flex-row items-center rounded-lg border border-gray-300 bg-white px-4 py-3"
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={22}
                color={coords ? COLORS.success : COLORS.lightGray[700]}
              />
              <Text
                className={`ml-3 flex-1 font-plus-jakarta text-base ${coords ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {coords
                  ? t('profile.address.locationSelected')
                  : t('profile.address.selectLocationButton')}
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={COLORS.lightGray[700]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setValue('isDefault', !isDefault)}
              className="flex-row items-center"
              activeOpacity={0.7}
            >
              <PaperCheckbox.Android
                status={isDefault ? 'checked' : 'unchecked'}
                onPress={() => setValue('isDefault', !isDefault)}
                color={COLORS.primary}
                uncheckedColor={COLORS.darkGray[400]}
              />
              <Text className="flex-1 font-plus-jakarta text-base text-gray-700">
                {t('profile.address.isDefault')}
              </Text>
            </TouchableOpacity>
          </ScrollView>

          <View className="px-4 pb-4">
            <Button
              title={
                isPending
                  ? t('profile.address.saving')
                  : t('profile.address.addNewAddress')
              }
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid || isPending}
              loading={isPending}
              userType={user?.role}
              variant="contained"
            />
          </View>
        </KeyboardAvoidingView>
      </ContentContainer>
    </>
  );
};

export default AddAddressScreen;
