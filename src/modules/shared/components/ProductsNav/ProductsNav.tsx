import React, { useEffect } from 'react';
import './ProductsNav.scss';
import { icons } from '../../../../global-assets/static';
import { NavLink, useLocation } from 'react-router-dom';

type ProductsNavProps = {};

export const ProductsNav: React.FC<ProductsNavProps> = ({}) => {
  const IconHome = icons.home.valuePath;
  const IconArrow = icons.arrowRight.valuePath;
  const location = useLocation();
  const pageNames = location.pathname.toString().slice(1);

  const getPath = () => {
    const pathSequence: string[] = pageNames.split('/');
    return pathSequence.map((path: string) =>
      path
        .split('-')
        .map(part => part[0].toUpperCase() + part.slice(1))
        .join(' '),
    );
  };

  const pathSequence = getPath();

  return (
    <div className="products-nav">
      <div className="products-nav__wrapper">
        <button className="products-nav__icon">
          <IconHome />
        </button>
        {pathSequence.map(path => (
          <div className="products-nav__wrapper" key={path}>
            <IconArrow className="products-nav__icon products-nav__icon--arrow" />
            <NavLink
              to={`/${path.toLowerCase()}`}
              className="products-nav__text"
            >
              <p>{path}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
