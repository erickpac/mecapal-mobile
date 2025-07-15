import React from "react";
import { Text } from "react-native";

interface MaterialSymbolProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  variant?: "outlined" | "rounded" | "sharp";
}

/**
 * Renders a Material Design icon with specified properties.
 *
 * @param {MaterialSymbolProps} props - The props for the MaterialSymbol component.
 * @param {string} props.name - The name of the Material Design icon to display.
 * @param {number} [props.size=24] - The size of the icon (default is 24).
 * @param {string} [props.color="text-black"] - The color of the icon (default is "text-black").
 * @param {string} [props.className=""] - Additional class names for custom styling.
 * @param {"outlined" | "rounded" | "sharp"} [props.variant="outlined"] - The variant style of the icon (default is "outlined").
 *
 * @returns {JSX.Element} The rendered Material Design icon component.
 */
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
