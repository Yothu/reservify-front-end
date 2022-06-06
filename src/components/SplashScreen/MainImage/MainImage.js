import style from './MainImage.module.css';
import mainHotel from '../../../assets/images/room-1.jpg';

const MainImage = () => {
  const appTitle = 'Reservify!';

  return (
    <div className={style['outer-hotel-container']}>
      <div className={style['splash-background-container']}>
        <img src={mainHotel} alt="hotel-background" className={style['hotel-background']} />
        <h1 className={style['app-name']}>{appTitle}</h1>
      </div>
    </div>
  );
};

export default MainImage;
