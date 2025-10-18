import React from 'react';
import './ProductAbout.scss';
import { TitleProperties } from '../../../../shared/components/TitleProperties';

type ProductAboutProps = {
  productDescription: {
    title: string;
    text: string[];
  }[];
};

export const ProductAbout: React.FC<ProductAboutProps> = ({
  productDescription,
}) => {
  return (
    <div className="product-about">
      <TitleProperties text={'About'} />
      {productDescription.map(item => (
        <article className="product-about__content">
          <h4 className="product-about__content-title">{item.title}</h4>
          <p className="product-about__content-text">{item.text}</p>
        </article>
      ))}
    </div>
  );
};
