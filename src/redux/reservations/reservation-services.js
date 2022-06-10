import axios from 'axios';
import { getReservations } from './reservation-slice';

const API_URL = 'https://reservify-app.herokuapp.com/api/v1/';

const fetchReservations = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}reservations`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });

  try {
    const result = await response.data;
    console.log(result);
    dispatch(getReservations(result));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const reservationService = {
  fetchReservations,
};

export default reservationService;
