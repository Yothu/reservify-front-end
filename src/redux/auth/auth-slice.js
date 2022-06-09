import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auth-services';

const user = JSON.parse(localStorage.getItem('USER'));

// prettier-ignore
export const userRegister = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// prettier-ignore
export const userLogin = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
      state.user = action.payload;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    });
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
