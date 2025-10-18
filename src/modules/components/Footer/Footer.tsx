import React from 'react';
import './Footer.scss';
import logo from '../../../global-assets/logo.svg';
import { CircleButton } from '../../shared/components/CircleButton';
import { Btn_Footer_Back } from '../../shared/variables';
import type { IconComponent } from '../../shared/types/IconComponent';
import { icons } from '../../../global-assets/static';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  const f_navItems = ['Github', 'Contacts', 'rights'];

  const footerIconComponent: IconComponent = {
    iconMain: icons.arrowUp.valuePath,
    iconSelected: null,
  };

  return (
    <footer className="footer container-column">
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
          <CircleButton icons={footerIconComponent} />
          {Btn_Footer_Back}
        </label>
      </div>
    </footer>
  );
};
