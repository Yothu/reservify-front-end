import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import SidebarData from './SidebarData';
import style from './Sidebar.module.css';
import logo from '../../assets/images/logo.png';
import authService from '../../redux/auth/auth-services';
import { reset } from '../../redux/auth/auth-slice';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { pathname } = window.location;
  const burgerColor = pathname === '/' ? '#FFF' : '#000';

  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(authService.logout);
    dispatch(reset());
  };

  const isLoggedIn = localStorage.getItem('USER') || false;
  const data = JSON.parse(localStorage.getItem('USER'));
  let isAdmin = false;
  if (data) {
    isAdmin = data.user.role === 'admin';
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#FBBC05' }}>
        <IconContext.Provider value={{ color: burgerColor }}>
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

            {isAdmin && (
              <>
                {' '}
                <li className={style.navText}>
                  <Link to="/add_hotel">
                    <AiIcons.AiFillFileAdd />
                    <span>Add Hotel</span>
                  </Link>
                </li>
                <li className={style.navText}>
                  <Link to="/delete_hotel">
                    <AiIcons.AiFillDelete />
                    <span>Delete Hotel</span>
                  </Link>
                </li>
              </>
            )}
            {
              // prettier-ignore
              !isAdmin && isLoggedIn && SidebarData.map((item) => (
                <li key={item.title} className={style.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))
            }

            {isLoggedIn ? (
              <li className={style.navText}>
                <Link to="/" onClick={userLogout}>
                  <RiIcons.RiLogoutBoxLine />
                  <span>Logout</span>
                </Link>
              </li>
            ) : (
              <>
                <li className={style.navText}>
                  <Link to="/signup">
                    <AiIcons.AiOutlineLogin />
                    <span>Signup</span>
                  </Link>
                </li>

                <li className={style.navText}>
                  <Link to="/login">
                    <RiIcons.RiLoginBoxLine />
                    <span>Login</span>
                  </Link>
                </li>
              </>
            )}
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
