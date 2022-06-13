import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    countries: [],
    cities: [],
  },
  reducers: {
    getCountries: (state, action) => {
      state.countries = action.payload;
    },
    getCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { getCountries, getCities } = locationSlice.actions;
export default locationSlice.reducer;
