import React, { ReactNode } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";
import { router } from "expo-router";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/consts/colors";

interface NavigationHeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  canGoBack?: boolean;
  rightComponent?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  backButtonColor?: string;
  children?: ReactNode;
  borderBottom?: boolean;
  style?: ViewStyle;
  includeSafeArea?: boolean;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title = "",
  showBackButton = true,
  onBackPress,
  canGoBack = true,
  rightComponent,
  backgroundColor,
  textColor = "text-white",
  backButtonColor,
  children,
  borderBottom = true,
  style,
  includeSafeArea = true,
}) => {
  const insets = useSafeAreaInsets();
  const { user, selectedUserType } = useStore();
  const role = user?.role || selectedUserType;

  const defaultBgColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;
  const defaultTextColor = "text-white";
  const finalBgColor = backgroundColor ?? defaultBgColor;
  const finalTextColor = textColor ?? defaultTextColor;
  const finalBackButtonColor = backButtonColor ?? defaultTextColor;

  const headerContainerStyle = StyleSheet.create({
    base: {
      height: 56 + (includeSafeArea ? insets.top : 0),
      paddingTop: includeSafeArea ? insets.top : 0,
      backgroundColor: finalBgColor,
    },
  });

  return (
    <View
      className={[
        "px-4 flex-row items-center justify-between",
        borderBottom ? "border-b border-gray-200" : "",
      ].join(" ")}
      pointerEvents="box-none"
      style={[headerContainerStyle.base, style]}
    >
      <View className="flex-row items-center flex-1">
        {showBackButton && canGoBack && (
          <TouchableOpacity
            onPress={onBackPress || router.back}
            className="mr-3 p-1"
          >
            <MaterialSymbol
              name="arrow_back"
              size={24}
              color={finalBackButtonColor}
            />
          </TouchableOpacity>
        )}
        <Text
          className={`text-lg font-semibold flex-1 ${finalTextColor}`}
          numberOfLines={1}
        >
          {title}
        </Text>
        {children}
      </View>
      {rightComponent && <View className="ml-2">{rightComponent}</View>}
    </View>
  );
};
