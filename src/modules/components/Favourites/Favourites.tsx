import React, { useContext } from 'react';
import './Favourites.scss';
import { MainHeader } from '../../shared/components/MainHeader';
import { FavesContext } from '../../shared/context/FavesContext';
import { ProductListContext } from '../../shared/context/ProductListContext';
import { CardItem } from '../../shared/components/CardItem';
import { getCartList } from '../../shared/servises/getCartList';

type FavouritesProps = {};

export const Favourites: React.FC<FavouritesProps> = ({}) => {
  const { favourites } = useContext(FavesContext);
  const { productList } = useContext(ProductListContext);

  const favouriteList = getCartList(favourites, productList);

  return (
    <div className="favourites">
      <div className="favourites__container">
        <MainHeader
          pageTitle={'Favourites'}
          productAmount={favourites.length}
        />
        <div className="favourites__productList">
          {favouriteList.map(product => (
            <CardItem product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
