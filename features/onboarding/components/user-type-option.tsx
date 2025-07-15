import { UserRole } from "@/features/auth/types/user";
import { Text, TouchableOpacity, View } from "react-native";

interface UserTypeOptionProps {
  userType: UserRole;
  title: string;
  description: string;
  icon: React.ReactNode;
  isPressed: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
  onPress: () => void;
}

export const UserTypeOption = ({
  userType,
  title,
  description,
  icon,
  isPressed,
  onPressIn,
  onPressOut,
  onPress,
}: UserTypeOptionProps) => {
  const getBorderColor = () => {
    if (!isPressed) return "border-gray-200";

    return userType === UserRole.USER
      ? "border-primary-500"
      : "border-secondary-500";
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      className={`h-45 flex justify-center rounded-2xl border-2 bg-white p-6 shadow-sm ${getBorderColor()}`}
      activeOpacity={1}
    >
      <View className="items-center">
        <View className="mb-4 aspect-[123/87] w-32">{icon}</View>
        <Text className="mb-2 font-plus-jakarta-semibold text-xl text-text-active">
          {title}
        </Text>
        <Text className="font-plus-jakarta-regular text-center text-sm text-text-idle">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
