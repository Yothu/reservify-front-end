import React from 'react';
import Select from './../Ui/Select';
import style from './ReserveForm.module.css';

function ReserveForm() {
  const locations = ['Egypt', 'Spain', 'Germany'];
  const hotels = ['Hotel 1', 'Hotel 2', 'Hotel 3'];
  const locationOptions = locations.map((location, index) => {
    return (
      <option key={index} value={location}>
        {location}
      </option>
    );
  });

  const hotelOptions = hotels.map((hotel, index) => {
    return (
      <option key={index} value={hotel}>
        {hotel}
      </option>
    );
  });

  return (
    <form>
      <Select>{locationOptions}</Select>
      <Select>{hotelOptions}</Select>

      <button type="submit" className={style.bookBtn}>
        Book Now
      </button>
    </form>
  );
}

export default ReserveForm;
