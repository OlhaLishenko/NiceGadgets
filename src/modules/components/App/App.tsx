import { Outlet } from 'react-router';
import './App.scss';
import type React from 'react';
import { icons } from '../../../global-assets/static';
import { TopBar } from '../TopBar';
import { Footer } from '../Footer';
import { NavAside } from '../NavAside';
import { ProductListProvider } from '../../shared/context/ProductListContext';
import { CartProvider } from '../../shared/context/CartContext';
import { FavesProvider } from '../../shared/context/FavesContext';

export const App: React.FC = () => {
  return (
    <ProductListProvider>
      <CartProvider>
        <FavesProvider>
          <div className="app">
            <div className="app__content">
              <NavAside />
              <div className="app__content-wrapper-top">
                <TopBar buttonData={icons.menu} />
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
        </FavesProvider>
      </CartProvider>
    </ProductListProvider>
  );
};
