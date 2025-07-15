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
 * Reusable Screen Header Component
 *
 * @example
 * // Basic usage
 * <ScreenHeader
 *   title="Acerca de Mecapal"
 *   subtitle="Conectamos usuarios con transportistas confiables"
 * />
 *
 * @example
 * // With icon
 * <ScreenHeader
 *   title="Mi Perfil"
 *   subtitle="Gestiona tu información personal"
 *   icon={{ name: "person", color: "text-blue-500" }}
 * />
 *
 * @example
 * // With custom styling
 * <ScreenHeader
 *   title="Mi Perfil"
 *   subtitle="Gestiona tu información personal"
 *   className="bg-blue-50"
 *   icon={{ name: "settings", color: "text-gray-600", variant: "rounded" }}
 * />
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
