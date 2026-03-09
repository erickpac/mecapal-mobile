import { View, Text } from 'react-native';
import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: {
    name: IconName;
    color?: string;
    size?: number;
  };
}

export const ScreenHeader = ({
  title,
  subtitle,
  className = '',
  icon,
}: ScreenHeaderProps) => {
  return (
    <View className={`border-b border-gray-200 bg-white p-4 ${className}`}>
      <View className="flex-row items-center space-x-3">
        {icon && (
          <MaterialCommunityIcons
            name={icon.name}
            size={icon.size || 28}
            color={icon.color || COLORS.textActiveGray[500]}
          />
        )}
        <View className="flex-1">
          <Text className="text-2xl font-bold text-gray-800">{title}</Text>
          {subtitle && <Text className="mt-1 text-gray-600">{subtitle}</Text>}
        </View>
      </View>
    </View>
  );
};
