import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';

interface ILoginApi {
  login: string;
  password: string;
}

export const loginApi = createAsyncThunk('user/login', async (data: ILoginApi, thunkApi) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      login: data.login,
      password: data.password,
    });

    localStorage.setItem('token', response.data);
    return;
  } catch (error) {
    const err = error as AxiosError;
    return thunkApi.rejectWithValue(err.response?.data);
  }
});
