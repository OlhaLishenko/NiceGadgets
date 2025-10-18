import React, { useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavAside.scss';
import { TopBar } from '../TopBar';
import { icons } from '../../../global-assets/static';
import { Btn_Nav_List } from '../../shared/variables';
import classNames from 'classnames';
import { Navlist } from '../../shared/Enum/NavList';
import { ProductListContext } from '../../shared/context/ProductListContext';

type NavAsideProps = {};

export const NavAside: React.FC<NavAsideProps> = ({}) => {
  const { isAside, setIsAside } = useContext(ProductListContext);
  const location = useLocation();
  // const prevPage: string = location.state?.prevPage;

  const IconLike = icons.like.valuePath;
  const IconCart = icons.cart.valuePath;

  const getPath = (button: Partial<Navlist>) => {
    switch (button) {
      case Navlist.PHONES:
      case Navlist.TABLETS:
      case Navlist.ACCESSORIES:
        return `/${button.toLowerCase()}`;
      default:
        return '/';
    }
  };

  useEffect(() => {
    setIsAside(false);
  }, [location]);

  return (
    <div
      className={classNames('nav-aside', {
        'nav-aside--active': isAside,
      })}
    >
      <div className="nav-aside__top">
        <TopBar buttonData={icons.close} />
        <nav className="nav-aside__nav container-column">
          <ul className="nav-aside__list">
            {Btn_Nav_List.map(listItem => (
              <li key={listItem}>
                <NavLink
                  to={getPath(listItem)}
                  className={({ isActive }) =>
                    classNames('nav-aside__link', {
                      'nav-aside__link--active': isActive,
                    })
                  }
                >
                  {listItem.toUpperCase()}
                  <br />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="nav-aside__bottom">
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            classNames('nav-aside__bottom--button', {
              'nav-aside__bottom--button-is-active': isActive,
            })
          }
        >
          <IconLike />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            classNames('nav-aside__bottom--button', {
              'nav-aside__bottom--button-is-active': isActive,
            })
          }
        >
          <IconCart />
        </NavLink>
      </div>
    </div>
  );
};
