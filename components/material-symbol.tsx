import React from "react";
import { Text } from "react-native";

interface MaterialSymbolProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  variant?: "outlined" | "rounded" | "sharp";
}

export const MaterialSymbol = ({
  name,
  size = 24,
  color = "text-black",
  className = "",
  variant = "outlined",
}: MaterialSymbolProps) => {
  const fontFamilyMap = {
    outlined: "font-material-symbols-outlined",
    rounded: "font-material-symbols-rounded",
    sharp: "font-material-symbols-sharp",
  };

  const fontFamily = fontFamilyMap[variant];

  return (
    <Text
      className={`${fontFamily} ${color} ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </Text>
  );
};
