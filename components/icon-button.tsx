import React from "react";
import { TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import { MaterialSymbol } from "@/components/material-symbol";

interface IconButtonProps {
  icon: string;
  color?: string;
  size?: number;
  onPress?: () => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  backgroundColor?: string;
}

export const IconButton = ({
  icon,
  color = "#18181B",
  size = 24,
  onPress,
  className = "",
  style,
  disabled = false,
  backgroundColor,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={className}
      activeOpacity={0.6}
      style={[
        backgroundColor
          ? {
              backgroundColor,
              borderRadius: size,
              width: size * 1.5,
              height: size * 1.5,
              alignItems: "center",
              justifyContent: "center",
            }
          : {},
        style,
      ]}
    >
      <MaterialSymbol name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};
