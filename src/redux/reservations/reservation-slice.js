import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
  },
  reducers: {
    getReservations(state, action) {
      state.reservations = action.payload;
    },
  },
});

export const { getReservations } = reservationSlice.actions;
export default reservationSlice.reducer;
