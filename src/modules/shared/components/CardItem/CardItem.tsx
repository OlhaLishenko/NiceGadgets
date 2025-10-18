import React, { useRef } from 'react';
import './CardItem.scss';
import type { Product } from '../../types/Product';
import { CircleButton } from '../CircleButton';
import IconLike from '../../../../global-assets/icons/icon-like.svg?react';
import IconLikeFill from '../../../../global-assets/icons/icon-like-fill.svg?react';
import type { IconComponent } from '../../types/IconComponent';
import { Link } from 'react-router-dom';
import { BtnAdd } from '../BtnAdd';
import { BtnLike } from '../BtnLike';
import { ProductPrice } from '../ProductPrice';
import { PropertyTable } from '../PropertyTable';

type CardItemProps = {
  product: Product;
};

export const CardItem: React.FC<CardItemProps> = ({ product }) => {
  const { image, name, price, screen, capacity, ram, fullPrice } = product;

  const productProperties = [
    { name: 'screen', value: screen },
    { name: 'capacity', value: capacity },
    { name: 'ram', value: ram },
  ];

  return (
    <Link
      className="product-card"
      to={`${product.itemId}`}
      state={{
        productPrice: {
          price: product.price,
          fullPrice: product.fullPrice,
        },
      }}
      id={product.itemId}
    >
      <div className="product-card__container">
        <div className="product-card__image-wrapper">
          <img src={`/${image}`} className="product-card__image" />
        </div>
        <p className="product-card__title">{name}</p>
        <ProductPrice price={price} fullPrice={fullPrice} textStyle="small" />

        <hr className="product-card__separator" />

        <PropertyTable properties={productProperties} textStyle="small" />

        <div className="product-card__btns">
          <BtnAdd productId={product.itemId} />
          <BtnLike buttonSize="small" productId={product.itemId} />
        </div>
      </div>
    </Link>
  );
};
