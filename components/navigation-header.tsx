import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
 * Reusable Navigation Header Component
 *
 * @example
 * // Basic usage with back button
 * <NavigationHeader title="Mi Pantalla" />
 *
 * @example
 * // Without back button
 * <NavigationHeader title="Dashboard" showBackButton={false} />
 *
 * @example
 * // With custom colors
 * <NavigationHeader
 *   title="Emergencia"
 *   backgroundColor="bg-red-500"
 *   textColor="text-white"
 *   backButtonColor="white"
 * />
 *
 * @example
 * // With right component (e.g., settings button)
 * <NavigationHeader
 *   title="Perfil"
 *   rightComponent={
 *     <TouchableOpacity onPress={handleSettings}>
 *       <Ionicons name="settings" size={24} color="#007AFF" />
 *     </TouchableOpacity>
 *   }
 * />
 */
const NavigationHeader = ({
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
    <View className={`${backgroundColor} p-4 border-b border-gray-200`}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          {showBackButton && (
            <TouchableOpacity
              onPress={handleBackPress}
              className="flex-row items-center"
            >
              <Ionicons name="arrow-back" size={24} color={backButtonColor} />
              <Text className={`text-lg font-semibold ml-2 ${textColor}`}>
                {title}
              </Text>
            </TouchableOpacity>
          )}
          {!showBackButton && (
            <Text className={`text-lg font-semibold ${textColor}`}>
              {title}
            </Text>
          )}
        </View>
        {rightComponent && <View className="ml-4">{rightComponent}</View>}
      </View>
    </View>
  );
};

export default NavigationHeader;
