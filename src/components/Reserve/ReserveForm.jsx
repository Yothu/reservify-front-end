import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ReserveForm.module.css';
import Select from '../Ui/Select';
import locationService from '../../redux/locations/location-services';

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
    console.log(obj);
    dispatch(locationService.fetchHotelsByLocation(obj));
  };

  const citiesOptions = cities?.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ));

  const hotelOptions = hotels.map((hotel) => (
    <option key={hotel} value={hotel}>
      {hotel}
    </option>
  ));

  return (
    <form>
      <Select func={handleCountry} text="Country">
        {countriesOptions}
      </Select>
      <Select func={handleCity} text="City">
        {citiesOptions}
      </Select>
      <Select text="Hotel">{hotelOptions}</Select>

      <button type="submit" className={style.bookBtn}>
        Book Now
      </button>
    </form>
  );
}

export default ReserveForm;
