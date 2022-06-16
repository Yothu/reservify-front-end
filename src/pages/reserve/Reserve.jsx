import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReserveForm from '../../components/Reserve/ReserveForm';
import style from './Reserve.module.css';

function Reserve() {
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);
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
