import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { UserRole } from "@/features/auth/types/user";
import { COLORS } from "@/consts/colors";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  colorClassName?: string;
  textClassName?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  buttonColor?: string;
  variant?: "contained" | "outlined" | "text";
  userType?: UserRole;
}

const getButtonColor = (userType: UserRole) => {
  switch (userType) {
    case UserRole.TRANSPORTER:
      return COLORS.secondary;
    default:
      return COLORS.primary;
  }
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
  buttonColor,
  variant = "contained",
  userType = UserRole.USER,
}) => {
  const finalButtonColor = buttonColor ?? getButtonColor(userType);
  const isContained = variant === "contained";
  const textColor = isContained ? "#fff" : finalButtonColor;

  return (
    <PaperButton
      mode={variant}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      buttonColor={isContained ? finalButtonColor : "transparent"}
      textColor={textColor}
      style={
        fullWidth
          ? {
              width: "100%",
              borderRadius: 8,
              borderWidth: variant === "outlined" ? 1 : 0,
              borderColor:
                variant === "outlined" ? finalButtonColor : "transparent",
            }
          : {
              borderRadius: 8,
              borderWidth: variant === "outlined" ? 1 : 0,
              borderColor:
                variant === "outlined" ? finalButtonColor : "transparent",
            }
      }
      contentStyle={{ height: variant === "outlined" ? 42 : 44 }}
      labelStyle={{ fontSize: 14, fontWeight: "600" }}
      className={className}
    >
      {title}
    </PaperButton>
  );
};
