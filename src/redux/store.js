import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './hotels/hotel-slice';
import authReducer from './auth/auth-slice';
import reservationReducer from './reservations/reservation-slice';
import locationReducer from './locations/location-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    hotel: hotelReducer,
    reservation: reservationReducer,
    location: locationReducer,
  },
});

export default store;
