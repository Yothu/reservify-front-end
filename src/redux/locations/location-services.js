import axios from 'axios';
import { getCountries } from './location-slice';

const API_URL = 'https://reservify-app.herokuapp.com/api/v1/';

const fetchCountries = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}countries`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });
  try {
    const result = await response.data;
    console.log(result);
    const allCountries = result.map((el) => el.country);
    console.log(allCountries);
    dispatch(getCountries(allCountries));
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
};

export default locationService;
