import { View, Text, TouchableOpacity } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { router } from "expo-router";
import { ReactNode } from "react";

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
  backgroundColor = "bg-white",
  textColor = "text-gray-800",
  backButtonColor = "#007AFF",
}: NavigationHeaderProps) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View
      className={`${backgroundColor} px-4 py-3 flex-row items-center justify-between border-b border-gray-200`}
    >
      <View className="flex-row items-center flex-1">
        {showBackButton && (
          <TouchableOpacity onPress={handleBackPress} className="mr-3 p-1">
            <MaterialSymbol
              name="arrow_back_ios"
              size={24}
              color={
                backButtonColor === "#007AFF"
                  ? "text-blue-500"
                  : `text-[${backButtonColor}]`
              }
            />
          </TouchableOpacity>
        )}
        <Text className={`text-lg font-semibold ${textColor} flex-1`}>
          {title}
        </Text>
      </View>
      {rightComponent && <View className="ml-2">{rightComponent}</View>}
    </View>
  );
};
