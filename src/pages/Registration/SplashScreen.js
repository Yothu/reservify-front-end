import style from './SplashScreen.module.css';
import TopMenu from '../../components/SplashScreen/TopMenu/TopMenu';
import MainImage from '../../components/SplashScreen/MainImage/MainImage';
import AuthButtons from '../../components/SplashScreen/AuthButtons/AuthButtons';

const SplashScreen = () => (
  <div className={style['page-container']}>
    <div className={style['logout-menu']}>
      <TopMenu />
      <MainImage />
      <AuthButtons />
    </div>
  </div>
);

export default SplashScreen;
