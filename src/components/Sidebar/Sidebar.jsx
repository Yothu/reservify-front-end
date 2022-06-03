import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import { IconContext } from 'react-icons';
import style from './Sidebar.module.css';
import logo from '../../images/logo.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#FBBC05' }}>
        <div className={style.menu}>
          <FaIcons.FaBars onClick={showSidebar} />
        </div>

        <nav
          className={
            sidebar ? `${style.navMenu} ${style.active}` : `${style.navMenu}`
          }
        >
          <ul onClick={showSidebar}>
            <li className={style.navbarToggle}>
              <div className={style.menu}>
                <AiIcons.AiOutlineClose />
              </div>
            </li>

            <li>
              <Link to="/" className={style.menu}>
                <img src={logo} alt="logo" width={100} />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={style.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <IconContext.Provider value={{ color: '#98be0f' }}>
            <ul className={style.social}>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <FaIcons.FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_black">
                  <FaIcons.FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/" target="_black">
                  <FaIcons.FaPinterestP />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
          <p className="fw-light mt-3 text-center">
            &copy; 2022, RESERVIFY TEAM.
          </p>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
