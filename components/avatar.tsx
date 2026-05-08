import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/consts/colors';

type Props = {
  uri?: string | null;
  showEditButton?: boolean;
  size?: number;
  sizeEditButton?: number;
  onPress?: () => void;
  loading?: boolean;
  className?: string;
};

const Avatar = (props: Props) => {
  return (
    <View className="relative">
      <View
        className={
          'h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 ' +
          props.className
        }
      >
        {props.uri ? (
          <Image
            source={{ uri: props.uri }}
            className="h-full w-full"
            resizeMode="cover"
          />
        ) : (
          <MaterialCommunityIcons
            name="account"
            size={props.size || 48}
            color={COLORS.darkGray[400]}
          />
        )}
        {props.loading && (
          <View className="absolute inset-0 items-center justify-center bg-black/30">
            <ActivityIndicator color={COLORS.white} />
          </View>
        )}
      </View>
      {props.showEditButton && (
        <TouchableOpacity
          className="absolute bottom-0 right-0 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 shadow-md"
          onPress={props.onPress}
          disabled={props.loading}
        >
          <MaterialCommunityIcons
            name="pencil"
            size={props.sizeEditButton || 20}
            color={COLORS.darkGray[400]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Avatar;
