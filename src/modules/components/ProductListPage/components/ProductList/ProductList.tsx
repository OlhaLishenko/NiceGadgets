import React, { useContext, useEffect } from 'react';
import './ProductList.scss';
import type { Product } from '../../../../shared/types/Product';
import { CardItem } from '../../../../shared/components/CardItem';
import { useLocation } from 'react-router-dom';
import { Notification } from '../../../../shared/components/Notification';
import { StateContext } from '../../../../shared/reduce/NotificationReduce';

type ProductListProps = {
  products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const location = useLocation();
  const currentProduct = location.state?.productId;
  const state = useContext(StateContext);

  console.log(currentProduct);

  useEffect(() => {
    if (currentProduct) {
      const foundEl = document.getElementById(currentProduct);

      foundEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      return;
    }
  }, [location]);

  return (
    <div className="products-list">
      <Notification title={state.title} />
      {products.map(product => (
        <CardItem product={product} key={product.id} />
      ))}
    </div>
  );
};
