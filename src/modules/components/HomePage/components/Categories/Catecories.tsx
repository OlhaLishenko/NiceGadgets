import React from 'react';
import './Catecories.scss';
import { SectionTitle } from '../../../../shared/components/SectionTitle/SectionTitle';
import { imageCategories } from '../../../../../global-assets/static';
import { CategoryItem } from '../CategoryItem';

type CategoriesProps = {};

export const Categories: React.FC<CategoriesProps> = ({}) => {
  return (
    <section className="categories container-column">
      <div className="categories__wrapper">
        <SectionTitle text={'Shop by category'} />
        <div className="categories__content">
          {imageCategories.map(category => (
            <CategoryItem category={category} key={category.src} />
          ))}
        </div>
      </div>
    </section>
  );
};
