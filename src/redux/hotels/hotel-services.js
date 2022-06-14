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
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

// Add a new hotel
const addHotelToAPI = async (data) => {
  const fd = new FormData();
  fd.append('hotel[name]', data.name);
  fd.append('hotel[description]', data.description);
  fd.append('hotel[country]', data.country);
  fd.append('hotel[city]', data.city);
  fd.append('hotel[address]', data.address);
  fd.append('hotel[stars]', data.stars);
  fd.append('hotel[image]', data.image[0]);
  fd.append('hotel[number_of_rooms]', data.number_of_rooms);
  fd.append('hotel[room_price]', data.room_price);
  fd.append('hotel[image_url]', 'fake_url');
  fd.append('hotel[wifi]', data.wifi);
  fd.append('hotel[public_pool]', data.public_pool);
  fd.append('hotel[air_conditioning]', data.air_conditioning);
  fd.append('hotel[pet_friendly]', data.pet_friendly);

  const response = await axios.post(`${API_URL}hotels`, fd, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });
  return response;
};

// Delete a hotel
const deleteHotelFromAPI = async (id) => {
  const response = await axios.delete(`${API_URL}hotels/${id}`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });
  window.location.reload();
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
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
  return true;
};

const hotelService = {
  getHotels,
  addHotelToAPI,
  getOneHotel,
  deleteHotelFromAPI,
};

export default hotelService;
