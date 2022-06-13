import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hotels = ({ hotels }) => {
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, []);
  return (
    <div className="text-center">
      <h2>Hotels</h2>

      <ul>
        {hotels
          && hotels.map((hotel) => (
            <li key={hotel.id}>
              <Link to={hotel.id}>{hotel.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(Object).isRequired,
};

export default Hotels;
