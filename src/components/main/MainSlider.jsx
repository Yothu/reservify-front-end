import { React, useRef, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import HotelCard from './HotelCard';
import HotelsData from './HotelsData';
import style from './MainSlider.module.css';

const MainSlider = () => {
  const slider = useRef();
  const rightArrow = useRef();
  const leftArrow = useRef();
  const [counter, setCounter] = useState(0);
  const size = 340;

  const nextHandler = () => {
    if (counter === HotelsData.length - 1) return;
    slider.current.style.transition = 'transform 0.8s ease-in-out';
    const c = counter + 1;
    slider.current.style.transform = `translateX(${-size * c}px)`;
    setCounter(c);
  };

  const prevHandler = () => {
    if (counter === 0) return;
    const c = counter - 1;
    slider.current.style.transform = `translateX(${-size * c}px)`;
    setCounter(c);
  };

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
      <div
        className={style.left_arrow}
        ref={leftArrow}
        onClick={prevHandler}
        aria-hidden="true"
      >
        <BiLeftArrow />
      </div>
      <div
        className={style.right_arrow}
        ref={rightArrow}
        onClick={nextHandler}
        aria-hidden="true"
      >
        <BiRightArrow />
      </div>
    </>
  );
};

export default MainSlider;
