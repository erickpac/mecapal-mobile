import { ImageSourcePropType } from 'react-native';

export interface ServiceData {
  id: string;
  image: ImageSourcePropType;
}

export const SERVICES: ServiceData[] = [
  {
    id: 'express',
    image: require('../../../assets/images/home/motorcycle.png'),
  },
  {
    id: 'light',
    image: require('../../../assets/images/home/mid-truck.png'),
  },
  {
    id: 'heavy',
    image: require('../../../assets/images/home/big-truck.png'),
  },
];
