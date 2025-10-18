import React from 'react';
import './ProductTechSpecs.scss';
import { TitleProperties } from '../../../../shared/components/TitleProperties';
import { PropertyTable } from '../../../../shared/components/PropertyTable';

type ProductTechSpecsProps = {
  properties: {
    name: string;
    value: string | string[] | null;
  }[];
};

export const ProductTechSpecs: React.FC<ProductTechSpecsProps> = ({
  properties,
}) => {
  return (
    <div className="product-tech-specs">
      <TitleProperties text={'Tech specs'} />
      <PropertyTable properties={properties} textStyle={'medium'} />
    </div>
  );
};
