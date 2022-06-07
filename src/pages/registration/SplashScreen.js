import style from './SplashScreen.module.css';
import TopMenu from '../../components/SplashScreen/TopMenu/TopMenu';
import MainImage from '../../components/SplashScreen/MainImage/MainImage';
import AuthButtons from '../../components/SplashScreen/AuthButtons/AuthButtons';

const SplashScreen = () => (
  <section className={style['page-container']}>
    <div className={style['logout-menu']}>
      <TopMenu />
      <MainImage />
      <AuthButtons />
    </div>
  </section>
);

export default SplashScreen;
