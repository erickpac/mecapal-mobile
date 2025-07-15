import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";
import { COLORS } from "@/consts/colors";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  colorClassName?: string; // override for bg color (tailwind)
  textClassName?: string; // override for text color (tailwind)
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  buttonColor?: string;
  variant?: "contained" | "outlined" | "text";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
  buttonColor,
  variant = "contained",
}) => {
  const { user, selectedUserType } = useStore();
  const role = user?.role ?? selectedUserType;
  const defaultButtonColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;
  const finalButtonColor = buttonColor ?? defaultButtonColor;
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
      contentStyle={{ height: 42 }}
      labelStyle={{ fontSize: 14, fontWeight: "600" }}
      className={className}
    >
      {title}
    </PaperButton>
  );
};
