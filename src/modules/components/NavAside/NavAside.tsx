import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './NavAside.scss';
import { TopBar } from '../TopBar';
import { icons } from '../../../global-assets/static';
import { Btn_Nav_List } from '../../shared/variables';
import classNames from 'classnames';
import { Navlist } from '../../shared/Enum/NavList';
import { motion } from 'framer-motion';

type NavAsideProps = {};

export const NavAside: React.FC<NavAsideProps> = ({}) => {
  const location = useLocation();
  const prevPage: string = location.state?.prevPage;

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

  return (
    <>
      <motion.aside
        className="nav-aside"
        initial={{ x: '-100%' }}
        animate={{ x: '0' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="nav-aside__top">
          <TopBar buttonData={icons.close} />
          <nav className="nav-aside__nav container-column">
            <ul className="nav-aside__list">
              {Btn_Nav_List.map(listItem => (
                <li key={listItem}>
                  <Link
                    to={getPath(listItem)}
                    className={classNames('nav-aside__link', {
                      'nav-aside__link--active':
                        `/${listItem.toLowerCase()}` === `${prevPage}`,
                    })}
                  >
                    {listItem.toUpperCase()}
                    <br />
                    {/* {`${listItem.toLowerCase()} === prevPage => ${prevPage}`} */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="nav-aside__bottom">
          <Link
            to="../favourites"
            className={classNames('nav-aside__bottom--button', {
              'nav-aside__bottom--button-is-active':
                `/favourites` === `${prevPage}`,
            })}
          >
            <IconLike />
          </Link>
          <Link
            to="../cart"
            className={classNames('nav-aside__bottom--button', {
              'nav-aside__bottom--button-is-active': `/cart` === `${prevPage}`,
            })}
          >
            <IconCart />
          </Link>
        </div>
      </motion.aside>
    </>
  );
};
