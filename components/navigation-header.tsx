import { View, Text, TouchableOpacity } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { router } from "expo-router";
import { ReactNode } from "react";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";

interface NavigationHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  backButtonColor?: string;
}

/**
 * Navigation Header Component
 *
 * @example
 * // Basic usage
 * <NavigationHeader title="Mi Pantalla" />
 *
 * @example
 * // With back button
 * <NavigationHeader
 *   title="Detalles"
 *   showBackButton={true}
 *   onBackPress={() => router.back()}
 * />
 *
 * @example
 * // With custom styling and right component
 * <NavigationHeader
 *   title="Configuración"
 *   backgroundColor="bg-blue-500"
 *   textColor="text-white"
 *   rightComponent={
 *     <MaterialSymbol name="settings" size={24} color="text-white" />
 *   }
 * />
 */
export const NavigationHeader = ({
  title,
  showBackButton = true,
  onBackPress,
  rightComponent,
  backgroundColor,
  textColor,
  backButtonColor = "#007AFF",
}: NavigationHeaderProps) => {
  const { user, selectedUserType } = useStore();
  // Determine role: prefer user.role if logged in, else selectedUserType from onboarding
  const role = user?.role || selectedUserType;

  // Default colors based on role
  let defaultBg = "bg-primary-500";
  let defaultText = "text-white";
  if (role === UserRole.TRANSPORTER) {
    defaultBg = "bg-secondary-500";
    defaultText = "text-white";
  }

  return (
    <View
      className={`${
        backgroundColor || defaultBg
      } px-4 py-3 flex-row items-center justify-between border-b border-gray-200`}
    >
      <View className="flex-row items-center flex-1">
        {showBackButton && (
          <TouchableOpacity
            onPress={onBackPress || router.back}
            className="mr-3 p-1"
          >
            <MaterialSymbol
              name="arrow_back"
              size={24}
              color={
                backButtonColor === "#007AFF"
                  ? "text-blue-500"
                  : `text-[${backButtonColor}]`
              }
            />
          </TouchableOpacity>
        )}
        <Text
          className={`text-lg font-semibold ${textColor || defaultText} flex-1`}
        >
          {title}
        </Text>
      </View>
      {rightComponent && <View className="ml-2">{rightComponent}</View>}
    </View>
  );
};
