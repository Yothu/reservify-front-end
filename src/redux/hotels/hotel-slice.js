import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotels: [
      {
        id: 1,
        name: 'hotel1',
      },
      {
        id: 2,
        name: 'hotel2',
      },
      {
        id: 3,
        name: 'hotel3',
      },
      {
        id: 4,
        name: 'hotel4',
      },
      {
        id: 5,
        name: 'hotel5',
      },
    ],
  },
  reducers: {
    deleteHotel(state, action) {
      // fetch data
      state.hotels.splice(state.hotels.findIndex((hotel) => hotel.id === action.payload.id), 1);
    },
    fetchHotels(state, action) {
      state.hotels = action.payload.hotel.hotels;
    },
  },
});

export const { deleteHotel, fetchHotels } = hotelSlice.actions;
export default hotelSlice.reducer;
