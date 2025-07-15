import React from "react";
import { ActivityIndicator, View } from "react-native";

interface LoadingScreenProps {
  size?: "small" | "large";
  color?: string;
  backgroundColor?: string;
}

/**
 * A simple loading screen component that displays a spinner in the center of the screen.
 *
 * @param {LoadingScreenProps} props - The props for the LoadingScreen component.
 * @param {string} [props.size="large"] - The size of the loading indicator (default is "large").
 * @param {string} [props.color="#0000ff"] - The color of the loading indicator (default is blue).
 * @param {string} [props.backgroundColor="bg-white"] - The background color of the loading screen (default is white).
 *
 * @returns {JSX.Element} A centered loading indicator within a full-screen view.
 */
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
