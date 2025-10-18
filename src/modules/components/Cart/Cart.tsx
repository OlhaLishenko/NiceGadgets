import React from 'react';
import './Cart.scss';
import { SectionTitle } from '../../shared/components/SectionTitle/SectionTitle';
import { BackButton } from '../../shared/components/BackButton';

type CartProps = {};

export const Cart: React.FC<CartProps> = ({}) => {
  return (
    <div className="cart">
      <div className="cart-content container-column">
        <div className="card-content__header header">
          <BackButton />
          <SectionTitle text={'Cart'} />
        </div>
        <div className="cart-content card-content__product-list"></div>
        <div className="card-content__total-price">
          <div className="card-content__total-price-sum"></div>
          <div className="card-content__total-price-product-amount"></div>
          <div className="card-content__total-price-btn-confirm"></div>
        </div>
      </div>
    </div>
  );
};
