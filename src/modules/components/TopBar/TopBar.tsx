import './TopBar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../global-assets/logo.svg';
import type { IconListItem } from '../../shared/types/IconList';

type TopBarProps = {
  buttonData: IconListItem;
};

export const TopBar: React.FC<TopBarProps> = ({ buttonData }) => {
  // const { setAsidePage } = useContext(ProductListContext);
  const location = useLocation();
  const navigate = useNavigate();
  const IconSvg = buttonData.valuePath;

  const handleClose = () => {
    navigate(-1);
    // setAsidePage(false);
  };

  return (
    <div className="top-bar">
      <div className="top-bar__logo">
        <img src={logo} alt="Compamy logo" />
      </div>
      <div className="top-bar__nav">
        {buttonData.valueName === 'menu' ? (
          <Link
            to="./navigation"
            state={{
              prevPage: location.pathname === '/' ? '/home' : location.pathname,
            }}
            className="top-bar__button"
            // onClick={() => setAsidePage(true)}
          >
            <IconSvg className="top-bar__button--icon" />
          </Link>
        ) : (
          <button onClick={handleClose} className="top-bar__button">
            <IconSvg className="top-bar__button--icon" />
          </button>
        )}
      </div>
    </div>
  );
};
