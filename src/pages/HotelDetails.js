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
    <div className="details-container pt-5 d-sm-flex position-relative">
      <div className="d-flex flex-column align-items-center">
        {hotel && (
          <>
            <h2>
              Hotel:
              {hotel.name}
            </h2>
            <div className="hotel-thumbnail">
              <img src={hotel.image_url} alt="hotel thumbnail" width="75%" height="auto" className="hotel-image" />
            </div>
          </>
        )}
      </div>
      <div className="hotel-details d-flex flex-column">
        <h3>Name</h3>
        <table className="table details-table">
          <tbody>
            <tr>
              <th scope="row">Address</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">City</th>
              <td>Thor</td>
            </tr>
            <tr>
              <th scope="row">Country</th>
              <td>Sam</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Featured Amenities</h3>
        <table className="table amenities-table">
          <tbody>
            <tr>
              <td>Jacob</td>
              <td>Thor</td>
              <td>Sam</td>
              <td>Sam</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thor</td>
              <td>Thor</td>
              <td>Sam</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/hotels" className="back-hotels position-absolute pb-3">Back to Hotels</Link>
    </div>
  );
};

HotelDetails.propTypes = {
  hotels: PropTypes.arrayOf(Object).isRequired,
};

export default HotelDetails;
