import React from 'react';
import './Footer.scss';
import logo from '../../../global-assets/logo.svg';
import { CircleButton } from '../../shared/components/CircleButton';
import { Btn_Footer_Back } from '../../shared/variables';
import { icons } from '../../../global-assets/static';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = React.memo(({}) => {
  console.log('is footer render');

  const f_navItems = ['Github', 'Contacts', 'rights'];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <img src={logo} alt="Compamy logo" />
        </div>
        <nav className="footer__nav">
          <ul className="footer__list">
            {f_navItems.map(navItem => (
              <li key={navItem}>{navItem.toUpperCase()}</li>
            ))}
          </ul>
        </nav>

        <label className="footer__btn">
          <CircleButton icon={icons.arrowUp.valuePath} />
          {Btn_Footer_Back}
        </label>
      </div>
    </footer>
  );
});
