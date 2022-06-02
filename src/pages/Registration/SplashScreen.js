// import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as HiIcon from 'react-icons/hi';
import * as FaIcon from 'react-icons/fa';
import style from './SplashScreen.module.css';

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
      <div className={`${style['logout-menu']} d-flex flex-column`}>
        <div className="d-flex justify-content-between m-1">
          <div className="menu-icon-container">
            <IconContext.Provider value={{ color: 'white' }}>
              <HiIcon.HiMenuAlt4 size={40} />
            </IconContext.Provider>
          </div>
          <div className={style['search-bar']}>
            <IconContext.Provider value={{ color: '#ffb701' }}>
              <FaIcon.FaSearch size={20} />
            </IconContext.Provider>
          </div>
        </div>

        <div className="mx-2 my-4 position-relative text-center text-white">
          <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/21/91/1a/75/exterior.jpg" alt="" />
          <p className="position-absolute start-50 translate-middle fw-bolder font-30px font-sm-45px w-100 past-upper-text">2013</p>
          <p className="position-absolute start-50 top-50 translate-middle fw-bold font-15px font-sm-22px w-100 past-bottom-text">Expo Software in Challenger Deep</p>
        </div>
        <h1>{appTitle}</h1>
      </div>
    </div>
  );
};

export default SplashScreen;

// import * as AS from 'react-icons/AS';

// AS.asdasd
