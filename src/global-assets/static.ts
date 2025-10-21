// import iconStroke from './icons/icon-stroke.svg';
// import iconStrokeDark from './icons/icon-stroke.svg';
import logoCompany from './logo.svg';

import MenuIcon from './icons/icon-menu.svg?react';
import IconClose from './icons/icon-close.svg?react';
import likeIcon from './icons/icon-like.svg?react';
import likeIconFill from './icons/icon-like-fill.svg?react';
import ArrowUpIcon from './icons/icon-arrow-up.svg?react';
import ArrowDownIcon from './icons/icon-arrow-down.svg?react';
import ArrowRightIcon from './icons/icon-arrow-right.svg?react';
import ArrowLeftIcon from './icons/icon-arrow-left.svg?react';
import HomeIcon from './icons/icon-home.svg?react';
import CartIcon from './icons/icon-shopping-bag.svg?react';
import PlusIcon from './icons/icon-plus.svg?react';
import MinusIcon from './icons/icon-minus.svg?react';

import primaryImage from './/images/banner-primary-image.png';
import accessoriesImage from './images/banner-accessories.png';
import phonesImage from './images/banner-phones.png';
import tabletsImage from './images/banner-tablets.png';
import phones from './images/category-phones.webp';
import accessories from './images/category-accessories.png';
import tablets from './images/category-tablets.png';
import cartIsEmpty from './images/cart-is-empty.png';

import type { ImageData } from '../modules/shared/types/Image';
import type { Category } from '../modules/shared/types/Category';
import type { IconList } from '../modules/shared/types/IconList';

export const icons: IconList = {
  menu: { valuePath: MenuIcon, valueName: 'menu' },
  like: { valuePath: likeIcon, valueName: 'like' },
  likeFill: { valuePath: likeIconFill, valueName: 'likeFill' },
  arrowUp: { valuePath: ArrowUpIcon, valueName: 'arrowUp' },
  arrowDown: { valuePath: ArrowDownIcon, valueName: 'arrowDown' },
  arrowRight: { valuePath: ArrowRightIcon, valueName: 'arrowRight' },
  arrowLeft: { valuePath: ArrowLeftIcon, valueName: 'arrowLeft' },
  home: { valuePath: HomeIcon, valueName: 'home' },
  close: { valuePath: IconClose, valueName: 'close' },
  cart: { valuePath: CartIcon, valueName: 'cart' },
  plus: { valuePath: PlusIcon, valueName: 'plus' },
  minus: { valuePath: MinusIcon, valueName: 'minus' },
};

export const images: ImageData[] = [
  {
    src: primaryImage,
    alt: 'Banner',
  },
  {
    src: accessoriesImage,
    alt: 'Banner',
  },
  {
    src: phonesImage,
    alt: 'Banner',
  },
  {
    src: tabletsImage,
    alt: 'Banner',
  },
];

export const imageCategories: Category[] = [
  {
    src: phones,
    title: 'Mobile phones',
    info: '95 models',
  },
  {
    src: tablets,
    title: 'Tablets',
    info: '24 models',
  },
  {
    src: accessories,
    title: 'Accessories',
    info: '100 models',
  },
];

// export const iconsGlobal = {
//   iconStroke: iconStroke,
//   iconStrokeDark: iconStrokeDark,
// };

export const logo: string = logoCompany;
