import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/HotelDetails.scss';

const HotelDetails = (props) => {
  const { id } = useParams();
  const { hotels } = props;
  const [hotel, setHotel] = useState(false);

  useEffect(() => {
    setHotel(hotels.filter((hotel) => hotel.id === id)[0]);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      {hotel && (
      <h2>
        Hotel:
        {hotel.name}
      </h2>
      )}
      <img src={hotel.image_url} alt="hotel thumbnail" width="50%" height="50%" className="hotel-thumbnail" />
      <Link to="/hotels">Back to Hotels</Link>
    </div>
  );
};

HotelDetails.propTypes = {
  hotels: PropTypes.arrayOf(Object).isRequired,
};

export default HotelDetails;
