import { IconContext } from 'react-icons';
import * as FaIcon from 'react-icons/fa';
import style from './TopMenu.module.css';

const TopMenu = () => (
  <nav className={style['top-bar-container']}>
    <div className={style['search-bar']}>
      <IconContext.Provider value={{ color: '#ffb701' }}>
        <FaIcon.FaSearch size={20} />
      </IconContext.Provider>
    </div>
  </nav>
);

export default TopMenu;
