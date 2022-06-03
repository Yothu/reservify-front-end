// import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as HiIcon from 'react-icons/hi';
import * as FaIcon from 'react-icons/fa';
import style from './SplashScreen.module.css';
import mainHotel from '../../assets/images/hotel-menu.jpg';

const SplashScreen = () => {
  // const searchStyle = {
  //   padding: '0rem 0.5rem 0rem 1rem',
  // };

  const appTitle = 'Reservify!';
  // const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={style['page-container']}>
      <nav className="d-flex position-absolute">
        <hr />
      </nav>
      <div className={style['logout-menu']}>
        <nav className={style['top-bar-container']}>
          <div className={style['menu-icon-container']}>
            <IconContext.Provider value={{ color: 'white' }}>
              <HiIcon.HiMenuAlt4 size={40} />
            </IconContext.Provider>
          </div>
          <div className={style['search-bar']}>
            <IconContext.Provider value={{ color: '#ffb701' }}>
              <FaIcon.FaSearch size={20} />
            </IconContext.Provider>
          </div>
        </nav>
        {/* mx-2 my-4 position-relative text-center text-white */}

        <div className={style['splash-background-container']}>
          <img src={mainHotel} alt="hotel-background" className={style['hotel-background']} />
          <h1 className={style['app-name']}>{appTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

// import * as AS from 'react-icons/AS';

// AS.asdasd
