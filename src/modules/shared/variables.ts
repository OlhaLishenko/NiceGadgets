import { Navlist } from './Enum/NavList';
import { getSequence } from './servises/createVar';

export const Btn_Title_Add = 'Add to cart';
export const Btn_Footer_Back = 'Back to top';

export const Btn_Nav_List = Object.values(Navlist);
export const Sort_Title = ['Sort by', 'Items on page'];
export const Sort_By = ['Newest', 'Alphabetically', 'Cheapest'];
export const Sort_By_Amount = ['4', '8', '16', 'all'];

export const pages = getSequence(4);

export const productsColorsHex = {
  black: '#000000',
  white: '#FFFFFF',
  green: '#28A745',
  yellow: '#FFD700',
  purple: '#800080',
  red: '#FF3B30',
  spacegray: '#4A4A4A',
  midnightgreen: '#004953',
  gold: '#FFD700',
  silver: '#C0C0C0',
  rosegold: '#B76E79',
  coral: '#FF7F50',
  midnight: '#191970',
  spaceblack: '#0B0B0B',
  blue: '#007AFF',
  pink: '#FFC0CB',
  graphite: '#383838',
  sierrablue: '#A6C8FF',
};
