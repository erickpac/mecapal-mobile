import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { UserRole } from "@/features/auth/types/user";
import { useStore } from "@/store/useStore";

interface ActionLinkProps {
  title: string;
  className?: string;
  onPress?: () => void;
}

export const ActionLink = ({
  title,
  onPress,
  className = "",
}: ActionLinkProps) => {
  const { selectedUserType } = useStore();
  const color =
    selectedUserType === UserRole.USER
      ? "text-primary-500"
      : "text-secondary-500";

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text
        className={`font-plus-jakarta-regular underline ${color} ${className}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
