import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';

type Props = {
  uri?: string;
  showEditButton?: boolean;
  size?: number;
  sizeEditButton?: number;
  onPress?: () => void;
  className?: string;
};

const Avatar = (props: Props) => {
  return (
    <View className="relative">
      <View
        className={
          'h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gray-100 ' +
          props.className
        }
      >
        <MaterialCommunityIcons
          name="account"
          size={props.size || 48}
          color={COLORS.textActiveGray[400]}
        />
      </View>
      <TouchableOpacity
        className="absolute bottom-0 right-0 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 shadow-md"
        onPress={props.onPress}
      >
        <MaterialCommunityIcons
          name="pencil"
          size={props.sizeEditButton || 20}
          color={COLORS.textActiveGray[400]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
