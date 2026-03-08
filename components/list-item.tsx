import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from '@/components/material-icon';
import { COLORS } from '@/consts/colors';

interface ListItemProps {
  imageSource: ImageSourcePropType | undefined;
  title: string;
  description: string;
  onPress: () => void;
}

const ListItem = (props: ListItemProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className="flex flex-row items-center justify-between border-[#D6D6D6] py-4 first:border-b-0 first:border-t last:border-b last:border-t-0"
    >
      <View className="items-center py-2 pl-4">
        <Image
          source={props.imageSource}
          className="h-[75px] w-[75px]"
          resizeMode="cover"
        />
      </View>
      <View className="ml-4 h-[75px] flex-1">
        <Text className="font-plus-jakarta-bold text-lg font-bold text-gray-800">
          {props.title}
        </Text>
        <Text className="mt-1 pr-4 font-plus-jakarta-medium text-sm font-medium text-gray-500">
          {props.description}
        </Text>
      </View>
      <View className="items-center justify-center px-4">
        <MaterialIcon name="chevron-right" size={20} color={COLORS.gray} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
