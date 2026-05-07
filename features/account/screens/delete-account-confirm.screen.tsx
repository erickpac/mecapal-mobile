import { useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import { NavigationHeader } from '@/components/navigation-header';
import { ContentContainer } from '@/components/content-container';
import { Input } from '@/components/input';
import { SelectInput, SelectOption } from '@/components/select-input';
import { Button } from '@/components/button';
import { COLORS } from '@/consts/colors';
import { useStore } from '@/store/useStore';
import { useRequestAccountDeletion } from '@/features/account/hooks/useRequestAccountDeletion';
import {
  AccountDeletionErrorResponse,
  DeletionBlocker,
  DeletionReason,
} from '@/features/account/types/account-deletion';
import { navigateToDeleteAccountSuccess } from '@/features/account/routes';

const OTHER_REASON_MAX = 500;

const REASON_VALUES: DeletionReason[] = [
  DeletionReason.NO_LONGER_USE,
  DeletionReason.CREATED_ANOTHER_ACCOUNT,
  DeletionReason.PRIVACY_CONCERNS,
  DeletionReason.APP_ISSUES,
  DeletionReason.BAD_EXPERIENCE,
  DeletionReason.MISSING_FEATURES,
  DeletionReason.PREFER_NOT_TO_SAY,
  DeletionReason.OTHER,
];

export default function DeleteAccountConfirmScreen() {
  const { t } = useTranslation();
  const { user, setDeletionScheduledFor } = useStore();
  const { mutate: requestDeletion, isPending } = useRequestAccountDeletion();

  const [password, setPassword] = useState('');
  const [reason, setReason] = useState<DeletionReason | ''>('');
  const [otherReason, setOtherReason] = useState('');
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined,
  );
  const [otherReasonError, setOtherReasonError] = useState<string | undefined>(
    undefined,
  );
  const [blockers, setBlockers] = useState<DeletionBlocker[]>([]);
  const [formError, setFormError] = useState<string | undefined>(undefined);

  const reasonOptions = useMemo<SelectOption[]>(
    () => [
      { label: t('account.deletion.reasons.none'), value: '' },
      ...REASON_VALUES.map((value) => ({
        label: t(`account.deletion.reasons.${value}`),
        value,
      })),
    ],
    [t],
  );

  const clearErrors = () => {
    setPasswordError(undefined);
    setOtherReasonError(undefined);
    setBlockers([]);
    setFormError(undefined);
  };

  const validate = (): boolean => {
    let ok = true;
    clearErrors();
    if (!password.trim()) {
      setPasswordError(t('account.deletion.errors.passwordRequired'));
      ok = false;
    }
    if (reason === DeletionReason.OTHER) {
      if (!otherReason.trim()) {
        setOtherReasonError(t('account.deletion.errors.otherReasonRequired'));
        ok = false;
      } else if (otherReason.length > OTHER_REASON_MAX) {
        setOtherReasonError(t('account.deletion.errors.otherReasonTooLong'));
        ok = false;
      }
    }
    return ok;
  };

  const performDeletion = () => {
    requestDeletion(
      {
        password,
        ...(reason ? { reason: reason as DeletionReason } : {}),
        ...(reason === DeletionReason.OTHER && otherReason.trim()
          ? { otherReason: otherReason.trim() }
          : {}),
      },
      {
        onSuccess: (data) => {
          setDeletionScheduledFor(data.scheduledFor);
          navigateToDeleteAccountSuccess(data.scheduledFor);
        },
        onError: (err: AxiosError<AccountDeletionErrorResponse>) => {
          const status = err.response?.status;
          const body = err.response?.data;
          const serverError =
            body && typeof body === 'object' && 'error' in body
              ? body.error
              : undefined;

          if (status === 401) {
            setPasswordError(t('account.deletion.errors.invalidPassword'));
            return;
          }
          if (status === 409 && serverError === 'DELETION_BLOCKED') {
            const b =
              body && 'blockers' in body && Array.isArray(body.blockers)
                ? (body.blockers as DeletionBlocker[])
                : [];
            setBlockers(b);
            return;
          }
          if (
            status === 409 &&
            serverError === 'DELETION_ALREADY_SCHEDULED' &&
            body &&
            'scheduledFor' in body &&
            typeof body.scheduledFor === 'string'
          ) {
            setDeletionScheduledFor(body.scheduledFor);
            navigateToDeleteAccountSuccess(body.scheduledFor);
            return;
          }
          if (status === 429) {
            Alert.alert(
              t('account.deletion.errors.rateLimitedTitle'),
              t('account.deletion.errors.rateLimited'),
            );
            return;
          }
          if (status === 400) {
            setFormError(t('account.deletion.errors.validation'));
            return;
          }
          setFormError(t('errors.generic'));
        },
      },
    );
  };

  const handleConfirm = () => {
    if (!validate()) return;
    Alert.alert(
      t('account.deletion.confirmTitle'),
      t('account.deletion.confirmMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('account.deletion.confirmYes'),
          style: 'destructive',
          onPress: performDeletion,
        },
      ],
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
          <ScrollView
            contentContainerClassName="px-4 pb-6"
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            <View className="pt-2">
              <Text className="font-plus-jakarta-bold text-2xl text-gray-900">
                {t('account.deletion.title')}
              </Text>
              <Text className="mt-3 font-plus-jakarta text-base text-gray-700">
                {t('account.deletion.warning.delay')}
              </Text>
              <View className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <Text className="font-plus-jakarta-semibold text-sm text-amber-900">
                  {t('account.deletion.warning.keptTitle')}
                </Text>
                <Text className="mt-1 font-plus-jakarta text-sm text-amber-900">
                  {t('account.deletion.warning.keptBody')}
                </Text>
                <Text className="mt-3 font-plus-jakarta-semibold text-sm text-amber-900">
                  {t('account.deletion.warning.deletedTitle')}
                </Text>
                <Text className="mt-1 font-plus-jakarta text-sm text-amber-900">
                  {t('account.deletion.warning.deletedBody')}
                </Text>
              </View>
            </View>

            <View className="mt-6">
              <SelectInput
                label={t('account.deletion.reasonLabel')}
                value={reason}
                options={reasonOptions}
                onValueChange={(value) =>
                  setReason(value as DeletionReason | '')
                }
                modalTitle={t('account.deletion.reasonLabel')}
              />

              {reason === DeletionReason.OTHER && (
                <Input
                  label={t('account.deletion.otherReasonLabel')}
                  value={otherReason}
                  onChangeText={(text) =>
                    setOtherReason(text.slice(0, OTHER_REASON_MAX))
                  }
                  multiline
                  numberOfLines={3}
                  maxLength={OTHER_REASON_MAX}
                  error={otherReasonError}
                />
              )}

              <Input
                label={t('account.deletion.passwordLabel')}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError(undefined);
                }}
                type="password"
                error={passwordError}
              />
            </View>

            {blockers.length > 0 && (
              <View className="mt-2 rounded-xl border border-red-200 bg-red-50 p-4">
                <Text className="font-plus-jakarta-semibold text-sm text-red-800">
                  {t('account.deletion.errors.blockedTitle')}
                </Text>
                {blockers.map((b) => (
                  <Text
                    key={b}
                    className="mt-1 font-plus-jakarta text-sm text-red-800"
                  >
                    {'\u2022 '}
                    {t(`account.deletion.blockers.${b}`)}
                  </Text>
                ))}
              </View>
            )}

            {formError && (
              <Text className="mt-3 text-center font-plus-jakarta text-sm text-red-500">
                {formError}
              </Text>
            )}
          </ScrollView>
        </KeyboardAvoidingView>

        <View className="px-4 pb-4">
          <Button
            title={
              isPending
                ? t('account.deletion.submitting')
                : t('account.deletion.submit')
            }
            onPress={handleConfirm}
            disabled={isPending || !password.trim()}
            loading={isPending}
            buttonColor={COLORS.error}
            userType={user?.role}
            variant="contained"
          />
        </View>
      </ContentContainer>
    </>
  );
}
