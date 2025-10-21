import type { Product } from '../types/Product';

export const calculateTotalSum = (productList: Product[]) => {
  const prices: number[] = productList.map(i => i.price);
  return prices.reduce((sum, num) => sum + num, 0);
};
