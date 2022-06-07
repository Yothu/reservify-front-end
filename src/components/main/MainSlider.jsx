import { React, useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import HotelCard from './HotelCard';
import HotelsData from './HotelsData';
import style from './MainSlider.module.css';

const MainSlider = () => {
  const slider = useRef();
  const rightArrow = useRef();
  const leftArrow = useRef();

  return (
    <>
      <div className={style['slider-container']}>
        <div className={style.slider} ref={slider}>
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
      <div className={style.left_arrow} ref={leftArrow}>
        <BiLeftArrow />
      </div>
      <div className={style.right_arrow} ref={rightArrow}>
        <BiRightArrow />
      </div>
    </>
  );
};

export default MainSlider;
