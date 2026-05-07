import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import {
  ExpressCargo,
  LightCargo,
  HeavyCargo,
  ExpressCargoWide,
  LightCargoWide,
  HeavyCargoWide,
} from '@/components/svg';

export interface ServiceData {
  id: string;
  icon: ComponentType<SvgProps>;
  wideIcon: ComponentType<SvgProps> & { aspectRatio: number };
}

export const SERVICES: ServiceData[] = [
  {
    id: 'express',
    icon: ExpressCargo,
    wideIcon: ExpressCargoWide,
  },
  {
    id: 'light',
    icon: LightCargo,
    wideIcon: LightCargoWide,
  },
  {
    id: 'heavy',
    icon: HeavyCargo,
    wideIcon: HeavyCargoWide,
  },
];
