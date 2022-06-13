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
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
  return true;
};

const cancelReservation = (id) => async (dispatch) => {
  const response = await axios.delete(`${API_URL}reservations/${id}`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('USER')).token,
    },
  });
  try {
    const result = await response.data;
    await fetchReservations()(dispatch);
    return result.message;
  } catch (error) {
    // prettier-ignore
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return message;
  }
};

const reservationService = {
  fetchReservations,
  cancelReservation,
};

export default reservationService;
