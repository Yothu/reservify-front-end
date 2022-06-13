import axios from 'axios';
import { getCountries, getCities, getHotelsByLocation } from './location-slice';

const API_URL = 'https://reservify-app.herokuapp.com/api/v1/';

const fetchCountries = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  };

  const response = await axios.get(`${API_URL}countries`, config);
  try {
    const result = await response.data;
    dispatch(getCountries(result));
  } catch (error) {
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const fetchCities = (country) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  };

  // prettier-ignore
  const response = await axios.post(`${API_URL}cities`, { country }, config);

  try {
    const result = await response.data;
    const allCities = result.map((el) => el.city);
    dispatch(getCities(allCities));
  } catch (error) {
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const fetchHotelsByLocation = (obj) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  };
  // prettier-ignore
  const response = await axios.post(`${API_URL}hotelsbylocation`, obj, config);

  try {
    const result = await response.data;
    const allHotels = result.map((el) => el.name);
    dispatch(getHotelsByLocation(allHotels));
  } catch (error) {
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const locationService = {
  fetchCountries,
  fetchCities,
  fetchHotelsByLocation,
};

export default locationService;
