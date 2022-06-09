import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddHotelForm from '../../../components/AddHotel/AddHotelForm';

const AddHotel = () => {
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);
  return (
    <section>
      <div className="text-center my-5">
        <h1>Add Hotel</h1>
      </div>

      <AddHotelForm />
    </section>
  );
};

export default AddHotel;
