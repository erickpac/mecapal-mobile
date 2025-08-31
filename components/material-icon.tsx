import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import { StyleProp, TextStyle } from "react-native";

interface MaterialIconProps {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const MaterialIcon = ({
  name,
  size = 24,
  color = "#000000",
  style,
  onPress,
  ...props
}: MaterialIconProps) => {
  return (
    <MaterialDesignIcons
      className={color}
      // @ts-ignore
      name={name}
      size={size}
      color={color}
      style={style}
      onPress={onPress}
      {...props}
    />
  );
};

export default MaterialIcon;
