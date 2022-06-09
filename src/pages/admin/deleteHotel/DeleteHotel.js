import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteHotelList from '../../../components/DeleteHotel/DeleteHotelList';

const DeleteHotel = () => {
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);
  return (
    <section className="h-100 d-flex flex-column align-items-center">
      <div className="text-center my-5">
        <h1>Delete Hotel</h1>
      </div>

      <DeleteHotelList />
    </section>
  );
};

export default DeleteHotel;
