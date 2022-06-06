import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const HotelDetails = (props) => {
  const { id } = useParams();
  const { hotels } = props;
  const [hotel, setHotel] = useState(false);

  useEffect(() => {
    setHotel(hotels.filter((hotel) => hotel.id === id)[0]);
  }, []);

  return (
    <div className="text-center">
      {hotel && (
      <h2>
        Hotel:
        {hotel.name}
      </h2>
      )}

      <Link to="/hotels">Back to Hotels</Link>
    </div>
  );
};

HotelDetails.propTypes = {
  hotels: PropTypes.arrayOf(Object).isRequired,
};

export default HotelDetails;
