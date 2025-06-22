import React from "react";
import { ActivityIndicator, View } from "react-native";

interface LoadingScreenProps {
  size?: "small" | "large";
  color?: string;
  backgroundColor?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  size = "large",
  color = "#0000ff",
  backgroundColor = "bg-white",
}) => {
  return (
    <View className={`flex-1 items-center justify-center ${backgroundColor}`}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
