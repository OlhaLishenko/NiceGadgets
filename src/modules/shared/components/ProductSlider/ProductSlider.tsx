import { ProductList } from '../../../components/HomePage/components/ProductList';
import { SliderButtons } from '../SliderButtons';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './ProductSlider.scss';
import type { SliderData } from '../../types/SliderData';
import { useRef } from 'react';

type ProductSliderProps = {
  content: SliderData;
};

export const ProductSlider: React.FC<ProductSliderProps> = ({ content }) => {
  const sliderRef = useRef<HTMLElement>(null);

  return (
    <section className="product-slider" ref={sliderRef}>
      <div className="product-slider__top container-column">
        <div className="product-slider__top__wrapper">
          <SectionTitle text={content.title} />
          <SliderButtons itemAmount={content.data.length} />
        </div>
      </div>
      <ProductList productList={content.data} />
    </section>
  );
};
