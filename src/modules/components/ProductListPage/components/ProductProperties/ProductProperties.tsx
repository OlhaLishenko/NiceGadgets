import React from 'react';
import './ProductProperties.scss';
import type { ProductDetails } from '../../../../shared/types/ProductDetails';
import { SelectSection } from '../../../../shared/components/SelectSection';
import type { ProductPriceType } from '../../../../shared/types/ProductPriceType';
import { ProductPrice } from '../../../../shared/components/ProductPrice';
import { BtnAdd } from '../../../../shared/components/BtnAdd';
import { BtnLike } from '../../../../shared/components/BtnLike';
import { PropertyTable } from '../../../../shared/components/PropertyTable';

type ProductPropertiesProps = {
  product: ProductDetails & ProductPriceType;
};

export const ProductProperties: React.FC<ProductPropertiesProps> = ({
  product,
}) => {
  const productProperties = [
    { name: 'screen', value: product.screen },
    { name: 'resolution', value: product.resolution },
    { name: 'processor', value: product.processor },
    { name: 'ram', value: product.ram },
  ];

  return (
    <div className="product-properties">
      <div className="product-properties__btn-selection">
        <SelectSection
          content={{
            product: product,
            title: 'Avalible colors',
            options: product.colorsAvailable,
            currentOption: product.color,
            btnStyle: 'round',
            optionType: 'color',
          }}
        />
        <SelectSection
          content={{
            product: product,
            title: 'Select capacity',
            options: product.capacityAvailable,
            currentOption: product.capacity,
            btnStyle: 'regular',
            optionType: 'capacity',
          }}
        />
      </div>
      <div className="product-properties__price-section">
        <ProductPrice
          price={product.price}
          fullPrice={product.fullPrice}
          textStyle="medium"
        />
        <div className="product-properties__price-section__btn-add">
          <BtnAdd />
          <BtnLike buttonSize="medium" productId={product.id} />
        </div>
      </div>
      <div className="product-properties__info">
        <PropertyTable properties={productProperties} />
      </div>
    </div>
  );
};
