import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import {
  ExpressShipping,
  LightCargo,
  HeavyCargo,
} from '@/components/svg';

export interface ServiceData {
  id: string;
  icon: ComponentType<SvgProps>;
}

export const SERVICES: ServiceData[] = [
  {
    id: 'express',
    icon: ExpressShipping,
  },
  {
    id: 'light',
    icon: LightCargo,
  },
  {
    id: 'heavy',
    icon: HeavyCargo,
  },
];
