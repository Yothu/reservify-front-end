import React from 'react';
import ReserveForm from './../../components/Reserve/ReserveForm';
import style from './Reserve.module.css';

function Reserve() {
  return (
    <section className={style.banner}>
      <h2 className={style.title}>Book A Hotel</h2>
      <p>Reserve a hotel description</p>
      <div>
        <ReserveForm />
      </div>
    </section>
  );
}

export default Reserve;
