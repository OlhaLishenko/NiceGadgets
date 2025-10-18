import { Outlet } from 'react-router';
import './App.scss';
import type React from 'react';
import { icons } from '../../../global-assets/static';
import { TopBar } from '../TopBar';
import { Footer } from '../Footer';
import { motion } from 'framer-motion';

export const App: React.FC = () => {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      <div className="app">
        <div className="app__content">
          <div className="app__content-wrapper-top">
            <TopBar buttonData={icons.menu} />
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};
