import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

export interface TabConfig {
  name: string;
  titleKey: string;
  icon: IconName;
  title?: string;
  route?: string;
}
