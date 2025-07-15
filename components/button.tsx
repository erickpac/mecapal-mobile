import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { useStore } from "@/store/useStore";
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
}

/**
 * A customizable button component that supports different styles and loading states.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @param {string} props.title - The text to display on the button.
 * @param {function} props.onPress - The function to call when the button is pressed.
 * @param {boolean} [props.loading=false] - Whether the button is in a loading state.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {boolean} [props.fullWidth=true] - Whether the button should take full width.
 * @param {string} [props.className] - Additional class names for custom styling.
 * @param {string} [props.buttonColor] - Optional color for the button background.
 * @param {"contained" | "outlined" | "text"} [props.variant="contained"] - The variant style of the button.
 *
 * @returns {JSX.Element} The rendered button component.
 */
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
      contentStyle={{ height: variant === "outlined" ? 42 : 44 }}
      labelStyle={{ fontSize: 14, fontWeight: "600" }}
      className={className}
    >
      {title}
    </PaperButton>
  );
};
