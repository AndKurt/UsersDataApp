import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';
import { getTokenFromLS } from '../../utils';

export const getUsersApi = createAsyncThunk('user/getUsers', async (_, thunkApi) => {
  try {
    const TOKEN = getTokenFromLS();
    const response = await axios.get(`${BASE_URL}/users`, {
      headers: { Authorization: TOKEN },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkApi.rejectWithValue(err.response?.data);
  }
});
