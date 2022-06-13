import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    countries: [],
    cities: [],
    hotels: [],
  },
  reducers: {
    getCountries: (state, action) => {
      state.countries = action.payload;
    },
    getCities: (state, action) => {
      state.cities = action.payload;
    },
    getHotelsByLocation: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

//  prettier-ignore
export const { getCountries, getCities, getHotelsByLocation } = locationSlice.actions;
export default locationSlice.reducer;
