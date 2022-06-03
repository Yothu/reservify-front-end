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
        <Link to="#" className={style.menu}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <nav
          className={
            sidebar ? `${style.navMenu} ${style.active}` : `${style.navMenu}`
          }
        >
          <ul onClick={showSidebar}>
            <li className={style.navbarToggle}>
              <Link to="/" className={style.menu}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li>
              <Link to="/" className={style.menu}>
                <img src={logo} alt="logo" width={150} />
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

          <p className="fw-light mt-3 text-center">
            &copy; 2022, RESERVIFY TEAM.
          </p>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
