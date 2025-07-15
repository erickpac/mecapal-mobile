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

      <ContentContainer className="px-4 justify-between">
        <View className="flex-1 pt-8">
          <View className="mb-6">
            <Text className="text-2xl font-plus-jakarta-bold text-text-active text-center mb-4">
              ¿Qué tipo de usuario eres?
            </Text>
            <Text className="text-base font-plus-jakarta-regular text-text-active text-center">
              Elije tu rol para una experiencia personalizada.
            </Text>
          </View>

          <View className="flex flex-col gap-4">
            <TouchableOpacity
              onPress={() => handleUserTypeSelect(UserRole.USER)}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-45 flex justify-center"
            >
              <View className="items-center">
                <View className="w-32 aspect-[123/87] mb-4">
                  <UserRisingHand width="100%" height="100%" />
                </View>
                <Text className="text-xl font-plus-jakarta-semibold text-text-active mb-2">
                  Necesito servicio de transporte
                </Text>
                <Text className="text-sm font-plus-jakarta-regular text-text-idle text-center">
                  esit Para enviar mis productos y mercancías
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleUserTypeSelect(UserRole.TRANSPORTER)}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-45 flex justify-center"
            >
              <View className="items-center">
                <View className="w-32 aspect-[108/45] mb-4">
                  <Car width="100%" height="100%" />
                </View>
                <Text className="text-xl font-plus-jakarta-semibold text-text-active mb-2">
                  Puedo brindar servicios de transporte
                </Text>
                <Text className="text-sm font-plus-jakarta-regular text-text-idle text-center">
                  Para transportar productos y mercancías
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-center items-center gap-2 pb-4">
          <View className="w-8 h-2 bg-gray-300 rounded-full" />
          <View className="w-8 h-2 bg-primary-500 rounded-full" />
          <View className="w-8 h-2 bg-gray-300 rounded-full" />
        </View>
      </ContentContainer>
    </>
  );
}
