import './TopBar.scss';
import logo from '../../../global-assets/logo.svg';
import type { IconListItem } from '../../shared/types/IconList';
import { useContext } from 'react';
import { ProductListContext } from '../../shared/context/ProductListContext';

type TopBarProps = {
  buttonData: IconListItem;
};

export const TopBar: React.FC<TopBarProps> = ({ buttonData }) => {
  const { setIsAside } = useContext(ProductListContext);
  // const location = useLocation();
  // const navigate = useNavigate();
  const IconSvg = buttonData.valuePath;

  const handleClose = () => {
    setIsAside(false);
  };

  return (
    <div className="top-bar">
      <div className="top-bar__logo">
        <img src={logo} alt="Compamy logo" />
      </div>
      <div className="top-bar__nav">
        {buttonData.valueName === 'menu' ? (
          <button
            // to="./navigation"
            // state={{
            //   prevPage: location.pathname === '/' ? '/home' : location.pathname,
            // }}
            className="top-bar__button"
            onClick={() => setIsAside(true)}
          >
            <IconSvg className="top-bar__button--icon" />
          </button>
        ) : (
          <button onClick={handleClose} className="top-bar__button">
            <IconSvg className="top-bar__button--icon" />
          </button>
        )}
      </div>
    </div>
  );
};
