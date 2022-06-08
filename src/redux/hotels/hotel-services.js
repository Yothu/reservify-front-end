import axios from 'axios';
// import { fetchHotels } from './hotel-slice';

// Base URL for the API
const API_URL = 'https://reservify-app.herokuapp.com/hotels';

// Fetch all hotels
const getHotels = async () => {
  const response = await axios.get(API_URL);

  // NOTE: when we use axios it actually puts the data inside of an object called response.data
  // so, I am going to check if there is data
  // and I am going to set our local storage to the data that will include our token.

  // console.log(response.headers.get('Authentication'));
  console.log(response.data);

  if (response.data) {
    localStorage.setItem('hotels', JSON.stringify(response.data));
  }

  return response.data;
};

// Any function we create that we want to export we're just going to put it in
// authService object. and then we're going to export it as default.

const hotelService = {
  getHotels,
};

export default hotelService;
