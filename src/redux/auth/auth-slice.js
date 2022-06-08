import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auth-services';

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

// I added a service file to handle the http request.
// It's not neccessary but I think it's nice to break it up
// and have a service that does all of the http request.

// NOTE: I installed axios, so don't forget to install it. npm install.

// Please check the auth-services.js file first.

// createAsyncThunk is a function that takes in a name of the thunk "string"
// and a function that returns a promise.
// It's not necessary to use it, you can use regular fetch if you want,
// but it's a better way to deal with async data.

// prettier-ignore
export const userRegister = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    // that will send the user data to the reducer as a payload. (back to line 4 to remember)
    return await authService.register(userData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    // that will send the message to the reducer as a payload.
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  // if user is in local storage, set it to state else set it to null
  user: user || null,
  // for error handling
  isError: false,
  // for success message
  isSuccess: false,
  // to show spinner while fetching data
  isLoading: false,
  // for error message
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // I will dispatch this action when user is successfully registered
    // to reset the state
    reset(state) {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // Back to line 23 and 24 to remember to what action.payload is in this case
      state.user = action.payload;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      // Back to line 28 and 29 to remember to what action.payload is in this case.
      state.message = action.payload;
      state.user = null;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

// If you go to devtools->redux->state->auth, you should see the state of
// auth contains:
//                   user:null,
//                   isError:false
//                   isSuccess:false
//                   isLoading:false
//                   message:''
