import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './hotels/hotel-slice';
import authReducer from './auth/auth-slice';
import reservationReducer from './reservations/reservation-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    hotel: hotelReducer,
    reservation: reservationReducer,
  },
});

export default store;
