import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { UserRole } from "@/features/auth/types/user";

interface ActionLinkProps {
  title: string;
  className?: string;
  onPress?: () => void;
  userType?: UserRole;
}

const getUserTypeColorClass = (userType: UserRole | undefined) => {
  switch (userType) {
    case UserRole.USER:
      return "text-primary-500";
    case UserRole.TRANSPORTER:
      return "text-secondary-500";
    default:
      return "text-tertiary-500";
  }
};

const ActionLinkComponent = ({
  title,
  onPress,
  className = "",
  userType,
}: ActionLinkProps) => {
  const color = getUserTypeColorClass(userType);

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

export const ActionLink = memo(ActionLinkComponent);
