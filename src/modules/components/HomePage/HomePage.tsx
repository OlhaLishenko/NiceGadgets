import { Footer } from '../Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};
