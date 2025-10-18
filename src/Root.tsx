import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { App } from './modules/components/App';
import { HomePage } from './modules/components/HomePage';
import { ProductListPage } from './modules/components/ProductListPage';
import { NavAside } from './modules/components/NavAside';
import { AppContent } from './modules/components/AppContent';
import { AnimatePresence } from 'framer-motion';
import { ProductItem } from './modules/components/ProductListPage/components/ProductItem';
import { Favourites } from './modules/components/Favourites';
import { Cart } from './modules/components/Cart';

export const Root = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppContent />}>
          <Route path="navigation" element={<NavAside />} />
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path=":category" element={<ProductListPage />} />
            <Route path=":category/:productId" element={<ProductItem />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
        <Route path="*" element={<span>Nothig was found</span>} />
      </Routes>
    </AnimatePresence>
  );
};
