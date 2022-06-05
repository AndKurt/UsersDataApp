import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginApi } from '../actions/login';

interface IAuthSlice {
  isLoading: boolean;
  error: string;
}
const initialState: IAuthSlice = {
  isLoading: false,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [loginApi.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [loginApi.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [loginApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const loginReducer = loginSlice.reducer;
