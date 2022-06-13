import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    locations: [],
  },
  reducers: {
    getCountries: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const { getCountries } = locationSlice.actions;
export default locationSlice.reducer;
