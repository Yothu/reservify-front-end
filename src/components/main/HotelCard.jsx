import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import style from './HotelCard.module.css';

const HotelCard = ({ image, name, description }) => (
  <div className={style.card}>
    <img src={image} alt="hotel-icon" />
    <div className={style['card-details']}>
      <h4>{name}</h4>
      <h5>{description}</h5>
    </div>
    <IconContext.Provider value={{ color: '#d3d3d3' }}>
      <ul>
        <li>
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <FaIcons.FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" rel="noreferrer" target="_blank">
            <FaIcons.FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" rel="noreferrer" target="_blank">
            <FaIcons.FaPinterestP />
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  </div>
);

HotelCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HotelCard;
