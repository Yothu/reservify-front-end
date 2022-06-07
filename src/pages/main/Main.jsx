import React from 'react';
import MainSlider from '../../components/main/MainSlider';
import style from './Main.module.css';

function Main() {
  return (
    <section className={style.main}>
      <div className={style.content}>
        <h2>Most Reserved</h2>
        <p>Please Select Your Favourite Hotel</p>
        <MainSlider />
      </div>
    </section>
  );
}

export default Main;
