import React, { useContext, useEffect } from 'react';
import './ProductList.scss';
import type { Product } from '../../../../shared/types/Product';
import { CardItem } from '../../../../shared/components/CardItem';
import { useLocation } from 'react-router-dom';
import { NotificationContext } from '../../../../shared/context/CartContext copy';
import { Notification } from '../../../../shared/components/Notification';

type ProductListProps = {
  products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const location = useLocation();
  const currentProduct = location.state?.productId;
  const { notification, setNotification } = useContext(NotificationContext);

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
      <Notification title="Product added to cart" />
      {products.map(product => (
        <CardItem product={product} key={product.id} />
      ))}
    </div>
  );
};
