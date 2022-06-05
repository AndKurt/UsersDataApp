import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';
import { IRegisterData } from '../../interface';

export const registerAPI = createAsyncThunk(
  'user/register',
  async (data: IRegisterData, thunkApi) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        login: data.login,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.response?.data);
    }
  }
);
