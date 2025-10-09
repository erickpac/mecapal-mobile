import { useStore } from '@/store/useStore';
import { UserRole } from '@/features/auth/types/user';
import { Text, View } from 'react-native';
import SubheaderText from '@/components/subheader-text';
import TabComponent from '@/components/tab-component';
import MaterialIcon from '@/components/material-icon';
import { COLORS } from '@/consts/colors';

const HowItWorks = () => {
  const { selectedUserType } = useStore();
  const renderClientHowItWorks = () => {
    return (
      <View className="mt-4 flex flex-col gap-3 px-4">
        <View className="flex flex-row justify-between gap-4">
          <View className="flex-1 rounded-xl bg-primary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  1
                </Text>
              </View>
              <MaterialIcon
                name="account-box-outline"
                size={28}
                color={COLORS.maroon}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Crea una cuenta
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
          <View className="flex-1 rounded-xl bg-primary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  2
                </Text>
              </View>
              <MaterialIcon
                name="account-details-outline"
                size={28}
                color={COLORS.maroon}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 rounded-xl bg-primary-50 p-4">
          <View className="flex-1 rounded-xl bg-primary-50 p-4">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  3
                </Text>
              </View>
              <MaterialIcon
                name="truck-outline"
                size={28}
                color={COLORS.maroon}
              />
              <Text className="ml-2 font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta text-sm">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderTransporterHowItWorks = () => {
    return (
      <View className="mt-4 flex flex-col gap-3 px-4">
        <View className="flex flex-row justify-between gap-4">
          <View className="flex-1 rounded-xl bg-secondary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-secondary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  1
                </Text>
              </View>
              <MaterialIcon
                name="account-box-outline"
                size={28}
                color={COLORS.darkSecondary}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Crea una cuenta
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
          <View className="flex-1 rounded-xl bg-secondary-50 p-6">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-secondary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  2
                </Text>
              </View>
              <MaterialIcon
                name="account-details-outline"
                size={28}
                color={COLORS.darkSecondary}
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
              <Text className="font-plus-jakarta text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna ali
                qua.
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 rounded-xl bg-secondary-50 p-4">
          <View className="flex-1 rounded-xl bg-secondary-50 p-4">
            <View className="mb-4 flex flex-row items-center">
              <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-secondary-600">
                <Text className="font-plus-jakarta-bold text-sm font-bold text-white">
                  3
                </Text>
              </View>
              <MaterialIcon
                name="truck-outline"
                size={28}
                color={COLORS.darkSecondary}
              />
              <Text className="ml-2 font-plus-jakarta-semibold text-base font-semibold">
                Selecciona el tipo de envío
              </Text>
            </View>
            <View className="flex flex-col gap-2">
              <Text className="font-plus-jakarta text-sm">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <SubheaderText
        className="mb-4 mt-10"
        title="¿Cómo funciona?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <View className="mb-4">
        <TabComponent
          tabs={[
            {
              title: 'Cliente',
              component: renderClientHowItWorks(),
              activeColor: COLORS.primary,
            },
            {
              title: 'Transportista',
              component: renderTransporterHowItWorks(),
              activeColor: COLORS.secondary,
            },
          ]}
          defaultActiveTab={selectedUserType === UserRole.TRANSPORTER ? 1 : 0}
          contentStyle="w-"
        />
      </View>
    </View>
  );
};

export default HowItWorks;
