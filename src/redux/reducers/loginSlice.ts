import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserApi } from '../actions/getUser';
import { loginApi } from '../actions/login';

interface IAuthSlice {
  isLoading: boolean;
  error: string;
  isTokenActive: boolean;
}
const initialState: IAuthSlice = {
  isLoading: false,
  error: '',
  isTokenActive: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setTokenStatus(state, action: PayloadAction<boolean>) {
      state.isTokenActive = action.payload;
    },
    clearError(state) {
      state.error = '';
    },
  },
  extraReducers: {
    [loginApi.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [loginApi.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isTokenActive = true;
    },
    [loginApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isTokenActive = false;
    },
    [getUserApi.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [getUserApi.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.isTokenActive = true;
      state.error = '';
    },
    [getUserApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isTokenActive = false;
      state.error = action.payload;
    },
  },
});

export const loginReducer = loginSlice.reducer;
