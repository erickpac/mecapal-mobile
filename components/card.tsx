import { Pressable, View, Text } from 'react-native';
import React from 'react';

interface Props {
  title: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  className?: string;
}

const Card = ({ title, icon, onPress, className = '' }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: 'rgba(0,0,0,0.08)', borderless: false }}
      className={`flex-1 ${className}`}
    >
      <View className="h-28 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white px-2">
        <View>{icon}</View>
        <Text
          className="text-center font-plus-jakarta text-xs font-medium leading-tight"
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Card;
