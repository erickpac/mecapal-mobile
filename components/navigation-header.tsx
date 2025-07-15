import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
}

/**
 * Renders a navigation header with a title, optional back button, and right component.
 *
 * @param {NavigationHeaderProps} props - The props for the NavigationHeader component.
 * @param {string} [props.title] - The title to display in the header.
 * @param {boolean} [props.showBackButton=true] - Whether to show the back button.
 * @param {function} [props.onBackPress] - Callback function for back button press.
 * @param {boolean} [props.canGoBack=true] - Whether the navigation can go back.
 * @param {ReactNode} [props.rightComponent] - Optional component to display on the right side of the header.
 * @param {string} [props.backgroundColor] - Background color of the header.
 * @param {string} [props.textColor="text-white"] - Text color of the title.
 * @param {string} [props.backButtonColor="text-white"] - Color of the back button icon.
 * @param {ReactNode} [props.children] - Additional components to render in the header.
 * @param {boolean} [props.borderBottom=true] - Whether to show a bottom border on the header.
 *
 * @returns {JSX.Element} The rendered navigation header component.
 */
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
}) => {
  const insets = useSafeAreaInsets();
  const { user, selectedUserType } = useStore();
  const role = user?.role ?? selectedUserType;
  const defaultBgColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;
  const defaultTextColor = "text-white";
  const finalBgColor = backgroundColor ?? defaultBgColor;
  const finalTextColor = textColor ?? defaultTextColor;
  const finalBackButtonColor = backButtonColor ?? defaultTextColor;
  const headerHeight = 56 + insets.top;
  const paddingTop = insets.top;

  return (
    <View
      className={[
        "flex-row items-center justify-between px-4",
        borderBottom ? "border-b border-gray-200" : "",
      ].join(" ")}
      pointerEvents="box-none"
      style={{
        height: headerHeight,
        paddingTop,
        backgroundColor: finalBgColor,
      }}
    >
      <View className="flex-1 flex-row items-center">
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
          className={`flex-1 text-lg font-semibold ${finalTextColor}`}
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
