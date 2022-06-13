import axios from 'axios';
import { getCountries, getCities } from './location-slice';

const API_URL = 'https://reservify-app.herokuapp.com/api/v1/';

const config = {
  headers: {
    Authorization: JSON.parse(localStorage.getItem('USER')).token,
  },
};

const fetchCountries = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}countries`, config);
  try {
    const result = await response.data;
    const allCountries = result.map((el) => el.country);
    dispatch(getCountries(allCountries));
  } catch (error) {
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const fetchCities = (country) => async (dispatch) => {
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

const locationService = {
  fetchCountries,
  fetchCities,
};

export default locationService;
