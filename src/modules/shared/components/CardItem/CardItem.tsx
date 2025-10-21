import React from 'react';
import './CardItem.scss';
import type { Product } from '../../types/Product';
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
    <div className="product-card">
      <Link
        className="product-card__image-wrapper"
        to={`${product.itemId}`}
        state={{
          productPrice: {
            price: product.price,
            fullPrice: product.fullPrice,
          },
        }}
        id={product.itemId}
      >
        <img src={`/${image}`} className="product-card__image" />
      </Link>
      <div className="product-card__container-info">
        <Link
          className="product-card__title"
          to={`${product.itemId}`}
          state={{
            productPrice: {
              price: product.price,
              fullPrice: product.fullPrice,
            },
          }}
          id={product.itemId}
        >
          <p className="product-card__title">{name}</p>
        </Link>
        <ProductPrice price={price} fullPrice={fullPrice} textStyle="small" />

        <hr className="product-card__separator" />

        <PropertyTable properties={productProperties} textStyle="small" />

        <div className="product-card__btns">
          <BtnAdd productId={product.itemId} />
          <BtnLike buttonSize="small" productId={product.itemId} />
        </div>
      </div>
    </div>
  );
};
