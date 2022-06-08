// import axios from 'axios';
import { fetchHotels } from './hotel-slice';

// Base URL for the API
// const API_URL = 'https://reservify-app.herokuapp.com/hotels';

// Fetch all hotels
const getHotels = () => async (dispatch) => {
  // const response = await axios.get(API_URL);
  // console.log(response.data);

  const FAKE_DATA = [
    {
      id: 1,
      name: 'Hotel 1',
      country: 'Country 1',
      city: 'City 1',
      street: 'Street 1',
      stars: 1,
    },
    {
      id: 2,
      name: 'Hotel 2',
      country: 'Country 2',
      city: 'City 2',
      street: 'Street 2',
      stars: 2,
    },
  ];

  dispatch(fetchHotels(FAKE_DATA));
};

export default getHotels;
