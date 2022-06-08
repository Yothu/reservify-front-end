import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hotels = ({ hotels }) => (
  <div className="text-center">
    <h2>Hotels</h2>

    <ul>
      {hotels && hotels.map((hotel) => (
        <li key={hotel.id}>
          <Link to={hotel.id}>
            {hotel.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(Object).isRequired,
};

export default Hotels;
