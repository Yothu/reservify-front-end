import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-slice';
import hotelReducer from './hotels/hotel-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    hotel: hotelReducer,
  },
});

export default store;
