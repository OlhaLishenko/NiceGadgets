import { Outlet } from 'react-router';
import './App.scss';
import type React from 'react';
import { icons } from '../../../global-assets/static';
import { TopBar } from '../TopBar';
import { Footer } from '../Footer';
import { NavAside } from '../NavAside';
import { ProductListProvider } from '../../shared/context/ProductListContext';
// import { CartProvider } from '../../shared/context/CartContext';
import { FavesProvider } from '../../shared/context/FavesContext';
import { GlobalNotifProvider } from '../../shared/reduce/NotificationReduce';
import { GlobalCartListProvider } from '../../shared/reduce/CartReducer';

export const App: React.FC = () => {
  return (
    <ProductListProvider>
      <FavesProvider>
        <GlobalCartListProvider>
          <GlobalNotifProvider>
            <div className="app">
              <div className="app-content">
                <NavAside />
                <div className="app__content-top">
                  <TopBar buttonData={icons.menu} />
                  <Outlet />
                </div>
              </div>
              <Footer />
            </div>
          </GlobalNotifProvider>
        </GlobalCartListProvider>
      </FavesProvider>
    </ProductListProvider>
  );
};
