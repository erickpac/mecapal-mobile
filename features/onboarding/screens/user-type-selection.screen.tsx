import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationHeader } from "@/components/navigation-header";
import { ContentContainer } from "@/components/content-container";
import { navigateToAuthOptions } from "@/utils/navigation";
import { UserRisingHand, Car } from "@/components/svg";
import { COLORS } from "@/consts/colors";

export default function UserTypeSelectionScreen() {
  const { setSelectedUserType } = useStore();

  const handleUserTypeSelect = (userType: UserRole) => {
    setSelectedUserType(userType);
    navigateToAuthOptions();
  };

  return (
    <>
      <NavigationHeader
        showBackButton={true}
        backgroundColor={COLORS.primary}
      />

      <ContentContainer className="justify-between px-4">
        <View className="flex-1 pt-8">
          <View className="mb-6">
            <Text className="mb-4 text-center font-plus-jakarta-bold text-2xl text-text-active">
              ¿Qué tipo de usuario eres?
            </Text>
            <Text className="font-plus-jakarta-regular text-center text-base text-text-active">
              Elije tu rol para una experiencia personalizada.
            </Text>
          </View>

          <View className="flex flex-col gap-4">
            <TouchableOpacity
              onPress={() => handleUserTypeSelect(UserRole.USER)}
              className="h-45 flex justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <View className="items-center">
                <View className="mb-4 aspect-[123/87] w-32">
                  <UserRisingHand width="100%" height="100%" />
                </View>
                <Text className="mb-2 font-plus-jakarta-semibold text-xl text-text-active">
                  Necesito servicio de transporte
                </Text>
                <Text className="font-plus-jakarta-regular text-center text-sm text-text-idle">
                  Para enviar mis productos y mercancías
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleUserTypeSelect(UserRole.TRANSPORTER)}
              className="h-45 flex justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <View className="items-center">
                <View className="mb-4 aspect-[108/45] w-32">
                  <Car width="100%" height="100%" />
                </View>
                <Text className="mb-2 font-plus-jakarta-semibold text-xl text-text-active">
                  Puedo brindar servicios de transporte
                </Text>
                <Text className="font-plus-jakarta-regular text-center text-sm text-text-idle">
                  Para transportar productos y mercancías
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-center gap-2 pb-4">
          <View className="h-2 w-8 rounded-full bg-gray-300" />
          <View className="h-2 w-8 rounded-full bg-primary-500" />
          <View className="h-2 w-8 rounded-full bg-gray-300" />
        </View>
      </ContentContainer>
    </>
  );
}
