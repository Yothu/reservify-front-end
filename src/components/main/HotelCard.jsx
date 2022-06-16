import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './HotelCard.module.css';

const HotelCard = (props) => {
  // prettier-ignore
  const {
    id,
    name,
    description,
    image,
  } = props;

  return (
    <div className={style.card}>
      <Link to={`/hotels/${id}`}>
        <img src={image} alt="hotel-icon" />
      </Link>
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
    </div>
  );
};

HotelCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HotelCard;
