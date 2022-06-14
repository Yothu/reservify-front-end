import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotels: [],
    details: {},
  },
  reducers: {
    deleteHotel(state, action) {
      // prettier-ignore
      state.hotels.splice(state.hotels.findIndex((hotel) => hotel.id === action.payload.id), 1);
    },
    fetchHotels(state, action) {
      state.hotels = action.payload;
    },
    fetchOneHotel(state, action) {
      state.details = action.payload;
    },
  },
});

export const { deleteHotel, fetchHotels, fetchOneHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
