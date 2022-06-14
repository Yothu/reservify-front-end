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
      console.log('deleteHotel', action.payload);
      state.hotels.filter((hotel) => hotel.id !== action.payload);
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
