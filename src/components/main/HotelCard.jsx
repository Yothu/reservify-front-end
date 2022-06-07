import React from 'react';
import PropTypes from 'prop-types';
import style from './HotelCard.module.css';

const HotelCard = ({ image, name, description }) => (
  <div className={style.card}>
    <img src={image} alt="hotel-icon" />
    <div className={style['card-details']}>
      <h4>{name}</h4>
      <h5>{description}</h5>
    </div>
  </div>
);

HotelCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HotelCard;
