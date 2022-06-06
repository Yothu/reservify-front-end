import React from 'react';
import style from './ReserveForm.module.css';
import Select from '../Ui/Select';

function ReserveForm() {
  const locations = ['Egypt', 'Spain', 'Germany'];
  const hotels = ['Hotel 1', 'Hotel 2', 'Hotel 3'];
  const locationOptions = locations.map((location) => (
    <option key={location} value={location}>
      {location}
    </option>
  ));

  const hotelOptions = hotels.map((hotel) => (
    <option key={hotel} value={hotel}>
      {hotel}
    </option>
  ));

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
