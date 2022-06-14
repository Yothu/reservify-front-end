import axios from 'axios';
import { fetchHotels, fetchOneHotel } from './hotel-slice';

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
    dispatch(fetchHotels(result));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString();
    return message;
  }
  return true;
};

const addHotelToAPI = async (data) => {
  const response = await axios.post(`${API_URL}hotels`, data, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });
  return response;
};

const getOneHotel = (id) => async (dispatch) => {
  const response = await axios.get(`${API_URL}hotels/${id}`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });

  try {
    const result = await response.data;
    dispatch(fetchOneHotel(result));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const hotelService = {
  getHotels,
  addHotelToAPI,
  getOneHotel,
};

export default hotelService;
