import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";
import { useStore } from "@/store/useStore";
import { UserRole } from "@/features/auth/types/user";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  colorClassName?: string; // override for bg color
  textClassName?: string; // override for text color
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  colorClassName,
  textClassName,
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
}) => {
  const { user, selectedUserType } = useStore();
  const role = user?.role || selectedUserType;

  // Default colors based on role
  let bg = "bg-primary-500";
  let text = "text-white";
  if (role === UserRole.TRANSPORTER) {
    bg = "bg-secondary-500";
    text = "text-white";
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`rounded-lg py-4 px-8 items-center justify-center shadow-md ${
        fullWidth ? "w-full" : ""
      } ${colorClassName || bg} ${disabled ? "opacity-50" : ""} ${className}`}
      activeOpacity={0.85}
    >
      {loading ? (
        <ActivityIndicator color={textClassName ? undefined : "#fff"} />
      ) : (
        <Text className={`text-lg font-semibold ${textClassName || text}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
