import {
  useEffect,
  // useState
} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/HotelDetails.scss';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
import * as AiIcon from 'react-icons/ai';
import * as RiIcon from 'react-icons/ri';
import { BiLeftArrow } from 'react-icons/bi';
import Amenities from '../components/Amenities';
import hotelService from '../redux/hotels/hotel-services';
import reservationService from '../redux/reservations/reservation-services';
import style from '../components/SplashScreen/AuthButtons/AuthButtons.module.css';

const HotelDetails = () => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('USER') || false;
  const navigate = useNavigate();

  const { id } = useParams();
  const hotel = useSelector((state) => state.hotel.details);

  // prettier-ignore
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
      room_number: 30,
    });

    if (reservationService.error) {
      toast.error(reservationService.error);
    }
    toast.success('Reservation created successfully!');
  };

  return (
    <div className="details-container pt-5 d-sm-flex position-relative justify-content-between">
      <div className="d-flex flex-column align-items-center">
        {hotel && (
          <>
            <div className="hotel-thumbnail">
              <img
                src={hotel.image_url}
                alt="hotel thumbnail"
                width="75%"
                height="auto"
                className="hotel-image"
              />
            </div>
          </>
        )}
      </div>
      <div className="hotel-details d-flex flex-column">
        <div className="main-details">
          <h2>{hotel.name}</h2>
          <p className="hotel-description">{hotel.description}</p>
        </div>
        <h5>Info</h5>
        <table className="table details-table">
          <tbody className="">
            <tr className="bg-secondary text-white">
              <th scope="row">Address</th>
              <td>{hotel.address}</td>
            </tr>
            <tr className="bg-white">
              <th scope="row">City</th>
              <td>{hotel.city}</td>
            </tr>
            <tr className="bg-secondary text-white">
              <th scope="row">Country</th>
              <td>{hotel.country}</td>
            </tr>
            <tr className="bg-white">
              <th scope="row">Price</th>
              <td>
                {' $'}
                {hotel.room_price}
              </td>
            </tr>
          </tbody>
        </table>

        <h5>Featured Amenities</h5>
        <Amenities amenities={amenities} />
        <div
          onClick={createReservation}
          role="presentation"
          aria-hidden="true"
          className={style['link-button']}
          style={{ 'align-self': 'center' }}
        >
          <IconContext.Provider value={{ color: 'white' }}>
            <RiIcon.RiHealthBookLine size={24} />
            <span className={style['link-text']}>Reserve</span>
            <AiIcon.AiOutlineRightCircle size={24} />
          </IconContext.Provider>
        </div>
      </div>
      <Link to="/main" className="back-arrow position-absolute">
        <IconContext.Provider value={{ color: 'white' }}>
          <BiLeftArrow />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default HotelDetails;
