import {
  useEffect,
  // useState
} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/HotelDetails.scss';
import { toast } from 'react-toastify';
import Amenities from '../components/Amenities';
import hotelService from '../redux/hotels/hotel-services';
import Button from '../components/Ui/Button';
import reservationService from '../redux/reservations/reservation-services';

const HotelDetails = () => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();

  const { id } = useParams();
  const hotel = useSelector((state) => state.hotel.details);
  console.log(hotel);

  const amenitiesList = Object.entries(hotel).filter(([key, value]) => typeof value === 'boolean' && key);
  const amenities = Object.fromEntries(amenitiesList);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
    dispatch(hotelService.getOneHotel(id));
  }, []);

  const createReservation = async () => {
    await reservationService.createReservation({
      hotel_id: hotel.id,
      room_number: 5, // MODIFY THIS
    });

    if (reservationService.error) {
      toast.error(reservationService.error);
    }
    toast.success('Reservation created successfully!');
    console.log('hello');
  };

  return (
    <div className="details-container pt-5 d-sm-flex position-relative justify-content-between">
      <div className="d-flex flex-column align-items-center">
        {hotel && (
          <>
            <h2>
              Hotel:
              {hotel.name}
            </h2>
            <div className="hotel-thumbnail">
              <img
                src={hotel.image_url}
                alt="hotel thumbnail"
                width="75%"
                height="auto"
                className="hotel-image"
              />
            </div>
            <p>
              Price:
              {' $'}
              {hotel.room_price}
            </p>
          </>
        )}
      </div>
      <div className="hotel-details d-flex flex-column">
        <h5>Info</h5>
        <table className="table details-table">
          <tbody>
            <tr>
              <th scope="row">Address</th>
              <td>{hotel.address}</td>
            </tr>
            <tr>
              <th scope="row">City</th>
              <td>{hotel.city}</td>
            </tr>
            <tr>
              <th scope="row">Country</th>
              <td>{hotel.country}</td>
            </tr>
          </tbody>
        </table>

        <h5>Featured Amenities</h5>
        <Amenities amenities={amenities} />
        <div
          onClick={createReservation}
          role="presentation"
          aria-hidden="true"
        >
          <Button type="button" text="Reserve" cName="my-4" />
        </div>
      </div>
      <Link to="/main" className="back-hotels position-absolute pb-3">
        Back to Hotels
      </Link>
    </div>
  );
};

export default HotelDetails;
