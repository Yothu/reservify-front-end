import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotels: [],
    details: {},
  },
  reducers: {
    fetchHotels(state, action) {
      state.hotels = action.payload;
    },
    fetchOneHotel(state, action) {
      state.details = action.payload;
    },
  },
});

export const { fetchHotels, fetchOneHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
