import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import * as AiIcon from 'react-icons/ai';
import * as FiIcon from 'react-icons/fi';
import style from './AuthButtons.module.css';

const AuthButtons = () => (
  <nav className={style['buttons-container']}>
    <IconContext.Provider value={{ color: 'white' }}>
      <NavLink to="/signup" className={style['link-button']}>
        <AiIcon.AiOutlineLogin size={24} />
        <span className={style['link-text']}>Sign Up</span>
        <AiIcon.AiOutlineRightCircle size={24} />
      </NavLink>
      <NavLink to="/login" className={style['link-button']}>
        <FiIcon.FiUserPlus size={24} />
        <span className={style['link-text']}>Log In</span>
        <AiIcon.AiOutlineRightCircle size={24} />
      </NavLink>
    </IconContext.Provider>
  </nav>
);

export default AuthButtons;
