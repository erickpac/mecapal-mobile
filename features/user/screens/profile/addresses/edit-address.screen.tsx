import { useEffect, useMemo, useState, useCallback } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useStore } from '@/store/useStore';
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { FormInput } from '@/components/form-input';
import { FormSelectInput } from '@/components/form-select-input';
import { Button } from '@/components/button';
import { COLORS } from '@/consts/colors';
import { useLocalizedError } from '@/hooks/useLocalizedError';
import { useAddresses } from '@/features/user/hooks/useAddresses';
import { useUpdateAddress } from '@/features/user/hooks/useUpdateAddress';
import { useDeleteAddress } from '@/features/user/hooks/useDeleteAddress';
import {
  useCountries,
  useDepartments,
  useMunicipalities,
  useZones,
} from '@/features/user/hooks/useLocations';
import {
  createAddressSchema,
  AddressFormData,
} from '@/features/user/schemas/address';
import { navigateToMapPicker } from '@/features/user/routes';
import { consumeMapSelection } from '@/features/user/services/map-selection';

const EditAddressScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
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
  const { user } = useStore();
  const { t } = useTranslation();
  const { getErrorMessage } = useLocalizedError();

  const { data: addresses, isLoading: isLoadingAddresses } = useAddresses();
  const address = addresses?.find((a) => a.id === id);

  const {
    mutate: updateAddress,
    isPending,
    error,
    isSuccess,
  } = useUpdateAddress();

  const {
    mutate: deleteAddress,
    isPending: isDeleting,
    isSuccess: isDeleteSuccess,
  } = useDeleteAddress();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
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

  // Fetch Guatemala country to get its ID
  const { data: countries } = useCountries();
  const guatemalaId = countries?.find(
    (c) => c.code === 'GT' || c.name === 'Guatemala',
  )?.id;

  // Cascading data
  const { data: departments } = useDepartments(guatemalaId);
  const { data: municipalities } = useMunicipalities(selectedStateId || undefined);
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

  // Pre-populate form from saved IDs
  useEffect(() => {
    if (!address) return;

    reset({
      alias: address.alias,
      stateId: address.stateId ?? '',
      cityId: address.municipalityId ?? '',
      zoneId: address.zoneId ?? '',
      street: address.street,
      isDefault: address.isDefault,
    });
  }, [address, reset]);

  useEffect(() => {
    if (isSuccess || isDeleteSuccess) {
      router.back();
    }
  }, [isSuccess, isDeleteSuccess]);

  const handleStateChange = (value: string) => {
    setValue('stateId', value, { shouldValidate: true });
    setValue('cityId', '', { shouldValidate: true });
    setValue('zoneId', '');
  };

  const handleCityChange = (value: string) => {
    setValue('cityId', value, { shouldValidate: true });
    setValue('zoneId', '');
  };

  const handleDelete = () => {
    if (!id) return;

    Alert.alert(
      t('profile.address.deleteConfirmTitle'),
      t('profile.address.deleteConfirmMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: () => deleteAddress(id),
        },
      ],
    );
  };

  const onSubmit = (data: AddressFormData) => {
    if (!id) return;

    const stateName =
      departments?.find((d) => d.id === data.stateId)?.name ?? '';
    const cityName =
      municipalities?.find((m) => m.id === data.cityId)?.name ?? '';
    const selectedZone = zones?.find((z) => z.id === data.zoneId);

    updateAddress({
      id,
      data: {
        alias: data.alias,
        street: data.street,
        city: cityName,
        state: stateName,
        postalCode: selectedZone?.code ?? address?.postalCode ?? '00000',
        country: 'Guatemala',
        latitude: coords?.latitude ?? selectedZone?.latitude ?? address?.latitude ?? null,
        longitude: coords?.longitude ?? selectedZone?.longitude ?? address?.longitude ?? null,
        isDefault: data.isDefault,
        stateId: data.stateId || null,
        municipalityId: data.cityId || null,
        zoneId: data.zoneId || null,
      },
    });
  };

  const title = address
    ? `${address.alias}${address.isDefault ? ` (${t('profile.address.default')})` : ''}`
    : t('profile.address.editFormTitle');

  if (isLoadingAddresses) {
    return (
      <>
        <NavigationHeader title="" showBackButton borderBottom={false} />
        <ContentContainer edges={['left', 'right']}>
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        </ContentContainer>
      </>
    );
  }

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <ContentContainer edges={['left', 'right']}>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerClassName="px-4" bounces={false}>
            <View className="pt-4">
              <Text className="font-plus-jakarta-bold text-2xl text-gray-900">
                {title}
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
                navigateToMapPicker(
                  coords?.latitude ?? address?.latitude ?? undefined,
                  coords?.longitude ?? address?.longitude ?? undefined,
                )
              }
              className="mb-4 flex-row items-center rounded-lg border border-gray-300 bg-white px-4 py-3"
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={22}
                color={
                  coords || address?.latitude
                    ? COLORS.success
                    : COLORS.lightGray[700]
                }
              />
              <Text
                className={`ml-3 flex-1 font-plus-jakarta text-base ${
                  coords || address?.latitude
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                {coords || address?.latitude
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

            {error && (
              <Text className="mt-2 text-center font-plus-jakarta text-sm text-red-500">
                {getErrorMessage(error)}
              </Text>
            )}
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="gap-2 px-4 pb-4">
          <Button
            title={
              isPending
                ? t('profile.address.updating')
                : t('profile.address.updateAddress')
            }
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid || isPending || isDeleting}
            loading={isPending}
            userType={user?.role}
            variant="contained"
          />
          <Button
            title={t('profile.address.deleteAddress')}
            onPress={handleDelete}
            disabled={isDeleting}
            loading={isDeleting}
            userType={user?.role}
            variant="outlined"
          />
        </View>
      </ContentContainer>
    </>
  );
};

export default EditAddressScreen;
