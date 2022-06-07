import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import SidebarData from './SidebarData';
import style from './Sidebar.module.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#FBBC05' }}>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className={style.menu}>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </IconContext.Provider>
        <nav
          className={
            sidebar ? `${style.navMenu} ${style.active}` : `${style.navMenu}`
          }
        >
          <ul role="presentation" onClick={showSidebar}>
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

            {SidebarData.map((item) => (
              <li key={item.title} className={style.navText}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <IconContext.Provider value={{ color: '#98be0f' }}>
            <ul className={style.social}>
              <li>
                <a
                  href="https://www.facebook.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaIcons.FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" rel="noreferrer" target="_blank">
                  <FaIcons.FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/"
                  rel="noreferrer"
                  target="_blank"
                >
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
