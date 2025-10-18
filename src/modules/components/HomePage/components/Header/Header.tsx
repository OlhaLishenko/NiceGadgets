import { TopBar } from '../../../TopBar';
import './Header.scss';
import { Slider } from '../../../../shared/components/Slider';
import { images } from '../../../../../global-assets/static';
import { icons } from '../../../../../global-assets/static';

export const Header: React.FC = () => {
  return (
    <header className="header header__main">
      {/* <TopBar buttonData={icons.menu} /> */}
      <div className="header__content">
        <h1 className="header__content-title">
          Welcome to Nice <br />
          Gadgets store!
        </h1>
        <Slider content={images} />
      </div>
    </header>
  );
};
