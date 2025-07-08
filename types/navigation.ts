import { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

export interface TabConfig {
  name: string;
  titleKey: string;
  icon: string; // Material Symbols icon name
}
