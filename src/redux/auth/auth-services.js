import axios from 'axios';

// Base URL for the API
const API_URL = 'https://reservify-app.herokuapp.com/';

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}users/`, userData);

  // NOTE: when we use axios it actually puts the data inside of an object called response.data
  // so, I am going to check if there is data
  // and I am going to set our local storage to the data that will include our token.

  console.log(response.data);

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }

  return response.data;
};

// Any function we create that we want to export we're just going to put it in
// authService object. and then we're going to export it as default.

// REMEMBER TO MAKE AN API REQUEST HERE
const login = async (userData) => {
  const response = await axios.post(`${API_URL}auth/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.token));
  }

  console.log(response.data);
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
