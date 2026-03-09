import { ImageSourcePropType } from 'react-native';

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceData {
  id: string;
  title: string;
  image: ImageSourcePropType;
  listDescription: string;
  detailDescription: string;
  specs: ServiceSpec[];
  considerations: string[];
  example: string;
}

export const SERVICES: ServiceData[] = [
  {
    id: 'express',
    title: 'Envíos Express',
    image: require('../../../assets/images/home/motorcycle.png'),
    listDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore mque.',
    detailDescription:
      'Este tipo de envíos es ideal si deseas enviar paquetes y sobres pequeños en un radio de distancia de 1–10km de donde te encuentras. Toma en cuenta lo siguiente para decidirte por este envío.',
    specs: [
      { label: 'Peso máximo del paquete', value: '20 Lbs.' },
      { label: 'Tamaño máximo del paquete', value: '30×30cm' },
      { label: 'Tipo de vehículo', value: 'Moto' },
    ],
    considerations: [
      'Pueden ser paquetes frágiles pero deben ir empacados correctamente.',
      'El paquete no irá a la interperie.',
      'No se necesita descarga logística compleja.',
    ],
    example:
      'Quieres enviar un paquete de 15×15 cm a un cliente, pesa 3 libras, no es frágil, está bien empaquetado y es de fácil entrega.',
  },
  {
    id: 'light',
    title: 'Carga Liviana',
    image: require('../../../assets/images/home/mid-truck.png'),
    listDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore mque.',
    detailDescription:
      'Este tipo de envíos es ideal si deseas enviar paquetes y sobres pequeños en un radio de distancia de 1–10km de donde te encuentras. Toma en cuenta lo siguiente para decidirte por este envío.',
    specs: [
      { label: 'Peso máximo', value: '1 tonelada (2,200 Lbs)' },
      { label: 'Tamaño máximo', value: '30×30cm' },
      { label: 'Tipo de vehículo', value: 'Pickup, camión pequeño y mediano' },
    ],
    considerations: [
      'Pueden ser artículos frágiles pero deben ir empacados correctamente.',
      'El paquete podría ir a la interperie.',
      'Es posible que se necesite servicio de carga y descarga adicional.',
    ],
    example:
      'Quieres transportar cajas medianas, costales, un par de muebles, o artículos grandes sin importar el radio de donde te encuentres.',
  },
  {
    id: 'heavy',
    title: 'Carga Pesada',
    image: require('../../../assets/images/home/big-truck.png'),
    listDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore mque.',
    detailDescription:
      'Este tipo de envíos es ideal si deseas enviar paquetes y sobres pequeños en un radio de distancia de 1–10km de donde te encuentras. Toma en cuenta lo siguiente para decidirte por este envío.',
    specs: [
      { label: 'Peso máximo', value: '5 Toneladas en adelante' },
      { label: 'Tamaño máximo', value: 'Depende' },
      { label: 'Tipo de vehículo', value: 'Camión' },
    ],
    considerations: [
      'Pueden ser artículos frágiles pero deben ir empacados correctamente.',
      'Los artículos no irán a la interperie.',
      'Es posible que se necesite servicio de carga y descarga adicional.',
    ],
    example:
      'Quieres transportar muchas cajas de diferentes tamaños, te estás mudando, muebles o artículos grandes sin importar el radio de donde te encuentres.',
  },
];
