import React, { useContext, useEffect } from 'react';
import './Favourites.scss';
import { MainHeader } from '../../shared/components/MainHeader';
import { FavesContext } from '../../shared/context/FavesContext';
import { ProductListContext } from '../../shared/context/ProductListContext';
import type { Product } from '../../shared/types/Product';
import { CardItem } from '../../shared/components/CardItem';

type FavouritesProps = {};

export const Favourites: React.FC<FavouritesProps> = ({}) => {
  const { favourites } = useContext(FavesContext);
  const { productList } = useContext(ProductListContext);

  useEffect(() => {}, []);

  const favesList = () => {
    const favesList: Product[] = [];

    favourites.forEach(productId => {
      favesList.push(
        [...productList].filter(product => product.itemId === productId)[0],
      );
    });

    return favesList;
  };

  const favouriteList = favesList();

  return (
    <div className="favourites">
      <div className="container-column">
        <MainHeader pageTitle={'Favourites'} productAmount={0} />
        <div className="favourites__productList">
          {favouriteList.map(product => (
            <CardItem product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
