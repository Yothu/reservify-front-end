import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotels: [],
  },
  reducers: {
    deleteHotel(state, action) {
      // prettier-ignore
      state.hotels.splice(state.hotels.findIndex((hotel) => hotel.id === action.payload.id), 1);
    },
    fetchHotels(state, action) {
      state.hotels.push(...action.payload);
    },
  },
});

export const { deleteHotel, fetchHotels } = hotelSlice.actions;
export default hotelSlice.reducer;
