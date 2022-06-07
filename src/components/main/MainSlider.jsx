import React from 'react';
import HotelCard from './HotelCard';
import HotelsData from './HotelsData';
import style from './MainSlider.module.css';

const MainSlider = () => (
  <>
    <div className={style['slider-container']}>
      <div className={style.slider}>
        {HotelsData.map((hotel) => (
          <HotelCard
            key={hotel.id}
            image={hotel.image}
            name={hotel.name}
            description={hotel.description}
          />
        ))}
      </div>
    </div>
  </>
);

export default MainSlider;
