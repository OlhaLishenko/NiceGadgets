import React from 'react';
import './MainHeader.scss';
import { ProductsNav } from '../ProductsNav';
import { SectionTitle } from '../SectionTitle/SectionTitle';

type MainHeaderProps = {
  pageTitle: string;
  productAmount: number;
};

export const MainHeader: React.FC<MainHeaderProps> = ({
  pageTitle,
  productAmount,
}) => {
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <div className="main-header__top">
          <ProductsNav />
          <SectionTitle text={pageTitle} />
        </div>
        <span className="main-header__count">{productAmount} models</span>
      </div>
    </header>
  );
};
