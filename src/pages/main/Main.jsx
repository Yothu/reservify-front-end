import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainSlider from '../../components/main/MainSlider';
import style from './Main.module.css';

function Main() {
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);

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
