import axios from 'axios';
import { fetchHotels } from './hotel-slice';

// Base URL for the API
const API_URL = 'https://reservify-app.herokuapp.com/api/v1/';

// Fetch all hotels
const getHotels = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}hotels`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });

  try {
    const result = await response.data;
    console.log(result);
    dispatch(fetchHotels(result));
  } catch (error) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString();
    return message;
  }
  return true;
};

export default getHotels;
