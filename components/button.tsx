import React, { memo } from "react";
import { GestureResponderEvent } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { UserRole } from "@/features/auth/types/user";
import { COLORS } from "@/consts/colors";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  buttonColor?: string;
  variant?: "contained" | "outlined" | "text";
  userType?: UserRole;
  [key: string]: any; // for ...props
}

const getButtonColor = (userType: UserRole) => {
  switch (userType) {
    case UserRole.TRANSPORTER:
      return COLORS.secondary;
    default:
      return COLORS.primary;
  }
};

const baseButtonStyle = { borderRadius: 8 };

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
  buttonColor,
  variant = "contained",
  userType = UserRole.USER,
  ...props
}) => {
  const finalButtonColor = buttonColor ?? getButtonColor(userType);
  const isContained = variant === "contained";
  const textColor = isContained ? "#FFF" : finalButtonColor;

  return (
    <PaperButton
      mode={variant}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      buttonColor={isContained ? finalButtonColor : "transparent"}
      textColor={textColor}
      rippleColor={variant === "text" ? "transparent" : undefined}
      style={
        fullWidth
          ? {
            width: "100%",
            ...baseButtonStyle,
            borderWidth: variant === "outlined" ? 1 : 0,
            borderColor:
              variant === "outlined" ? finalButtonColor : "transparent",
          }
          : {
            ...baseButtonStyle,
            borderWidth: variant === "outlined" ? 1 : 0,
            borderColor:
              variant === "outlined" ? finalButtonColor : "transparent",
          }
      }
      contentStyle={{ height: variant === "outlined" ? 42 : 44 }}
      labelStyle={{ fontSize: 14, fontWeight: "600" }}
      className={className}
      {...props}
    >
      {title}
    </PaperButton>
  );
};

export const Button = memo(ButtonComponent);
