import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';

interface ListItemProps {
  imageSource: ImageSourcePropType | undefined;
  title: string;
  description: string;
  linkText?: string;
  onPress: () => void;
}

const ListItem = ({
  imageSource,
  title,
  description,
  linkText,
  onPress,
}: ListItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between border-b py-4"
      style={{ borderColor: COLORS.lightGray[500] }}
    >
      <View className="items-center py-2 pl-4">
        <Image
          source={imageSource}
          className="h-[75px] w-[75px]"
          resizeMode="cover"
        />
      </View>
      <View className="ml-4 flex-1">
        <Text className="font-plus-jakarta-bold text-lg text-gray-800">
          {title}
        </Text>
        <Text className="mt-1 pr-4 font-plus-jakarta text-sm text-gray-500">
          {description}{' '}
          {linkText && (
            <Text style={{ color: COLORS.primary }}>{linkText}</Text>
          )}
        </Text>
      </View>
      <View className="items-center justify-center px-4">
        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={COLORS.lightGray[700]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
