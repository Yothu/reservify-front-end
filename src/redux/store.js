import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-slice';
import hotelReducer from './hotels/hotel-slice';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    hotel: hotelReducer,
    auth: authReducer,
  },
});

export default store;
