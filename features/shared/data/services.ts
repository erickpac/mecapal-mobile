import { ImageSourcePropType } from 'react-native';
import { IMAGES } from '@/consts/images';

export interface ServiceData {
  id: string;
  icon: ImageSourcePropType;
  wideIcon: ImageSourcePropType;
  wideAspectRatio: number;
}

const WIDE_ASPECT_RATIO = 678 / 290;

export const SERVICES: ServiceData[] = [
  {
    id: 'express',
    icon: IMAGES.vehicles.expressCargo,
    wideIcon: IMAGES.vehicles.expressCargoWide,
    wideAspectRatio: WIDE_ASPECT_RATIO,
  },
  {
    id: 'light',
    icon: IMAGES.vehicles.lightCargo,
    wideIcon: IMAGES.vehicles.lightCargoWide,
    wideAspectRatio: WIDE_ASPECT_RATIO,
  },
  {
    id: 'heavy',
    icon: IMAGES.vehicles.heavyCargo,
    wideIcon: IMAGES.vehicles.heavyCargoWide,
    wideAspectRatio: WIDE_ASPECT_RATIO,
  },
];
