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
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
  buttonColor,
}) => {
  const { user, selectedUserType } = useStore();
  const role = user?.role ?? selectedUserType;
  const defaultButtonColor =
    role === UserRole.TRANSPORTER ? COLORS.secondary : COLORS.primary;
  const finalButtonColor = buttonColor ?? defaultButtonColor;
  const textColor = "#fff";

  return (
    <PaperButton
      mode="contained"
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      buttonColor={finalButtonColor}
      textColor={textColor}
      style={
        fullWidth ? { width: "100%", borderRadius: 8 } : { borderRadius: 8 }
      }
      contentStyle={{ height: 42 }}
      labelStyle={{ fontSize: 14, fontWeight: "600" }}
      className={className}
    >
      {title}
    </PaperButton>
  );
};
