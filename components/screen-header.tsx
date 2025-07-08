import { View, Text } from "react-native";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
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
 * // With custom styling
 * <ScreenHeader
 *   title="Mi Perfil"
 *   subtitle="Gestiona tu información personal"
 *   className="bg-blue-50"
 * />
 */
const ScreenHeader = ({
  title,
  subtitle,
  className = "",
}: ScreenHeaderProps) => {
  return (
    <View className={`bg-white p-4 border-b border-gray-200 ${className}`}>
      <Text className="text-2xl font-bold text-gray-800">{title}</Text>
      {subtitle && <Text className="text-gray-600 mt-1">{subtitle}</Text>}
    </View>
  );
};

export default ScreenHeader;
