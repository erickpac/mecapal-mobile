import { View, Text } from "react-native";
import { MaterialSymbol } from "./material-symbol";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: {
    name: string;
    color?: string;
    size?: number;
    variant?: "outlined" | "rounded" | "sharp";
  };
}

/**
 * Renders a screen header with an optional icon, title, and subtitle.
 *
 * @param {ScreenHeaderProps} props - The props for the ScreenHeader component.
 * @param {string} props.title - The main title to display in the header.
 * @param {string} [props.subtitle] - An optional subtitle to display below the title.
 * @param {string} [props.className] - Additional class names for custom styling.
 * @param {Object} [props.icon] - Optional icon configuration to display alongside the title.
 * @param {string} props.icon.name - The name of the icon to display.
 * @param {string} [props.icon.color] - The color of the icon (defaults to "text-gray-600").
 * @param {number} [props.icon.size] - The size of the icon (defaults to 28).
 * @param {"outlined" | "rounded" | "sharp"} [props.icon.variant] - The variant style of the icon (defaults to "outlined").
 *
 * @returns {JSX.Element} The rendered screen header component.
 */
export const ScreenHeader = ({
  title,
  subtitle,
  className = "",
  icon,
}: ScreenHeaderProps) => {
  return (
    <View className={`border-b border-gray-200 bg-white p-4 ${className}`}>
      <View className="flex-row items-center space-x-3">
        {icon && (
          <MaterialSymbol
            name={icon.name}
            size={icon.size || 28}
            color={icon.color || "text-gray-600"}
            variant={icon.variant || "outlined"}
          />
        )}
        <View className="flex-1">
          <Text className="text-2xl font-bold text-gray-800">{title}</Text>
          {subtitle && <Text className="mt-1 text-gray-600">{subtitle}</Text>}
        </View>
      </View>
    </View>
  );
};
