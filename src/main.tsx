import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import { Root } from './Root.tsx';
import { HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Root />
    </Router>
  </StrictMode>,
);
