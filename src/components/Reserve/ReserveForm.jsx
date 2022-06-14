import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import style from './ReserveForm.module.css';
import Select from '../Ui/Select';
import locationService from '../../redux/locations/location-services';
import reservationService from '../../redux/reservations/reservation-services';

function ReserveForm() {
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationService.fetchCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.location.countries);
  const cities = useSelector((state) => state.location.cities);
  const hotels = useSelector((state) => state.location.hotels);

  const countriesOptions = countries.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ));

  const handleCountry = (e) => {
    dispatch(locationService.fetchCities(e.target.value));
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    const obj = {
      country,
      city: e.target.value,
    };
    dispatch(locationService.fetchHotelsByLocation(obj));
  };

  const citiesOptions = cities?.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ));

  const hotelOptions = hotels.map((hotel) => (
    <option key={hotel.id} value={hotel.id}>
      {hotel.name}
    </option>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await reservationService.createReservation({
      hotel_id: e.target.hotel.value,
      room_number: 4, // MODIFY THIS
    });
    e.target.reset();

    if (reservationService.error) {
      toast.error(reservationService.error);
    }
    toast.success('Reservation created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-wrap justify-content-center">
        <Select func={handleCountry} text="Country">
          {countriesOptions}
        </Select>
        <Select func={handleCity} text="City">
          {citiesOptions}
        </Select>
        <Select text="Hotel" name="hotel">{hotelOptions}</Select>
      </div>

      <button type="submit" className={style.bookBtn}>
        Book Now
      </button>
    </form>
  );
}

export default ReserveForm;
