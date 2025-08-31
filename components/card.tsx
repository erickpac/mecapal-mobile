import { View, Text, Pressable } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

interface Props {
  title: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const Card = ({ title, icon, onPress }: Props) => {
  return (
    <Button onPress={onPress}>
      <View className="flex h-28 w-32 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white px-2">
        <View>{icon}</View>
        <Text
          className="w-14 text-center font-plus-jakarta text-xs font-medium leading-tight"
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>
    </Button>
  );
};

export default Card;
