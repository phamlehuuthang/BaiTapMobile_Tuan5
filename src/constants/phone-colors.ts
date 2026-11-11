export type PhoneColorKey = 'silver' | 'red' | 'black' | 'blue';

export type PhoneColorOption = {
  id: PhoneColorKey;
  name: string;
  colorCode: string;
  provider: string;
  price: string;
  image: any;
};

export const PHONE_COLORS: Record<PhoneColorKey, PhoneColorOption> = {
  silver: {
    id: 'silver',
    name: 'Trắng xám',
    colorCode: '#D7DEE4',
    provider: 'Sony Center VN',
    price: '1.290.000 đ',
    image: require('@/assets/images/hp-white.png'),
  },
  red: {
    id: 'red',
    name: 'Đỏ đô',
    colorCode: '#D2232A',
    provider: 'Sony Center VN',
    price: '1.290.000 đ',
    image: require('@/assets/images/hp-red.png'),
  },
  black: {
    id: 'black',
    name: 'Đen nhám',
    colorCode: '#23262A',
    provider: 'Sony Center VN',
    price: '1.290.000 đ',
    image: require('@/assets/images/hp-black.png'),
  },
  blue: {
    id: 'blue',
    name: 'Xanh dương',
    colorCode: '#234896',
    provider: 'Sony Center VN',
    price: '1.290.000 đ',
    image: require('@/assets/images/hp-blue.png'),
  },
};

export const COLOR_OPTIONS: PhoneColorOption[] = [
  PHONE_COLORS.silver,
  PHONE_COLORS.red,
  PHONE_COLORS.black,
  PHONE_COLORS.blue,
];
