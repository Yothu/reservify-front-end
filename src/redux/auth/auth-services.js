import axios from 'axios';

// Base URL for the API
const API_URL = 'https://reservify-app.herokuapp.com/';

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}users/`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}auth/login`, userData);
  if (response.data) {
    localStorage.setItem('USER', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('USER');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
